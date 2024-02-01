package com.kaleidipin.FavouriteService.exception;

public class EmptyFavouritesException extends RuntimeException{
    public EmptyFavouritesException(String message){
        super(message);
    }
}
