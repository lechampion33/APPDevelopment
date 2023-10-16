package com.flashfunds.service;


import java.util.List;

import com.flashfunds.model.LoanRequestEntity;

public interface LoanRequestService {
	

	    public LoanRequestEntity createLoanRequest(LoanRequestEntity loanRequest);

	    public List<LoanRequestEntity> getAllLoanRequests();

	    public LoanRequestEntity getLoanRequestById(Long id);

	    public LoanRequestEntity updateLoanRequest(Long id, LoanRequestEntity updatedLoanRequest);

	    public void deleteLoanRequest(Long id);

}

