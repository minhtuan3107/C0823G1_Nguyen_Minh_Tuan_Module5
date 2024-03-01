package com.codegym.controller;

import com.codegym.model.Student;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttribute;

import java.util.List;

@Controller
@RequestMapping("/talk")
public class StudentTalkController {

    @GetMapping("/")
    public String goTalkList(@SessionAttribute List<Student> studentTalkList,
                             Model model) {
        model.addAttribute("studentTalkList", studentTalkList);

        return "student_talk";
    }
}
