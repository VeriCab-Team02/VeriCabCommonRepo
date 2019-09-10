package com.example.demo.repos;

import org.springframework.data.cassandra.core.CassandraOperations;
import org.springframework.data.cassandra.repository.CassandraRepository;

import com.example.demo.model.TripDataModel;

public interface PaymentRepo extends CassandraRepository<TripDataModel, Long> {

}
