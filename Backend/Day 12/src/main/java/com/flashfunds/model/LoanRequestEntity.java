package com.flashfunds.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="reqloan")
public class LoanRequestEntity{
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullName;
    private String email;
    private String phoneNumber;
    private Double loanAmount;
    private String purpose;
    private String country;
    private Double monthlyExpenses;
    private String category;
    private String gender;
    private String existingLoans;
    private String creditScore;
    private String panCard;
    private String aadhaarCard;
    private String bankAccountDetails;
    private String employmentStatus;
    private String currentEmployer;
    private String businessDetails;
    private Double monthlyIncome;
    private String imageUrl;
    
}
