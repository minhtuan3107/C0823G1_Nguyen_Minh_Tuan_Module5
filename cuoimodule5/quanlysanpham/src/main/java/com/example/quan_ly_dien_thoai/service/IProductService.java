package com.example.quan_ly_dien_thoai.service;

import com.example.quan_ly_dien_thoai.model.Product;
import org.springframework.data.domain.Page;

import java.awt.print.Pageable;
import java.util.Optional;

public interface IProductService {
    Iterable<Product> getList();


    Optional<Product> findById(int id);

    Product save(Product product);


    void removes(int id);

    Product edit(Product product);

    Iterable<Product> search(String name, String type);


}
