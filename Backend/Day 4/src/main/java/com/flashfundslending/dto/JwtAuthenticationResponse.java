package com.flashfundslending.dto;

import lombok.Data;

@Data
public class JwtAuthenticationResponse {
  private String token;
  private String refreshToken;
}
