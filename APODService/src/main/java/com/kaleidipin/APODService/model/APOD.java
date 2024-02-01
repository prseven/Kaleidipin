package com.kaleidipin.APODService.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.time.LocalDate;
import java.util.List;

//@Entity(name = "APOD")

@Entity
public class APOD {


    @Id
    private Long apodid;
    private String title;

    private String explanation;
    private String hdurl;
    private String media_type;
    private String copyright;

    private String url;
    private String date;

//    List<APOD> wishlist;

//    public APOD(List<APOD> wishlist) {
//        this.wishlist = wishlist;
//    }


//    public List<APOD> getWishlist() {
//        return wishlist;
//    }

//    public void setWishlist(List<APOD> wishlist) {
//        this.wishlist = wishlist;
//    }


    public APOD() {
    }

    public APOD(Long apodid, String title, String explanation, String hdurl, String media_type, String copyright, String url, String date) {
        this.apodid = apodid;
        this.title = title;
        this.explanation = explanation;
        this.hdurl = hdurl;
        this.media_type = media_type;
        this.copyright = copyright;
        this.url = url;
        this.date = date;
    }

    public Long getApodid() {
        return apodid;
    }

    public void setApodid(Long apodid) {
        this.apodid = apodid;
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

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
