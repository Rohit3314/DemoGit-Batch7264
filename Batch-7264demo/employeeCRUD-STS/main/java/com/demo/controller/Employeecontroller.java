package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.Employee;

import com.demo.repository.Employeeinterface;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class Employeecontroller 
{

	@Autowired
	private Employeeinterface einterface;
	
	
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/getdata")
	@ResponseBody
	public List<Employee> getdata()
	{
		return this.einterface.findAll();
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/insertdata")
	public void insertdata(@RequestBody Employee f2)
	{
		this.einterface.save(f2);
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/deletedata")
	public void deletedata(@RequestBody Employee eid)
	{
		this.einterface.delete(eid);
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/updatedata")
	public void updatedata( @RequestBody Employee f4)
	{
		this.einterface.save(f4);
	}
	
}
