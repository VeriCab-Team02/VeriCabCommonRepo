package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.TripDataModel;
import com.example.demo.service.PaymentService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@CrossOrigin(origins = "*")
public class PaymentServiceController {


	@Autowired
	private PaymentService service;
	
	
	
	@PostMapping("/getFare")
	public TripDataModel fareCalculation(@RequestBody TripDataModel entity) {
		//log.info(tripEntity.toString());
		//FARE CALCULATION COMES HERE
		double fare = 70;
		entity.setFare(fare);
		entity.setTripCompleted(true);
		return service.saveFareAndTripCompleted(entity);
		
	}
	
	
	
	

}
