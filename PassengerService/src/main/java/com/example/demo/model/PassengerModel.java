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
	private String sourceLocation;
	private Boolean passengerChoseDriver; //has to be set by passenger UI
	private Boolean passengerChoseDriverWithCar; //has to be set by passenger UI's backend
	private String carType; //if the passenger chose CarWithDriver... should be set null if passenger chose driver alone
	private Long driverId;//if the passenger chose Driver or CarWithDriver
	private Boolean passengerHasTrip;
	private Boolean paymentHasCompleted;//needed so that the passenger is in payment page until it gets completed
	private String dateOfTrip;
	//Note: dateofpickup and timeofpickup will be packed into another custom class and sent to queue
	
}
