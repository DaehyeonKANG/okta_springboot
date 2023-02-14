package com.okta.spring.apis.user;

import org.json.simple.JSONObject;

public class UserService {
    private final UserRepository userRepository =  new UserRepository();
    
    public JSONObject updateUserProfile(UserEntity entity) {
        return this.userRepository.updateUserProfile(entity);
    }
}
