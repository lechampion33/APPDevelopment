package com.flashfundslending.dto;

import lombok.Data;

@Data
public class SignupRequest {
  private String userrname;
  private String email;
  private String password;
  private String mobilenumber;
}
