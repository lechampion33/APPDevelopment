package com.flashfunds.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.flashfunds.constant.Api;
import com.flashfunds.model.BorrowerVerify;
import com.flashfunds.service.BorrowerVerifyService;



@RestController
@RequestMapping(Api.USER)
@CrossOrigin(origins = "http://localhost:3000")
public class BorrowerVerifyController {
	@Autowired
	 private BorrowerVerifyService bvs;
	 
	 @GetMapping("/welcome")
	 public String welcome(){
		 return"Hi welcome";
	 }
	 
	 @GetMapping("/getborrower")
	 public List<BorrowerVerify> getBorrower(){
		 return bvs.getBorrower();
	 }
	 @PostMapping("/postborrower")
	 public BorrowerVerify postBorrower(@RequestBody BorrowerVerify ee) {
		 return bvs.postBorrower(ee);
	 }
	 @PutMapping("/putborrower")
	 public BorrowerVerify putBorrower(@RequestBody BorrowerVerify ee,@RequestParam int id) {
		 ee.setId(id);
		 return bvs.putBorrower(ee);
	 }
	 @DeleteMapping("/deleteborrower")
	 public void deleteBorrower(@RequestParam int id) {
		 bvs.deleteBorrower(id);
	 }
}
