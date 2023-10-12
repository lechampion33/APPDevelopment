package com.flashfunds.service.Int;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.flashfunds.model.LoanRequestEntity;
import com.flashfunds.repo.LoanRequestRepository;
import com.flashfunds.service.LoanRequestService;

@Service
public class LoanRequestServiceImpl implements LoanRequestService {

    private final LoanRequestRepository loanRequestRepository;

    @Autowired
    public LoanRequestServiceImpl(LoanRequestRepository loanRequestRepository) {
        this.loanRequestRepository = loanRequestRepository;
    }

  
    public LoanRequestEntity createLoanRequest(LoanRequestEntity loanRequest) {
        return loanRequestRepository.save(loanRequest);
    }

  
    public List<LoanRequestEntity> getAllLoanRequests() {
        return loanRequestRepository.findAll();
    }

    
    public LoanRequestEntity getLoanRequestById(Long id) {
        Optional<LoanRequestEntity> optionalLoanRequest = loanRequestRepository.findById(id);
        return optionalLoanRequest.orElse(null);
    }


    public LoanRequestEntity updateLoanRequest(Long id, LoanRequestEntity updatedLoanRequest) {
        LoanRequestEntity existingLoanRequest = getLoanRequestById(id);

        if (existingLoanRequest != null) {
            existingLoanRequest.setFullName(updatedLoanRequest.getFullName());
            existingLoanRequest.setEmail(updatedLoanRequest.getEmail());
            existingLoanRequest.setPhoneNumber(updatedLoanRequest.getPhoneNumber());

            return loanRequestRepository.save(existingLoanRequest);
        }

        return null; 
    }

    @Transactional
    public void deleteLoanRequest(Long id) {
        loanRequestRepository.deleteById(id);
    }
}
