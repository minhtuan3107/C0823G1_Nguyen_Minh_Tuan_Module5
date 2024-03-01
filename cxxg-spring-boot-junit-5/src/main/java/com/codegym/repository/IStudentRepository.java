package com.codegym.repository;

import com.codegym.model.Student;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IStudentRepository extends JpaRepository<Student, Integer> {

    // SELECT * FROM student WHERE name like %keyword%
    Page<Student> findAllByNameContaining(Pageable pageable, String keyword);

    @Query(value = "select * " +
            "from student " +
            "where concat(`name`, date_of_birth) like :keywordParam", nativeQuery = true)
    Page<Student> getStudentBySearchingName(Pageable pageable,
                                            @Param("keywordParam") String keyword);
}
