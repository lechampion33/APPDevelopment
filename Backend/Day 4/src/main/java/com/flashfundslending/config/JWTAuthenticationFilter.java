package com.flashfundslending.config;

import java.io.IOException;

import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.apache.commons.lang3.StringUtils;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import com.flashfundslending.service.JWTService;
import com.flashfundslending.service.UserService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class JWTAuthenticationFilter extends OncePerRequestFilter{
	private final JWTService jwtService;
	private final UserService userService;
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		
		final String authHeader=request.getHeader("Authorization");
		final String jwt;
		final String userEmail;
		if(StringUtils.isEmpty(authHeader)||!org.apache.commons.lang3.StringUtils.startsWith(authHeader,"Bearer ")) {
			filterChain.doFilter(request, response);
			return;
		}
		jwt=authHeader.substring(7);
		userEmail=jwtService.extractUserName(jwt);
		if(StringUtils.isNotEmpty(userEmail)&& SecurityContextHolder.getContext().getAuthentication()==null) {
			UserDetails userDetails=userService.userDetailsService().loadUserByUsername(userEmail);
			
			if(jwtService.isTokenValid(jwt, userDetails)) {
				SecurityContext securityContext=SecurityContextHolder.createEmptyContext();
				UsernamePasswordAuthenticationToken token=new UsernamePasswordAuthenticationToken(
						userDetails,null,userDetails.getAuthorities()
						);
						token.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
						securityContext.setAuthentication(token);
						SecurityContextHolder.setContext(securityContext);
			}
		}
		filterChain.doFilter(request, response);
	}

}
