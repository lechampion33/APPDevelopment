package com.flashfunds.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flashfunds.constant.Api;
import com.flashfunds.model.LoanRequestEntity;
import com.flashfunds.service.LoanRequestService;

@RestController
@RequestMapping(Api.USER)
public class LoanRequestController {

    private final LoanRequestService loanRequestService;

    public LoanRequestController(LoanRequestService loanRequestService) {
        this.loanRequestService = loanRequestService;
    }

    @PostMapping("/loan/postloan")
    public LoanRequestEntity createLoanRequest(@RequestBody LoanRequestEntity loanRequest) {
        return loanRequestService.createLoanRequest(loanRequest);
    }

    @GetMapping("/loan/getloans")
    public List<LoanRequestEntity> getAllLoanRequests() {
        return loanRequestService.getAllLoanRequests();
    }

    @GetMapping("/loan/{id}")
    public LoanRequestEntity getLoanRequestById(@PathVariable Long id) {
        return loanRequestService.getLoanRequestById(id);
    }

    @PutMapping("/loan/{id}")
    public LoanRequestEntity updateLoanRequest(
            @PathVariable Long id,
            @RequestBody LoanRequestEntity updatedLoanRequest
    ) {
        return loanRequestService.updateLoanRequest(id, updatedLoanRequest);
    }

    @DeleteMapping("/loan/{id}")
    public void deleteLoanRequest(@PathVariable Long id) {
        loanRequestService.deleteLoanRequest(id);
    }
}
