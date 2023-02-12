package com.okta.spring.example;

import org.json.simple.JSONObject;

public class UserService {
    private final UserRepository userRepository = new UserRepository();

    public JSONObject updateUserProfile(UserEntity userEntity) {
        return this.userRepository.updateUserProfile(userEntity);
    }
}