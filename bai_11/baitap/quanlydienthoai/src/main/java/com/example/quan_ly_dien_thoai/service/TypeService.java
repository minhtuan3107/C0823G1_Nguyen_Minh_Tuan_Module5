package com.example.quan_ly_dien_thoai.service;

import com.example.quan_ly_dien_thoai.model.Product;
import com.example.quan_ly_dien_thoai.model.Type;
import com.example.quan_ly_dien_thoai.repository.ITypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TypeService implements ITypeService {
    @Autowired
    private ITypeRepository typeRepository;

    @Override
    public Iterable<Type> getList() {
        return typeRepository.findAll();
    }
}
