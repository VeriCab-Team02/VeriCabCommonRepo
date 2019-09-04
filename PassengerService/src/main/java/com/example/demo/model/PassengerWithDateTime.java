package com.example.demo.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
public class PassengerWithDateTime {
	@Autowired
	PassengerModel passengerModelObj;
	private String dateAndTimeOfPickup;
	
}
