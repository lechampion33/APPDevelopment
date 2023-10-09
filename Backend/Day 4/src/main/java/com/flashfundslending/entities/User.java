package com.flashfundslending.entities;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
@Data
@Entity
@Table(name="flashfunding")
public class User implements UserDetails{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
 private int id;
 private String userrname;
 private String email;
 private String password;
 private String mobilenumber;
 private Role role;
@Override
public Collection<? extends GrantedAuthority> getAuthorities() {
	return List.of(new SimpleGrantedAuthority(role.name()));
}
@Override
public String getUsername() {
	return email;
}

@Override
public boolean isAccountNonLocked() {
	// TODO Auto-generated method stub
	return true;
}
@Override
public boolean isCredentialsNonExpired() {
	// TODO Auto-generated method stub
	return true;
}
@Override
public boolean isEnabled() {
	return true;
}
@Override
public String getPassword() {
	return password;
}
@Override
public boolean isAccountNonExpired() {
	// TODO Auto-generated method stub
	return true;
}



}
