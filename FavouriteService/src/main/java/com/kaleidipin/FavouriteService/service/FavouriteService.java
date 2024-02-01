package com.kaleidipin.FavouriteService.service;

import com.kaleidipin.FavouriteService.model.APOD;
import com.kaleidipin.FavouriteService.model.UserProfile;

import java.util.List;
import java.util.Optional;

public interface FavouriteService {

    /**
    public void deleteByEmail(String email);


    public UserProfile deleteFromFavourite(String email, APOD apod);


    public UserProfile addToFavourite(String email, APOD apod);


    List<UserProfile> findByEmail(String email); */


    public String saveApod(String email, APOD apod) throws Exception;

    public List<APOD> getApodByUserId(String email) throws Exception;

    public String deleteAllApodByUserId(String email) throws Exception;

    public String deleteApodByApodId(int apodId) throws  Exception;
}
