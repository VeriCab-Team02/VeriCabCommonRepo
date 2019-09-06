package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.model.PassengerModel;

import com.example.demo.repos.PassengerRepository;

@Service
public class PassengerService {
	
	
		
		@Autowired
		public PassengerRepository repo;
		
		//can be called by admin or passenger
		public PassengerModel addPassenger(PassengerModel passenger) {
			
			return this.repo.save(passenger);
		}
		
		public Iterable<PassengerModel> viewPassengers(){
			System.out.println("viewPassengers in service is called");
			return this.repo.findAll();
		}
		
		//called by admin only
		public void deletePassenger(long id) {
			 this.repo.deleteById(id);
			
		}

	

}
