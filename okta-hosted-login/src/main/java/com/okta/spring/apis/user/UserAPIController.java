package com.okta.spring.apis.user;

import java.util.HashMap;
import java.util.ArrayList;
import org.json.simple.JSONObject;
import org.json.simple.JSONArray;
import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/user")
public class UserAPIController {
    private final UserService userService = new UserService();

    @PostMapping("/assign")
    public ResponseEntity<String> assignChannelB(@RequestBody UserEntity entity) {
        LocalDateTime now = LocalDateTime.now();

        if(setEntityAttributes(entity.getTcAgreedDate())) {
            entity.setTcAgreedDate(now);
            entity.setTcAgreedExist("false");
        }
        if(setEntityAttributes(entity.getPpAgreedDate())) {
            entity.setPpAgreedDate(now);
            entity.setPpAgreedExist("false");
        }
        if(setEntityAttributes(entity.getTcAgreedDate())) {
            entity.setMaAgreedDate(now);
            entity.setMaAgreedExist("false");
        }

        return new ResponseEntity(this.userService.updateUserProfile(entity), HttpStatus.OK);
    }

    private Boolean setEntityAttributes(LocalDateTime termsAgreeDate) {
        if(termsAgreeDate == null) {
            return true;
        }

        return false;
    }

    @PostMapping("/channelmembers")
    public ResponseEntity<String> getAllMembersWithChannelB() {
        return new ResponseEntity(this.userService.getAllMembersWithChannelB(), HttpStatus.OK);
    }
}
