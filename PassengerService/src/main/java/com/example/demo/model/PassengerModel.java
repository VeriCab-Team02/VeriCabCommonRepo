package com.example.demo.model;



import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name="passenger_details")
@Component
public class PassengerModel {
	
	@Id
	@NotNull
	private Long passengerId;
	private String passengerName;
	private String passengerGender;
	private Long passengerPhoneNumber;
	private String passengerEmail;

	
}
