package com.kaleidipin.FavouriteService.model;

import jakarta.persistence.*;


@Entity(name = "user_data")
public class UserProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id")
    private int userId;
    private String email;


//    @ManyToOne
//    @JoinColumn(name = "apod_id", referencedColumnName = "apod_id")
//    private APOD apod;



    public UserProfile() {
    }

    public UserProfile(int userId, String email) {
        this.userId = userId;
        this.email = email;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}

