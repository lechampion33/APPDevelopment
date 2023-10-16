package com.flashfunds.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.flashfunds.model.User;


@Repository
public interface UserRepo extends JpaRepository<User,Long> {

	Optional<User> findByEmail(String username);
	User findByUid(Long id);

    void deleteByUid(Long Uid);
}
