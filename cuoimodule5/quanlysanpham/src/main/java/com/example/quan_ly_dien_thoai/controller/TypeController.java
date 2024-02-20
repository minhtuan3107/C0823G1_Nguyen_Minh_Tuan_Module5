package com.example.quan_ly_dien_thoai.controller;

import com.example.quan_ly_dien_thoai.model.Type;
import com.example.quan_ly_dien_thoai.service.ITypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin("*")
@RequestMapping("/type")
public class TypeController {
    @Autowired
    private ITypeService typeService;
    @GetMapping()
    public ResponseEntity<Iterable<Type>> listType() {
        return new ResponseEntity<>(typeService.getList(), HttpStatus.OK);
    }
}
