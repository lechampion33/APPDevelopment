package com.flashfundslending.service;

import com.flashfundslending.dto.JwtAuthenticationResponse;
import com.flashfundslending.dto.RefreshTokenRequest;
import com.flashfundslending.dto.SigninRequest;
import com.flashfundslending.dto.SignupRequest;
import com.flashfundslending.entities.User;

public interface AuthenticationService {
	User signup(SignupRequest signupRequest);
	JwtAuthenticationResponse signin(SigninRequest signinRequest);
	JwtAuthenticationResponse refreshToken(RefreshTokenRequest refreshTokenRequest);
}
