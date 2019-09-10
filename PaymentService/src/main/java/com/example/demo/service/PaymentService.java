package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.model.TripDataModel;
import com.example.demo.repos.PaymentRepo;


public class PaymentService {
	
	@Autowired
	private PaymentRepo repo;
	
	public TripDataModel saveFareAndTripCompleted(TripDataModel entity)
	{
		return repo.save(entity);
	
		
	}
	
	public Optional<TripDataModel> getTrip(long id)
	{
		return repo.findById(id);
		
	}

}
