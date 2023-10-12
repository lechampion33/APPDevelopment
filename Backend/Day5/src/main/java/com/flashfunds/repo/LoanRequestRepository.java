package com.flashfunds.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.flashfunds.model.LoanRequestEntity;



public interface LoanRequestRepository extends JpaRepository<LoanRequestEntity, Long> {

}
