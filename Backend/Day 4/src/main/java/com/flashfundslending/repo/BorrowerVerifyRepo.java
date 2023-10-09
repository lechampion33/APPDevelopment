package com.flashfundslending.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.flashfundslending.entities.BorrowerVerifyEntity;


@Repository
public interface BorrowerVerifyRepo extends JpaRepository<BorrowerVerifyEntity, Integer> {

}

