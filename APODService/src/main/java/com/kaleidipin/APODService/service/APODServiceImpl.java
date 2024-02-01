package com.kaleidipin.APODService.service;

import com.kaleidipin.APODService.model.APOD;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class APODServiceImpl {

    @Value("${nasa.apod.API_KEY}")
    private String API_KEY;

    private static final String API_URL = "https://api.nasa.gov/planetary/apod?api_key=";

    private final RestTemplate restTemplate;


    public APODServiceImpl(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String getApod() {
        String url = API_URL + API_KEY;
        return restTemplate.getForObject(url, String.class, API_KEY);
    }

    public APOD getApodByDate(String date) {
        String url = "https://api.nasa.gov/planetary/apod?api_key=bLyRbDbta1xiDKaScrTgxNC9waCrJAOXZ1AgCID0&date=" + date;
        return restTemplate.getForObject(url, APOD.class, date);

    }

    public APOD getApodbyCustomDate(String start_date, String end_date){
        String url = ("https://api.nasa.gov/planetary/apod?api_key=bLyRbDbta1xiDKaScrTgxNC9waCrJAOXZ1AgCID0&start_date=" + start_date + "&end_date=" + end_date);
    return restTemplate.getForObject(url, APOD.class, start_date,end_date);
    }

}


