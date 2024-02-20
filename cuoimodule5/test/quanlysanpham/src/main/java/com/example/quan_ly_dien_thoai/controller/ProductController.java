package com.example.quan_ly_dien_thoai.controller;

import com.example.quan_ly_dien_thoai.model.Product;
import com.example.quan_ly_dien_thoai.repository.IProductRepository;
import com.example.quan_ly_dien_thoai.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@CrossOrigin("*")
@RequestMapping("/api")
public class ProductController {
    @Autowired
    private IProductService productService;
    @Autowired
    private IProductRepository productRepository;
    @GetMapping
    public ResponseEntity<Iterable<Product>> listProduct() {
        return new ResponseEntity<>(productService.getList(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Iterable<Product>> listProductPage(@PathVariable int id) {
        return new ResponseEntity<>(productRepository.getListPage(id), HttpStatus.OK);
    }

    @GetMapping("find/{id}")
    public ResponseEntity<Optional<Product>> find(@PathVariable int id) {
        return new ResponseEntity<>(productService.findById(id), HttpStatus.OK);
    }


    @PutMapping("edit/{id}")
    public ResponseEntity<Product> edit(@PathVariable int id, @RequestBody Product product) {
        return new ResponseEntity<>(productService.edit(product), HttpStatus.OK);
    }

    @PostMapping("add")
    public ResponseEntity<Product> createSmartphone(@RequestBody Product product) {
        return new ResponseEntity<>(productService.save(product), HttpStatus.CREATED);
    }



    @DeleteMapping("delete/{id}")
    public ResponseEntity<Product> deleteProduct(@PathVariable int id) {
        Optional<Product> productOptional = productService.findById(id);
        if (!productOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        productService.removes(id);
        return new ResponseEntity<>(productOptional.get(), HttpStatus.NO_CONTENT);
    }

    @GetMapping("search/{name}/{type}")
    public ResponseEntity<Iterable<Product>> listProductSearch(@PathVariable String name, @PathVariable String type) {
        return new ResponseEntity<>(productService.search(name, type), HttpStatus.OK);
    }
}
