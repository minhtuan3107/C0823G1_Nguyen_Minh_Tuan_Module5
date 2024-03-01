package com.codegym.controller;

import com.codegym.dto.StudentDto;
import com.codegym.model.ClassStudent;
import com.codegym.model.Student;
import com.codegym.service.IStudentService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping(value = "/studentRest")
@RestController
@CrossOrigin
public class StudentRestController {

    @Autowired
    private IStudentService iStudentService;

    @GetMapping(value = {"/", "/list"})
    public ResponseEntity<Page<Student>> getListStudent(@PageableDefault(size = 5) Pageable pageable) {
        Page<Student> studentList = this.iStudentService.findAll(pageable);

        if (studentList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(studentList, HttpStatus.OK);
    }

    @GetMapping(value = "/detail/{id}")
    public ResponseEntity<Student> getInfoStudent(@PathVariable Integer id) {

        Student studentObj = this.iStudentService.findById(id);

        if (studentObj == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(studentObj, HttpStatus.OK);
    }

    @PostMapping(value = "/create")
    public ResponseEntity<List<FieldError>> createStudent(@RequestBody @Valid StudentDto studentDto,
                                                          BindingResult bindingResult) {


        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getFieldErrors(),
                    HttpStatus.NOT_ACCEPTABLE);
        }

        Student studentObj = new Student();
        BeanUtils.copyProperties(studentDto, studentObj);
        ClassStudent classStudent = new ClassStudent();
        classStudent.setId(studentDto.getClassStudentDto().getId());
        studentObj.setClassStudent(classStudent);

        this.iStudentService.save(studentObj);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
