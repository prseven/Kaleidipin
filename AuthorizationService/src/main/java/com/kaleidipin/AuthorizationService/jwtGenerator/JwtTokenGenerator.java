package com.kaleidipin.AuthorizationService.jwtGenerator;

import com.kaleidipin.AuthorizationService.model.UserProfile;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class JwtTokenGenerator {
    public Map<String, String> generateToken(UserProfile user) {

        Map<String, Object> userdata = new HashMap<>();

        userdata.put("id", user.getEmail());
        userdata.put("password", user.getPassword());

        String jwtToken = "";

        jwtToken = Jwts.builder()
                .setClaims(userdata)
                .setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS256, "secret").compact();

        Map<String, String> jwtTokenMap = new HashMap<>();
        jwtTokenMap.put("token", jwtToken);
        jwtTokenMap.put("message", "User Logged in with Token");
        return jwtTokenMap;
    }

}
