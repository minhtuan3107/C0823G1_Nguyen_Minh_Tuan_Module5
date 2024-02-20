package com.example.quan_ly_dien_thoai.service;

import com.example.quan_ly_dien_thoai.model.Product;
import com.example.quan_ly_dien_thoai.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.awt.print.Pageable;
import java.util.Optional;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;

    @Override
    public Iterable<Product> getList() {
        return productRepository.getList();
    }


    @Override
    public Optional<Product> findById(int id) {
        return productRepository.findById(id);
    }

    @Override
    public Product save(Product product) {
        productRepository.addProduct(product.getName(), product.getDate(), product.getCount(), product.getType());
        return null;
    }

    @Override
    public Product edit(Product product) {
        productRepository.editProduct(product.getId(), product.getName(), product.getDate(), product.getCount(), product.getType());
        return null;
    }

    @Override
    public Iterable<Product> search(String name, String type) {
        return productRepository.searchProduct(name, type);
    }


    @Override
    public void removes(int id) {
        productRepository.removes(id);
    }
}
