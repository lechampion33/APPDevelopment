package com.flashfundslending.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="BorrowerVerify")
public class BorrowerVerifyEntity {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@JsonIgnore
	private int id;
	private String name;
	private String username;
	private String phone;
	private String address;
	private String aadharNo;
	private boolean existingLoans;
	private long income;
	private int creditScore;
	private String bankAccountNumber;
	private String ifscCode;
	public BorrowerVerifyEntity(int id, String name, String username, String phone, String address, String aadharNo,
			boolean existingLoans, long income, int creditScore, String bankAccountNumber, String ifscCode) {
		super();
		this.id = id;
		this.name = name;
		this.username = username;
		this.phone = phone;
		this.address = address;
		this.aadharNo = aadharNo;
		this.existingLoans = existingLoans;
		this.income = income;
		this.creditScore = creditScore;
		this.bankAccountNumber = bankAccountNumber;
		this.ifscCode = ifscCode;
	}
	@Override
	public String toString() {
		return "BorrowerVerifyEntity [id=" + id + ", name=" + name + ", username=" + username + ", phone=" + phone
				+ ", address=" + address + ", aadharNo=" + aadharNo + ", existingLoans=" + existingLoans + ", income="
				+ income + ", creditScore=" + creditScore + ", bankAccountNumber=" + bankAccountNumber + ", ifscCode="
				+ ifscCode + "]";
	}
	public BorrowerVerifyEntity() {
		super();
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getAadharNo() {
		return aadharNo;
	}
	public void setAadharNo(String aadharNo) {
		this.aadharNo = aadharNo;
	}
	public boolean isExistingLoans() {
		return existingLoans;
	}
	public void setExistingLoans(boolean existingLoans) {
		this.existingLoans = existingLoans;
	}
	public long getIncome() {
		return income;
	}
	public void setIncome(long income) {
		this.income = income;
	}
	public int getCreditScore() {
		return creditScore;
	}
	public void setCreditScore(int creditScore) {
		this.creditScore = creditScore;
	}
	public String getBankAccountNumber() {
		return bankAccountNumber;
	}
	public void setBankAccountNumber(String bankAccountNumber) {
		this.bankAccountNumber = bankAccountNumber;
	}
	public String getIfscCode() {
		return ifscCode;
	}
	public void setIfscCode(String ifscCode) {
		this.ifscCode = ifscCode;
	}

}

