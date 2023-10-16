package com.flashfunds.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flashfunds.model.BorrowerVerify;
import com.flashfunds.repo.BorrowerVerifyRepo;
import com.flashfunds.service.Int.BorrowerVerifyInt;
@Service
public class BorrowerVerifyService implements BorrowerVerifyInt {
    @Autowired
    private BorrowerVerifyRepo bvr;
    @Override
	public List<BorrowerVerify> getBorrower() {
		return bvr.findAll();
	}

	@Override
	public BorrowerVerify postBorrower(BorrowerVerify bve) {
		return bvr.save(bve);
	}

	@Override
	public BorrowerVerify putBorrower(BorrowerVerify bve) {
		return bvr.save(bve);
	}

	@Override
	public void deleteBorrower(int id) {
		bvr.deleteById(id);
		
	}



}
