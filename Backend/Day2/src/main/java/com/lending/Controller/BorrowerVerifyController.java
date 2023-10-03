package com.lending.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.lending.Entity.BorrowerVerifyEntity;
import com.lending.Service.BorrowerVerifyService;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
public class BorrowerVerifyController {
 @Autowired
 private BorrowerVerifyService bvs;
 @Tag(name="FlashFunds", description="Hi hello")
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
