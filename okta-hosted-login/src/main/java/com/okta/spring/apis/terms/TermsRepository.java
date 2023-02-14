package com.okta.spring.apis.terms;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

public class TermsRepository {
    public JSONObject getTermsList() {
        String apiUrl = "https://samsung-poc.workflows.oktapreview.com/api/flo/a8baa57b6a9df46e2203166421e4ec33/invoke?clientToken=24a2debfb362799664a4f24a28d646f7f96ffa5447a1b00e2cec2088c99ba41a";

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));

        Map<String, Object> payLoad = new HashMap<>();
        Map<String, Object> query = new HashMap<>();
        payLoad.put("query", query);

        HttpEntity<Map<String, Object>> httpEntity = new HttpEntity<>(payLoad, headers);
        ResponseEntity<String> response = restTemplate.postForEntity(apiUrl, httpEntity, String.class);

        JSONParser parser = new JSONParser();
        JSONObject responseObject = new JSONObject();
        try {
            responseObject = (JSONObject) parser.parse(response.getBody());
        } catch (ParseException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return responseObject;
    }
}
