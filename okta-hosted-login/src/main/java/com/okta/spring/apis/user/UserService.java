package com.okta.spring.apis.user;

import org.json.simple.JSONObject;
import java.util.List;

public class UserService {
    private final UserRepository userRepository =  new UserRepository();
    
    public JSONObject updateUserProfile(UserEntity entity) {
        return this.userRepository.updateUserProfile(entity);
    }

    public List<JSONObject> getAllMembersWithChannelB() {
        return this.userRepository.getAllMembersWithChannelB();
    }
}
