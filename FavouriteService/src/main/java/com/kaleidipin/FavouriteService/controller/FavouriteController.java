package com.kaleidipin.FavouriteService.controller;

import com.kaleidipin.FavouriteService.exception.ApodAlreadyExistsException;
import com.kaleidipin.FavouriteService.exception.ApodNotFound;
import com.kaleidipin.FavouriteService.exception.EmptyFavouritesException;
import com.kaleidipin.FavouriteService.exception.UserNotFoundException;
import com.kaleidipin.FavouriteService.model.APOD;
import com.kaleidipin.FavouriteService.model.UserProfile;
import com.kaleidipin.FavouriteService.service.FavouriteService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/fav")
public class FavouriteController {

    @Autowired
    FavouriteService favouriteService;

    @Autowired
    public FavouriteController(FavouriteService favouriteService) {
        this.favouriteService = favouriteService;
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<?> handleRuntimeException(RuntimeException e){
        return new ResponseEntity<>("An Error occurred:" +e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<?> handleUserNotFoundException(UserNotFoundException ex){
        return new ResponseEntity<>(ex.getMessage(),HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(ApodAlreadyExistsException.class)
    public ResponseEntity<?> handleApodAlreadyExistsException(ApodAlreadyExistsException ex){
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.CONFLICT);
    }

    @ExceptionHandler(EmptyFavouritesException.class)
    public ResponseEntity<?> handleEmptyFavouriteException(EmptyFavouritesException ex){
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.OK);
    }

    public ResponseEntity<?> handleApodNotFound(ApodNotFound ex){
        return new ResponseEntity<>(ex.getMessage(),HttpStatus.OK);
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationException(MethodArgumentNotValidException exception){
        Map <String, String> errors = new HashMap<>();
        exception.getBindingResult().getAllErrors().forEach((error) ->{
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return  errors;
    }



    @PostMapping("/apod/save")
   public ResponseEntity<?> saveApod(@RequestParam String email, @Valid @RequestBody APOD apod) throws Exception{
        try{
            apod.setExplanation(apod.getExplanation().substring(0,250));
            return new ResponseEntity<>(favouriteService.saveApod(email, apod), HttpStatus.CREATED);
        }
        catch (UserNotFoundException | ApodAlreadyExistsException ex){
            throw ex;
        }
        catch (RuntimeException ex){
            throw  new RuntimeException(ex);
        }
   }

   @GetMapping("/Apods")
   public ResponseEntity<?> getApodByApodId(@RequestParam String email) throws Exception{
        try{
            return new ResponseEntity<>(favouriteService.getApodByUserId(email),HttpStatus.OK);
        }
        catch (UserNotFoundException | EmptyFavouritesException ex){
//            System.out.println(ex.getMessage());
            throw  ex;
        }
        catch (RuntimeException ex){
            throw new RuntimeException(ex);
        }
   }

   @DeleteMapping("/delete/apods")
   public ResponseEntity<?> deleteAllApodsByApodId(@RequestParam String email) throws Exception{
        try{
            return new ResponseEntity<>(favouriteService.deleteAllApodByUserId(email),HttpStatus.OK);
        }
        catch (UserNotFoundException | EmptyFavouritesException ex){
            throw ex;
        }
        catch (RuntimeException ex){
            throw new RuntimeException(ex);
        }
   }

   @DeleteMapping("/delete/apod/{apodId}")
   public ResponseEntity<?> deleteApodByApodId(@PathVariable int apodId) throws Exception{
        try{
            return new ResponseEntity<>(favouriteService.deleteApodByApodId(apodId),HttpStatus.OK);
        }
        catch (ApodNotFound ex){
            throw ex;
        }
        catch (RuntimeException ex){
            throw new RuntimeException(ex);
        }
   }
}
