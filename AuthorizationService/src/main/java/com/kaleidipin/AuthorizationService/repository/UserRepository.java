/**
package com.kaleidipin.AuthorizationService.repository;

import com.kaleidipin.AuthorizationService.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

//    @Query(value = "select u from user u where u.email=?1")

//    @Query(value = "select * from authuser.user where email=?1")
//    @Query(value = "select u from authuser u where u.email = ?1")
    User findByEmailAndPassword(String email, String password);

}

 */
package com.kaleidipin.AuthorizationService.repository;


import com.kaleidipin.AuthorizationService.model.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserProfile, String> {
    Optional<UserProfile> findByEmailAndPassword(String email, String password);
}


