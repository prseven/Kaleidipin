package com.kaleidipin.FavouriteService.service;

import com.kaleidipin.FavouriteService.exception.ApodAlreadyExistsException;
import com.kaleidipin.FavouriteService.exception.ApodNotFound;
import com.kaleidipin.FavouriteService.exception.EmptyFavouritesException;
import com.kaleidipin.FavouriteService.exception.UserNotFoundException;
import com.kaleidipin.FavouriteService.model.APOD;
import com.kaleidipin.FavouriteService.model.UserProfile;
import com.kaleidipin.FavouriteService.repository.ApodRepository;
import com.kaleidipin.FavouriteService.repository.UserProfileRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class FavouriteServiceImpl implements FavouriteService {

    @Autowired
    private ApodRepository apodRepository;

    @Autowired
    private UserProfileRepository userProfileRepository;

    @Override
    public String saveApod(String email, APOD apod) throws Exception {
        Optional<UserProfile> existingUser = userProfileRepository.findByEmail(email);
        if (existingUser.isPresent()) {
            Optional<APOD> existingApod = apodRepository.findByUrlAndUserId(apod.getUrl(), existingUser.get().getUserId());
            if (existingApod.isPresent()) {
                throw new ApodAlreadyExistsException("Apod already present in Favourites");
            }
            apod.setUser(existingUser.get());
            apodRepository.save(apod);
            return "Apod Added to Favourites!";
        } else {
            throw new UserNotFoundException("User Not Found");
        }
    }

    @Override
    public List<APOD> getApodByUserId(String email) throws Exception {
        Optional<UserProfile> existingUser = userProfileRepository.findByEmail(email);

        if (existingUser.isPresent()) {
            List<APOD> apod = apodRepository.findByUserId(existingUser.get().getUserId());
            if (apod.isEmpty()) {
                System.out.println("Empty");
                throw new EmptyFavouritesException("No Favourites at this Time!!");
            }
            return apod;
        } else {
            throw new UserNotFoundException("User not found");
        }
    }

    @Transactional
    public String deleteAllApodByUserId(String email) throws Exception {
        Optional<UserProfile> existingUser = userProfileRepository.findByEmail(email);
        if (existingUser.isPresent()) {
            List<APOD> apods = apodRepository.findByUserId(existingUser.get().getUserId());
            if (!apods.isEmpty()) {
                apodRepository.deleteAllByUserId(existingUser.get().getUserId());
                return "Favourites Cleared!";
            } else {
                throw new EmptyFavouritesException("Favourites empty");
            }
        } else {
            throw new UserNotFoundException("User Not Found");
        }
    }

    @Transactional
    public String deleteApodByApodId(int apodId) throws Exception {
        Optional<APOD> existingApod = apodRepository.findByApodId(apodId);
        if (existingApod.isPresent()) {
            apodRepository.deleteApodByApodId(apodId);
            return "Apod deleted!";
        } else {
            throw new ApodNotFound("Apod with ApodId" + apodId + "not found");
        }
    }
}
    /**
    @Override
    public String saveApod(String email, APOD apod, UserProfile user) throws Exception {

        Optional<UserProfile> existingUser = userProfileRepository.findByEmail(email);

        if(existingUser.isPresent()){
            Optional<APOD> existingApod = apodRepository.findByApodId(apod.getApodid());
            if(existingApod.isPresent()){
                throw new DefaultExceptionClass("Apod Already Present in Favourites");
            }
            user.setApod(existingUser.get().getApod());
            apodRepository.save(apod);
            return "APOD added to Favourites";
        }
        else{
            throw new DefaultExceptionClass("User not found");
        }
    }

    @Override
    public Optional<APOD> getApodByEmail(String email) throws Exception {
        Optional<UserProfile> existingUser = userProfileRepository.findByEmail(email);
        if(existingUser.isPresent()){
            Optional<APOD> apodList = apodRepository.findByApodId(existingUser.get().getApod().getApodid());
            if(apodList.isEmpty()) {
                System.out.println("Empty");
                throw new DefaultExceptionClass("Favourites is Empty");
            }
            return apodList;
            }
        else{
            throw new DefaultExceptionClass("User not found");
    }
    }

    @Transactional
    public String deleteAllApodByEmail(String email) throws Exception {
        Optional<UserProfile> existingUser = userProfileRepository.findByEmail(email);
        if(existingUser.isPresent()){
            Optional<APOD> apodList = apodRepository.findByApodId(existingUser.get().getApod().getApodid());
            if(!apodList.isEmpty()){
                apodRepository.deleteAllByApodId(existingUser.get().getApod().getApodid());
                return "Deleted the Favourites";
            }
            else {
                throw new DefaultExceptionClass("Favourites are Empty");
            }
        }
        throw new DefaultExceptionClass("User not Found");
    }

    @Transactional
    public String deleteApodByApodId(Long apodid) throws Exception {
        Optional<APOD> existingApod = apodRepository.findByApodId(apodid);
        if(existingApod.isPresent()){
            apodRepository.deleteApodByApodId(apodid);
            return "APOD Deleted!!";
        }
        else{
            throw new DefaultExceptionClass("APOD with ApodId" + apodid + "not found");
        } */



//    @Override
//    public void clearFavourite(String email) {
//
//    }
//
//    @Override
//    public UserProfile removeFromFavourite(String email, APOD apod) {
//        return null;
//    }
//
//    @Override
//    public UserProfile addToFavourite(String email, APOD apod) {
////        Optional<> favourites = favouriteRepository.findByEmail(email);
////
////        }
//        return null;
//    }
//    @Override
//    public List<UserProfile> getFavouriteByEmail(String email) throws DefaultExceptionClass {
//        if(email == null){
//            throw new DefaultExceptionClass("Enter the Email");
//        }
//            return favouriteRepository.findAll();
//
//
//    }



//    @Autowired
//    private FavouriteRepository favouriteRepository;
//    @Override
//    public void clearFavourite(String email) {
//    }
//
//    @Override
//    public UserProfile removeFromFavourite(String email) {
//        Optional<UserProfile> existingFavourites = favouriteRepository.findByEmail(email);
//        if(existingFavourites.isEmpty()){
//            throw new DefaultExceptionClass("No Favourites Found!!");
//        }else{
//            favouriteRepository.deleteAllById(apod.getTitle());
//        }
//        return (UserProfile) apod.getTitle();
//    }
//
//    @Override
//    public UserProfile addToFavourite(String email, APOD apod) {
//        try {
//            Optional<UserProfile> existingFavourites = favouriteRepository.findByEmail(email);
//
//            UserProfile favourites = existingFavourites.orElse(new UserProfile());
//            favourites.setEmail(email);
//
//            List<APOD> apodList = new ArrayList<>();
//            boolean apodPresent = apodList.stream().anyMatch(existingApod -> existingApod.getTitle().equals(apod.getTitle()));
//            if (!apodPresent) {
//                apodList.add(apod);
//                favourites.setApod((List<APOD>) apod);
//                return favouriteRepository.save(favourites);
//            }else{
//            throw new  DefaultExceptionClass("APOD already exists");
//        }
//        }catch (Exception e){
//            throw  new DefaultExceptionClass("Error adding to Favourites");
//        }
//    }
//
//    @Override
//    public Optional<UserProfile> getFavouriteByEmail(String email)  {
//            return favouriteRepository.findByEmail(email);
//        }
//
//}
