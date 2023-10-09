package com.flashfundslending.service;
import java.util.List;

import com.flashfundslending.entities.BorrowerVerifyEntity;



public interface BorrowerVerifyInt {
 public List<BorrowerVerifyEntity> getBorrower();
 public BorrowerVerifyEntity postBorrower(BorrowerVerifyEntity bve);
 public BorrowerVerifyEntity putBorrower(BorrowerVerifyEntity bve);
 public void deleteBorrower(int id);
}
