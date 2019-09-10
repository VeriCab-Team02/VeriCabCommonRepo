package com.example.demo.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.OffersModel;
import com.example.demo.repo.OfferRepository;



@Service
public class AdminService {
	

	@Autowired
	private OfferRepository repo;
	
	public void addOffers(OffersModel offers) {
		
		repo.save(offers);
	}
	
	public void removeOffers(Long offerId) {
		
		repo.deleteById(offerId);
	}

	
	public Iterable<OffersModel> getOffers(){
		
		
		return repo.findAll();
	}

	

	

}
