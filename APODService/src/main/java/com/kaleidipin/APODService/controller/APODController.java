package com.kaleidipin.APODService.controller;

import com.kaleidipin.APODService.model.APOD;
import com.kaleidipin.APODService.service.APODServiceImpl;
import org.json.JSONObject;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/api/ap")
@CrossOrigin("*")
public class APODController {

    private final APODServiceImpl apodServiceImpl;


    public APODController(APODServiceImpl apodServiceImpl) {
        this.apodServiceImpl = apodServiceImpl;
    }

    @GetMapping("/apod")
    public String getApod() {
        return apodServiceImpl.getApod();
    }

    @GetMapping("/apodbydate")
    public ResponseEntity<?> getApodByDate(@RequestParam @DateTimeFormat(pattern = "yyyy-mm-dd") String date) {

        APOD apod = apodServiceImpl.getApodByDate(date);
        if (apod != null) {
            return new ResponseEntity<>(apod, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


    @GetMapping("/apodbycustomdate")
    public ResponseEntity<?> getApodFromCustomDate(@RequestParam @DateTimeFormat(pattern = "yyyy-mm-dd") String start_date,
                                        @RequestParam @DateTimeFormat(pattern = "yyyy-mm-dd") String end_date) {
        APOD apod = apodServiceImpl.getApodbyCustomDate(start_date, end_date);
        if (apod != null) {
            return new ResponseEntity<>(apod, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    }


