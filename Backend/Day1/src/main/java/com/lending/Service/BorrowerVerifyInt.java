package com.lending.Service;

import java.util.List;

import com.lending.Entity.BorrowerVerifyEntity;

public interface BorrowerVerifyInt {
 public List<BorrowerVerifyEntity> getBorrower();
 public BorrowerVerifyEntity postBorrower(BorrowerVerifyEntity bve);
 public BorrowerVerifyEntity putBorrower(BorrowerVerifyEntity bve);
 public void deleteBorrower(int id);
}
