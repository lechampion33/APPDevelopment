package com.flashfundslending.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {
	@Autowired
	 private BorrowerVerifyService bvs;
	@GetMapping("/get")
	public ResponseEntity<String> sayHello(){
		return ResponseEntity.ok("Hi User");
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
