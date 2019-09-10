package com.example.demo.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.OffersModel;

@Repository
public interface OfferRepository extends CrudRepository<OffersModel, Long>{

}
