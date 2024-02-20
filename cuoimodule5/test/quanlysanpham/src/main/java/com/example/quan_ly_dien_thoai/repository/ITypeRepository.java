package com.example.quan_ly_dien_thoai.repository;

import com.example.quan_ly_dien_thoai.model.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ITypeRepository extends JpaRepository<Type, Integer> {
}
