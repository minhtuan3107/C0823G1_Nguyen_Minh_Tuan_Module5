package com.codegym.controller;

import com.codegym.model.ClassStudent;
import com.codegym.service.IClassStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping(value = "/classStudentRest")
@RestController
@CrossOrigin
public class ClassStudentRestController {

    @Autowired
    private IClassStudentService iClassStudentService;

    @GetMapping(value = {"/", "/list"})
    public ResponseEntity<List<ClassStudent>> getListStudent() {
        List<ClassStudent> classStudentList = this.iClassStudentService.findAll();

        if (classStudentList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(classStudentList, HttpStatus.OK);
    }
}
