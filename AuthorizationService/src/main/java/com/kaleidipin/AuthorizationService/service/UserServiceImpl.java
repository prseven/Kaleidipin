/**
package com.kaleidipin.AuthorizationService.service;

import com.kaleidipin.AuthorizationService.exception.UserNotFoundException;
import com.kaleidipin.AuthorizationService.model.User;
import com.kaleidipin.AuthorizationService.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{


    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user) ;
    }

    @Override
    public boolean validateUser(User user){
        User uservalidation = userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
        if (uservalidation == null) {
            return false;
        }
        else {
            return true;
        }

    }
}
*/

package com.kaleidipin.AuthorizationService.service;


import com.google.gson.Gson;
import com.kaleidipin.AuthorizationService.model.UserProfile;
import com.kaleidipin.AuthorizationService.repository.UserRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl  implements UserServiceDao {

    private static final Logger LOGGER = (Logger) LoggerFactory.getLogger(UserServiceImpl.class);

    @Autowired
    UserRepository repository;


//    @Override
//    public UserProfile registerUser(UserProfile user) {
//        return repository.save(user);
//    }

//    @Override
//    public UserProfile registerUser(UserProfile user) {
//        return null;
//    }

    @Override
    public boolean validateUser(String email, String password) {
        Optional<UserProfile> user = repository.findByEmailAndPassword(email, password);
        if(user.isPresent()){
            return true;
        }
        else {
            return false;
        }
    }


//    @KafkaListener(topics = "NewTopic", groupId = "Authorization")
//    @Override
//    public boolean validateUser(UserProfile) {
////        LOGGER.info("Validating user with", profile.getClass());
//        UserProfile user = gson.fromJson(profile, UserProfile.class);
//        System.out.println("Consumed Data");
//        UserProfile user = repository.findByMailIdAndPassword(profile.getMailId(), profile.getPassword());
//        if(user == null){
//            return false;
//        }
//        else {
//            return true;
//        }
//    }


}

