package com.codegym.controller;

import com.codegym.dto.StudentDto;
import com.codegym.exception.StudentException;
import com.codegym.model.Student;
import com.codegym.service.IClassStudentService;
import com.codegym.service.IStudentService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequestMapping(value = "/student")
@Controller
@SessionAttributes("studentTalkList")
public class StudentController {

    @ModelAttribute("studentTalkList")
    public List<Student> createStudentTalkList() {
        return new ArrayList<>();
    }

    // Singleton
    @Autowired
    private IStudentService iStudentService;

    @Autowired
    private IClassStudentService iClassStudentService;

    @GetMapping(value = {"/", "/list"})
    public ModelAndView goListStudent(@PageableDefault(size = 2) Pageable pageable,
                                      @RequestParam Optional<String> keyword) {
        String keywordValue = "";

        if (keyword.isPresent()) {
            keywordValue = keyword.get();
        }

        ModelAndView modelAndView = new ModelAndView("list_student");
        Page<Student> studentList = iStudentService.findAllSearchName(pageable, keywordValue);

        modelAndView.addObject("keywordValue", keywordValue);
        modelAndView.addObject("studentList", studentList);

        return modelAndView;
    }

    @GetMapping(value = "/detail")
    public String goDetailStudent(@RequestParam Integer idStudent, Model model) throws StudentException {
        Student student = this.iStudentService.findById(idStudent);

        if (student == null) {
            throw new StudentException();
        }

        model.addAttribute("studentObj",
                student);

        return "detail_student";
    }

    @GetMapping(value = "/detail/{idStudent}")
    public String goDetailStudentPV(@PathVariable Integer idStudent, Model model) {
        model.addAttribute("studentObj",
                this.iStudentService.findById(idStudent));

        return "detail_student";
    }

    @GetMapping(value = "/create")
    public String goCreateNewStudent(Model model,
                                     @CookieValue(defaultValue = "0") String cookieCount) {
        model.addAttribute("listClass", this.iClassStudentService.findAll());
        model.addAttribute("studentDto", new StudentDto());
        model.addAttribute("cookieCount", cookieCount);

        return "create_student";
    }

    @PostMapping(value = "/create")
    public String createStudent(@ModelAttribute @Valid StudentDto studentDto,
                                BindingResult bindingResult,
                                RedirectAttributes redirectAttributes,
                                Model model,
                                HttpServletResponse response,
                                @RequestParam String countStudent) {

        int countStudentAfter = Integer.parseInt(countStudent) + 1;
        Cookie cookie = new Cookie("cookieCount", countStudentAfter + "");
        cookie.setMaxAge(30);
        response.addCookie(cookie);

        new StudentDto().validate(studentDto, bindingResult);

        if (bindingResult.hasErrors()) {
            model.addAttribute("listClass", this.iClassStudentService.findAll());
            return "create_student";
        }

        Student student = new Student();
        BeanUtils.copyProperties(studentDto, student);
        this.iStudentService.save(student);

        redirectAttributes.addFlashAttribute("msg",
                "Create new successfully!");

        return "redirect:/student/list";
    }

    @GetMapping(value = "/addTalk/{id}")
    public String addToTalkList(@PathVariable Integer id,
                                @SessionAttribute List<Student> studentTalkList,
                                RedirectAttributes redirectAttributes) {

        Student studentObj = this.iStudentService.findById(id);
        studentTalkList.add(studentObj);

        redirectAttributes.addFlashAttribute("msg",
                "Add student to talk successfully!");

        return "redirect:/student/list";
    }

    @ExceptionHandler(StudentException.class)
    public String handleStudentException() {
        return "error_student_exception";
    }
}
