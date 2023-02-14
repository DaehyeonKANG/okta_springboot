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

    @PostMapping("/assign")
    public ResponseEntity<String> assignChannelB(@RequestBody UserEntity entity) {
        LocalDateTime now = LocalDateTime.now();
        System.out.println("userId: " + entity.getUserId());
        System.out.println("userCompany: " + entity.getUserCompany());
        System.out.println("userRegion: " + entity.getUserRegion());
        System.out.println("tcAgreedVersion: " + entity.getTcAgreedVersion());
        System.out.println("tcAgreedDate: " + entity.getTcAgreedDate());
        System.out.println("ppAgreedVersion: " + entity.getPpAgreedVersion());
        System.out.println("ppAgreedDate: " + entity.getPpAgreedDate());
        System.out.println("maAgreedVersion: " + entity.getMaAgreedVersion());
        System.out.println("maAgreedDate: " + entity.getMaAgreedDate());

        return new ResponseEntity(null, HttpStatus.OK);
    }
}
