/**
package com.kaleidipin.AuthorizationService.service;

import com.kaleidipin.AuthorizationService.exception.UserNotFoundException;
import com.kaleidipin.AuthorizationService.model.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    User saveUser(User user);
    boolean validateUser(User user) throws UserNotFoundException;
}

*/

package com.kaleidipin.AuthorizationService.service;


import com.kaleidipin.AuthorizationService.model.UserProfile;


import java.util.List;

public interface UserServiceDao {
//    UserProfile registerUser(UserProfile user);
    boolean validateUser(String email, String password);


}


