package com.flashfunds.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.flashfunds.model.BorrowerVerify;
@Repository
public interface BorrowerVerifyRepo extends JpaRepository<BorrowerVerify, Integer> {

}
