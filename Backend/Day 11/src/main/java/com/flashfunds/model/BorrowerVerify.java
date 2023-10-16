package com.flashfunds.model;



import jakarta.persistence.Entity;

import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="borrower")
public class BorrowerVerify {
	@Id
	private int id;
	private String fullName;
	private String phone;
	private String address;
	private String aadharNo;
	private long income;
	private int creditScore;
	private String bankAccountNumber;
	private String ifscCode;
}
