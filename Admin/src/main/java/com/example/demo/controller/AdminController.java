package com.example.demo.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.OffersModel;
import com.example.demo.service.AdminService;

@RestController
@CrossOrigin(origins = "*")
public class AdminController {

	@Autowired
	public AdminService service;

	
	@PostMapping("/addOffers")
	public Boolean addOffers(@RequestBody OffersModel offers) {
	
		System.out.println(offers.getOfferCode());
		service.addOffers(offers);
		return true;
	}

	@DeleteMapping("/deleteOffer/{offerId}")
	public Boolean deleteOffers(@PathVariable("offerId") Long offerId) {
		
		service.removeOffers(offerId);
		
		return  true;
	}
	
	@GetMapping("/viewOffers")
	public Iterable<OffersModel> viewOffers(){
		
		return this.service.getOffers();
	}

	

	
	

}
