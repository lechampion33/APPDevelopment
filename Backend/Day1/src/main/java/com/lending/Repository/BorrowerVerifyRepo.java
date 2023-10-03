package com.lending.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lending.Entity.BorrowerVerifyEntity;
@Repository
public interface BorrowerVerifyRepo extends JpaRepository<BorrowerVerifyEntity, Integer> {

}
