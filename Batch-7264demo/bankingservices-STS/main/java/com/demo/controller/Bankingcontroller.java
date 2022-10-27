package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.Banking;
import com.demo.repository.Bankingrepo;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class Bankingcontroller 
{
	

	@Autowired
	private Bankingrepo b1;
	
	static double view;
	
	public double oldbalance(int accno)            // template to work with old balance
	{
		Banking b3 = this.b1.getById(accno);
         return (b3.getBalance());		
	}
	public String oldname(int accno)            // template to work with old balance
	{
		Banking b3 = this.b1.getById(accno);
         return (b3.getName());		
	}
	public String oldaddress(int accno)            // template to work with old balance
	{
		Banking b3 = this.b1.getById(accno);
         return (b3.getAddress());		
	}
	public long oldcontact(int accno)            // template to work with old balance
	{
		Banking b3 = this.b1.getById(accno);
         return (b3.getContact());		
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/depositdata")
	public Banking depositdata(@RequestBody Banking b2)
	{
		int accno1 = b2.getAccno();
		 
	    String address1 = oldaddress(accno1);
		long contact1 = oldcontact(accno1);
		String name1 =  oldname(accno1);
		double balance1 = b2.getBalance();
		
		double oldb = oldbalance(accno1);
		balance1 = oldb+balance1;
		
		b2.setAccno(accno1);
		b2.setName(name1);
		b2.setAddress(address1);
		b2.setContact(contact1);
		b2.setBalance(balance1);
		return b1.save(b2);
		
	}
	
	
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/withdrawl")
	public Banking withdrawl(@RequestBody Banking b2)
	{
		int accno1 = b2.getAccno();
		 
	    String address1 = oldaddress(accno1);
		long contact1 = oldcontact(accno1);
		String name1 =  oldname(accno1);
		double balance1 = b2.getBalance();
		
		double oldb = oldbalance(accno1);
		balance1 = oldb-balance1;
		
		b2.setAccno(accno1);
		b2.setName(name1);
		b2.setAddress(address1);
		b2.setContact(contact1);
		b2.setBalance(balance1);
		return b1.save(b2);
		
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/view")
	public void view(@RequestBody Banking b4)
	{
		int accno2 = b4.getAccno();
		view = oldbalance(accno2);
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/viewdata")
	@ResponseBody
	public double viewdata()
	{
		return view;
	}
	
	@CrossOrigin("http://localhost:4200")
    @PostMapping("/deletedata")
    public void deletedata(@RequestBody Banking b2)
    {
        int accno1 = b2.getAccno();
        String address1 = oldaddress(accno1);
        String name1 = oldname(accno1);
        long contact1 = oldcontact(accno1);
        double balance1 = b2.getBalance();
        
         b1.delete(b2);
         
    }

	
	
}
