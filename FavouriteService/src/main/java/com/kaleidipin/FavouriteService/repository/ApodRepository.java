package com.kaleidipin.FavouriteService.repository;

import com.kaleidipin.FavouriteService.model.APOD;
import com.kaleidipin.FavouriteService.model.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ApodRepository extends JpaRepository<APOD, Integer> {

        /**
        public Optional<APOD> findByApodId(Long Apodid);

        @Query("select a from apod_data a where a.url = :getUrl and a.apod = :Apod")
        public Optional<APOD> findByUrlandApodId(@Param("getUrl") String getUrl, @Param("getApod") APOD Apod);

        @Modifying
        @Query("DELETE from apod_data a where a.apod = :Apod")
        public String deleteAllByApodId(Long Apodid);

        @Modifying
        @Query("DELETE  from apod_data a where a.apod = :Apod")
       public String deleteApodByApodId(Long Apodid);
         */

/**
        public Optional<APOD> findByApodId(Long Apodid);


        public String deleteAllByApodId(Long Apodid);

        public String deleteApodByApodId(Long Apodid);
        */

//        public Optional<List<UserProfile>> findApodByEmail(String email);

        public Optional<APOD> findByApodId(int apodId);
        @Query("select a from apod_data a where a.user.userId = :userId")
        public List<APOD> findByUserId(@Param("userId") int userId);

        @Query("select a from apod_data a where a.url =:getUrl and a.user.userId = :getUserId")
        public Optional<APOD> findByUrlAndUserId(@Param("getUrl") String getUrl, @Param("getUserId") int getUserId);

        @Modifying
        @Query("DELETE from apod_data a where a.user.userId = :userId")
        public void deleteAllByUserId(@Param("userId") int userId);

        @Modifying
        @Query("DELETE from apod_data a where a.apodId = :apodId")
        public void deleteApodByApodId(int apodId);

}
