package com.flashfunds.service;

import com.flashfunds.dto.request.AuthenticationRequest;
import com.flashfunds.dto.request.RegisterRequest;
import com.flashfunds.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);

}
