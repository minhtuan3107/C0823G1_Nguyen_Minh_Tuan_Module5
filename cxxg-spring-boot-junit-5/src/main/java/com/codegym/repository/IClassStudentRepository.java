package com.codegym.repository;

import com.codegym.model.ClassStudent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IClassStudentRepository extends JpaRepository<ClassStudent, Integer> {
}
