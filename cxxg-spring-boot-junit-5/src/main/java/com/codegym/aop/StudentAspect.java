package com.codegym.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
@Aspect
public class StudentAspect {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @AfterReturning("execution(* com.codegym.controller.StudentController.*(..))")
    public void logAfterMethodReturn(JoinPoint joinPoint) {
        String nameMethod = joinPoint.getSignature().getName();
        String args = Arrays.toString(joinPoint.getArgs());
//        System.err.println(nameMethod);
        logger.error("Ten phuong thuc: " + nameMethod);
        logger.error("Cac tham so la: " + args);
    }
}
