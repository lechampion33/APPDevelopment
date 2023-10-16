package com.flashfunds.service.Int;

import java.util.List;

import com.flashfunds.model.BorrowerVerify;

public interface BorrowerVerifyInt {
	 public List<BorrowerVerify> getBorrower();
	 public BorrowerVerify postBorrower(BorrowerVerify bve);
	 public BorrowerVerify putBorrower(BorrowerVerify bve);
	 public void deleteBorrower(int id);
}
