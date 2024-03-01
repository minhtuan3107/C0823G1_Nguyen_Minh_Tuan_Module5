package com.codegym.dto;

import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class StudentDto implements Validator {

    private Integer id;

    @NotBlank(message = "Please input name (blank)")
    private String name;

    @NotBlank(message = "Please input date of birth")
    @Pattern(regexp = "\\d{4}-\\d{2}-\\d{2}", message = "Invalid format dob")
    private String dateOfBirth;

    private Integer gender;
    private Double grade;
    private ClassStudentDto classStudentDto;

    public StudentDto() {
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public Integer getGender() {
        return gender;
    }

    public void setGender(Integer gender) {
        this.gender = gender;
    }

    public Double getGrade() {
        return grade;
    }

    public void setGrade(Double grade) {
        this.grade = grade;
    }

    public ClassStudentDto getClassStudentDto() {
        return classStudentDto;
    }

    public void setClassStudentDto(ClassStudentDto classStudentDto) {
        this.classStudentDto = classStudentDto;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    /**
     * @param target ~studentDto
     * @param errors ~bindingResult
     */
    @Override
    public void validate(Object target, Errors errors) {
        StudentDto studentDto = (StudentDto) target;

        if (!studentDto.name.matches("[A-Za-z ]+")) {
            errors.rejectValue("name", "name.invalidFormat");
        }

        // check age >= 18
        //...
    }
}
