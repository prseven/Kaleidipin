/**
package com.kaleidipin.AuthorizationService.controller;

import com.kaleidipin.AuthorizationService.JwtGenerator.JwtGenerator;
import com.kaleidipin.AuthorizationService.model.User;
import com.kaleidipin.AuthorizationService.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtGenerator jwtGenerator;

    public UserController(UserService userService, JwtGenerator jwtGenerator) {
        this.userService = userService;
        this.jwtGenerator = jwtGenerator;
    }


    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        try {
            userService.saveUser(user);
            return new ResponseEntity<>(user, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        boolean validated = userService.validateUser(user);

        if (!validated) {
            return new ResponseEntity<>("Check your credentials", HttpStatus.CONFLICT);
        } else {
            String token = jwtGenerator.generateToken(user);
            HashMap hashMap = new HashMap();
            hashMap.put("token", token);
            return new ResponseEntity<HashMap>(hashMap, HttpStatus.OK);
        }
    }
}

*/

package com.kaleidipin.AuthorizationService.controller;


import com.google.gson.Gson;
import com.kaleidipin.AuthorizationService.exception.UserNotFoundException;
import com.kaleidipin.AuthorizationService.jwtGenerator.JwtTokenGenerator;
import com.kaleidipin.AuthorizationService.model.UserProfile;
import com.kaleidipin.AuthorizationService.service.UserServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/au/")
public class UserController {

    @Autowired
    UserServiceImpl service ;

    @Autowired
    Gson gson;
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserProfile userProfile) throws UserNotFoundException{
        if (userProfile.getEmail() == null || userProfile.getPassword() == null) {
            logger.info("Validating User Credentials");

            throw new UserNotFoundException("email and password are null");
        }

        boolean result = service.validateUser(userProfile.getEmail(), userProfile.getPassword());
        if (result == false) {
            throw new UserNotFoundException("Email / password mismatch");
        }
        if (result) {

            Map<String, String> mytoken = new JwtTokenGenerator().generateToken(userProfile);
            return new ResponseEntity<Map>(mytoken, HttpStatus.OK);
        } else
            return new ResponseEntity("Invalid user", HttpStatus.UNAUTHORIZED);
    }
}

