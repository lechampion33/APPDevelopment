package com.lending;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
@OpenAPIDefinition(
		info =@Info(
				title = "FlashFunds",
				version = "1.1.2",
				description = "App Description",
				contact = @Contact(
						name = "Ajith Kumar",
						email = "akjstyles003@gmail.com"
						)
				)
		)
@SpringBootApplication
public class LendingPlatfromApplication {

	public static void main(String[] args) {
		SpringApplication.run(LendingPlatfromApplication.class, args);
	}

}
