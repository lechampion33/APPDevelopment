package com.flashfundslending.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.flashfundslending.entities.BorrowerVerifyEntity;
import com.flashfundslending.service.impl.BorrowerVerifyService;


@RestController
@RequestMapping("/api/v1/auth")
public class BorrowerVerifyController {
 @Autowired
 private BorrowerVerifyService bvs;
 
 @GetMapping("/welcome")
 public String welcome(){
	 return"Hi welcome";
 }
 
 @GetMapping("/getborrower")
 public List<BorrowerVerifyEntity> getBorrower(){
	 return bvs.getBorrower();
 }
 @PostMapping("/postborrower")
 public BorrowerVerifyEntity postBorrower(@RequestBody BorrowerVerifyEntity ee) {
	 return bvs.postBorrower(ee);
 }
 @PutMapping("/putborrower")
 public BorrowerVerifyEntity putBorrower(@RequestBody BorrowerVerifyEntity ee,@RequestParam int id) {
	 ee.setId(id);
	 return bvs.putBorrower(ee);
 }
 @DeleteMapping("/deleteborrower")
 public void deleteBorrower(@RequestParam int id) {
	 bvs.deleteBorrower(id);
 }
}

