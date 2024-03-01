package com.example.quan_ly_dien_thoai.repository;

import com.example.quan_ly_dien_thoai.model.Product;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.awt.print.Pageable;

@Transactional
@Repository
public interface IProductRepository extends JpaRepository<Product, Integer> {

    @Modifying
    @Query(value = "delete from product where id = :id", nativeQuery = true)
    void removes(@Param("id") int id);

    //    @Query(value = "select * from product", nativeQuery = true)
//    Iterable<Product> getList();
    @Modifying
    @Query(value = " SELECT * FROM product LIMIT 6, 3", nativeQuery = true)
    Iterable<Product> getList();


    @Modifying
    @Query(value = " SELECT * FROM product LIMIT :number, 3", nativeQuery = true)
    Iterable<Product> getListPage(@Param("number") int number);

    @Query(value = "select * from product where name like :name or type like :type", nativeQuery = true)
    Iterable<Product> searchProduct(@Param("name") String name, @Param("type") String type);

    @Modifying
    @Query(value = "INSERT INTO product (name, date, count, type) VALUES (:name, :date, :count, :type)", nativeQuery = true)
    void addProduct(@Param("name") String name, @Param("date") String date, @Param("count") int count, @Param("type") String type);

    @Modifying
    @Query(value = "UPDATE product SET name = :name, date = :date, count = :count, type = :type WHERE id = :id", nativeQuery = true)
    void editProduct(@Param("id") int id, @Param("name") String name, @Param("date") String date, @Param("count") int count, @Param("type") String type);
}
