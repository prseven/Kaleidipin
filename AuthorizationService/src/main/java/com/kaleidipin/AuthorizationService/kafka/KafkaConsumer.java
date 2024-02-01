package com.kaleidipin.AuthorizationService.kafka;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.kaleidipin.AuthorizationService.model.AllUser;
import com.kaleidipin.AuthorizationService.model.UserProfile;
import com.kaleidipin.AuthorizationService.repository.UserRepository;
import com.kaleidipin.AuthorizationService.service.UserServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.annotation.KafkaListener;



@Configuration
@EnableKafka
public class KafkaConsumer {

        @Autowired
        Gson gson;

        @Autowired
        UserServiceImpl userService;

        @Autowired
        UserRepository userRepository;

        @KafkaListener(topics = "UserTopic", groupId = "Authorization" )
        public void updatedLocation(String value) throws JsonProcessingException {
                System.out.println(value);

                ObjectMapper objectMapper = new ObjectMapper();
                AllUser user = objectMapper.readValue(value, AllUser.class);

                UserProfile userk= new UserProfile(user.getEmail(), user.getPassword());
                System.out.println(userk);
                userRepository.save(userk);
        }
}

