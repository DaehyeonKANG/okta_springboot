package com.okta.spring.apis.company;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

public class CompanyRepository {
    /**
     * Search Company List
     * Using part of company name
     */
    public JSONObject searchCompany(CompanyEntity entity) {
        String apiUrl = "https://samsung-poc.workflows.oktapreview.com/api/flo/5ca41e3c5b35d0b6fa45a2f1f78e6bea/invoke?clientToken=3f97aefeb98e245e47b606cbe20142397f21a71cf1af2ba397053f653aa13e7c";
        
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));

        Map<String, Object> payLoad = new HashMap<>();
        Map<String, Object> query = new HashMap<>();
        query.put("company", entity.getCompanyName());
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