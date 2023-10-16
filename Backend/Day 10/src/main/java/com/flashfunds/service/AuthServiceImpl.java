package com.flashfunds.service;


import java.util.ArrayList;
import java.util.Collections;
import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.flashfunds.dto.request.AuthenticationRequest;
import com.flashfunds.dto.request.RegisterRequest;
import com.flashfunds.dto.response.AuthenticationResponse;
import com.flashfunds.jwtutil.JwtUtil;
import com.flashfunds.model.Role;
import com.flashfunds.model.User;
import com.flashfunds.repo.UserRepo;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepo userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    @Override
    public boolean userRegistration(RegisterRequest request) {
        Optional<User> isUserExists = userRepository.findByEmail(request.getEmail());
        if (!isUserExists.isPresent()) {
            var user = User.builder()
                    .name(request.getName())
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .role(Role.USER)
                    .build();
            userRepository.save(user);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public AuthenticationResponse userAuthentication(AuthenticationRequest request) {
        String email = request.getEmail();
        String password = request.getPassword();

        if ("administrator@bluefunds.com".equals(email) && "adbluepass".equals(password)) {
            UserDetails adminUserDetails = new org.springframework.security.core.userdetails.User(
                email,
                password,
                Collections.singletonList(new SimpleGrantedAuthority("ROLE_ADMIN"))
            );

            String token = jwtUtil.generateToken(adminUserDetails, "ADMIN");

            return AuthenticationResponse.builder()
                .token(token)
                .role("ADMIN")
                .uid(0L)
                .build();
        } else {
            authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(email, password));

            User user = userRepository.findByEmail(email).orElseThrow();

            UserDetails userDetails = new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getPassword(),
                new ArrayList<>()
            );
            String role = user.getRole().toString();
            String token = jwtUtil.generateToken(userDetails, role); 

            return AuthenticationResponse.builder()
                .token(token)
                .role(role)
                .uid(user.getUid())
                .build();
        }
    }
}