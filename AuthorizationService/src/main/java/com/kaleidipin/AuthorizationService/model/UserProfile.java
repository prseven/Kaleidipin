package com.kaleidipin.AuthorizationService.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "auth_db")
public class UserProfile {

    @Id
    private String email;
    private String password;

    public UserProfile() {
    }

    public UserProfile(String email, String password) {

        this.email = email;
        this.password = password;

    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


}
