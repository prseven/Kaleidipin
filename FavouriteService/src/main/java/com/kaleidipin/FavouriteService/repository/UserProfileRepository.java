package com.kaleidipin.FavouriteService.repository;

import com.kaleidipin.FavouriteService.model.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserProfileRepository extends JpaRepository<UserProfile, Integer> {

   public Optional<UserProfile> findByEmail(String email);

//   @Modifying
//   @Query("DELETE FROM UserProfile u WHERE u.email = :email")
//   public void deleteByEmail(@Param("email") String email);
}
