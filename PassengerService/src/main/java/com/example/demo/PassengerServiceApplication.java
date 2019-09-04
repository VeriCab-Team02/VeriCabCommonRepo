package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.example.demo.model.PassengerModel;
import com.example.demo.service.PassengerService;

@SpringBootApplication
public class PassengerServiceApplication {

	public static void main(String[] args) {
		
		ConfigurableApplicationContext ctx = SpringApplication.run(PassengerServiceApplication.class, args);
		
		PassengerService service = ctx.getBean(PassengerService.class);
		PassengerModel pgr = ctx.getBean(PassengerModel.class);
		
		pgr.setCarType("sampleCarType");
		pgr.setDateOfTrip("sampleDateOfTrip");
		pgr.setDriverId(1234L);
		pgr.setPassengerChoseDriver(false);
		pgr.setPassengerChoseDriverWithCar(false);
		pgr.setPassengerEmail("sampleEmail");
		pgr.setPassengerGender("male");
		pgr.setPassengerHasTrip(false);
		pgr.setPassengerId(1L);
		pgr.setPassengerName("sampleName");
		pgr.setPassengerPhoneNumber(123456L);
		pgr.setPaymentHasCompleted(false);
		pgr.setSourceLocation("sampleLocation");
		
		service.addPassenger(pgr);
	}

}
