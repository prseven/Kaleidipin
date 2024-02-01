package com.kaleidipin.FavouriteService.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

import java.util.Optional;

@Entity(name = "apod_data")
public class APOD {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="apod_id")
    private int apodId;
    private String title;
    private String explanation;

    @NotBlank(message = "APOD URL is null")
    private String url;
    private String hdurl;
    private String media_type;
    private String copyright;
    private String date;


    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private UserProfile user;

    public APOD() {
    }

    public APOD(int apodId, String title, String explanation, String url, String hdurl, String media_type, String copyright, String date, UserProfile user) {
        this.apodId = apodId;
        this.title = title;
        this.explanation = explanation;
        this.url = url;
        this.hdurl = hdurl;
        this.media_type = media_type;
        this.copyright = copyright;
        this.date = date;
        this.user = user;
    }

    public int getApodId() {
        return apodId;
    }

    public void setApodId(int apodId) {
        this.apodId = apodId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getExplanation() {
        return explanation;
    }

    public void setExplanation(String explanation) {
        this.explanation = explanation;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getHdurl() {
        return hdurl;
    }

    public void setHdurl(String hdurl) {
        this.hdurl = hdurl;
    }

    public String getMedia_type() {
        return media_type;
    }

    public void setMedia_type(String media_type) {
        this.media_type = media_type;
    }

    public String getCopyright() {
        return copyright;
    }

    public void setCopyright(String copyright) {
        this.copyright = copyright;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public UserProfile getUser() {
        return user;
    }

    public void setUser(UserProfile user) {
        this.user = user;
    }
}
