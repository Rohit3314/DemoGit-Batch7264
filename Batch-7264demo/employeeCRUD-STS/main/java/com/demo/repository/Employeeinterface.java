package com.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.model.Employee;

public interface Employeeinterface extends JpaRepository<Employee,Integer>
{

}
