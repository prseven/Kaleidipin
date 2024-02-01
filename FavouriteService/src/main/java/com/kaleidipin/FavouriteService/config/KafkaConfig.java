package com.kaleidipin.FavouriteService.config;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.kaleidipin.FavouriteService.model.AllUser;
import com.kaleidipin.FavouriteService.model.UserProfile;
import com.kaleidipin.FavouriteService.repository.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.annotation.KafkaListener;


@Configuration
@EnableKafka
public class KafkaConfig {


    @Autowired
    private UserProfileRepository userProfileRepository;

    @KafkaListener(topics = "FavTopic", groupId = "ApodGroup")
    public void topicAddUser(String value) throws JsonProcessingException {
        System.out.println(value);

        ObjectMapper objectMapper = new ObjectMapper();
        AllUser allUser = objectMapper.readValue(value, AllUser.class);

        UserProfile user = new UserProfile();
        user.setEmail(allUser.getEmail());
//        user.setEmail(value);

        userProfileRepository.save(user);
    }

    }
