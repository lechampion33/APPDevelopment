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
@Table(name="loanreqform")
public class LoanRequestEntity{
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullName;
    private String email;
    private String phoneNumber;
    private Double loanAmount;
    private String purpose;
    private String additionalInfo;
    private Double monthlyExpenses;
    private String existingLoans;
    private String creditScore;
    private String panCard;
    private String aadhaarCard;
    private String bankAccountDetails;
    private String employmentStatus;
    private String currentEmployer;
    private String businessDetails;
    private Double monthlyIncome;
	@Override
	public String toString() {
		return "LoginRequestEntity [id=" + id + ", fullName=" + fullName + ", email=" + email + ", phoneNumber="
				+ phoneNumber + ", loanAmount=" + loanAmount + ", purpose=" + purpose + ", additionalInfo="
				+ additionalInfo + ", monthlyExpenses=" + monthlyExpenses + ", existingLoans=" + existingLoans
				+ ", creditScore=" + creditScore + ", panCard=" + panCard + ", aadhaarCard=" + aadhaarCard
				+ ", bankAccountDetails=" + bankAccountDetails + ", employmentStatus=" + employmentStatus
				+ ", currentEmployer=" + currentEmployer + ", businessDetails=" + businessDetails + ", monthlyIncome="
				+ monthlyIncome + "]";
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public Double getLoanAmount() {
		return loanAmount;
	}
	public void setLoanAmount(Double loanAmount) {
		this.loanAmount = loanAmount;
	}
	public String getPurpose() {
		return purpose;
	}
	public void setPurpose(String purpose) {
		this.purpose = purpose;
	}
	public String getAdditionalInfo() {
		return additionalInfo;
	}
	public void setAdditionalInfo(String additionalInfo) {
		this.additionalInfo = additionalInfo;
	}
	public Double getMonthlyExpenses() {
		return monthlyExpenses;
	}
	public void setMonthlyExpenses(Double monthlyExpenses) {
		this.monthlyExpenses = monthlyExpenses;
	}
	public String getExistingLoans() {
		return existingLoans;
	}
	public void setExistingLoans(String existingLoans) {
		this.existingLoans = existingLoans;
	}
	public String getCreditScore() {
		return creditScore;
	}
	public void setCreditScore(String creditScore) {
		this.creditScore = creditScore;
	}
	public String getPanCard() {
		return panCard;
	}
	public void setPanCard(String panCard) {
		this.panCard = panCard;
	}
	public String getAadhaarCard() {
		return aadhaarCard;
	}
	public void setAadhaarCard(String aadhaarCard) {
		this.aadhaarCard = aadhaarCard;
	}
	public String getBankAccountDetails() {
		return bankAccountDetails;
	}
	public void setBankAccountDetails(String bankAccountDetails) {
		this.bankAccountDetails = bankAccountDetails;
	}
	public String getEmploymentStatus() {
		return employmentStatus;
	}
	public void setEmploymentStatus(String employmentStatus) {
		this.employmentStatus = employmentStatus;
	}
	public String getCurrentEmployer() {
		return currentEmployer;
	}
	public void setCurrentEmployer(String currentEmployer) {
		this.currentEmployer = currentEmployer;
	}
	public String getBusinessDetails() {
		return businessDetails;
	}
	public void setBusinessDetails(String businessDetails) {
		this.businessDetails = businessDetails;
	}
	public Double getMonthlyIncome() {
		return monthlyIncome;
	}
	public void setMonthlyIncome(Double monthlyIncome) {
		this.monthlyIncome = monthlyIncome;
	}
    
}
