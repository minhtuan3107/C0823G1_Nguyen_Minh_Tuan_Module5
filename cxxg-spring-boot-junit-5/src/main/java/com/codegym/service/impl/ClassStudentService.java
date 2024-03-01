package com.codegym.service.impl;

import com.codegym.model.ClassStudent;
import com.codegym.repository.IClassStudentRepository;
import com.codegym.service.IClassStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClassStudentService implements IClassStudentService {

    @Autowired
    private IClassStudentRepository iClassStudentRepository;

    @Override
    public List<ClassStudent> findAll() {
        return this.iClassStudentRepository.findAll();
    }
}
