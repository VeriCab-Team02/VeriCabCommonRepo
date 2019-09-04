package com.example.demo.repos;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.PassengerModel;

public interface PassengerRepository extends CrudRepository<PassengerModel, Long> {

}
