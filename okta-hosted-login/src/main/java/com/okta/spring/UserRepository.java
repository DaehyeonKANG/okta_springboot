package com.okta.spring;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONObject;
import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

public class UserRepository {
    public JSONObject updateUserProfile(UserEntity userEntity) {
        String apiUrl = "https://samsung-poc.workflows.oktapreview.com/api/flo/430a949cafcd26337d27efd0e2f65aad/invoke?clientToken=498c798f7a8d347dd57f10f08e2cb58591055d2adf81227bc0dc75b5db3d2759";

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));

        Map<String, Object> payLoad = new HashMap<>();
        Map<String, Object> query = new HashMap<>();
        query.put("user", userEntity.user);
        query.put("channel", userEntity.channel);
        query.put("country", userEntity.country);
        query.put("tc", userEntity.tc);
        query.put("pp", userEntity.pp);
        query.put("ma", userEntity.ma);
        payLoad.put("query", query);

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(payLoad, headers);
        ResponseEntity<String> response = restTemplate.postForEntity(apiUrl, entity, String.class);

        return new JSONObject();
    }
}