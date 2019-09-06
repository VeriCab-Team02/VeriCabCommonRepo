package com.example.demo.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.model.PassengerModel;

import com.example.demo.service.PassengerService;


@RestController
public class PassengerController {
	
	@Autowired
	public PassengerModel passenger;
	

	@Autowired
	public PassengerService service;
	
	@PostMapping("/addPassengers")
	public boolean addPassengers(@Valid @RequestBody PassengerModel passenger) {
		this.service.addPassenger(passenger);
		
		return true;
	}
	
	@GetMapping("/viewPassengers")
	public Iterable<PassengerModel> findAllPassengers(){
		System.out.println("get mapping in pass controller called");
		return this.service.viewPassengers();
	}
	
	@PutMapping("/updatePassenger/{id}")
	public PassengerModel updatePassenger(@PathVariable(value="id") long id, @RequestBody PassengerModel passenger) {
		
		return this.service.addPassenger(passenger);
	}
	
	@DeleteMapping("/deletePassenger/{id}")
	public void deletePassenger(@PathVariable(value="id") long id) {
		
		this.service.deletePassenger(id);
	}

}
