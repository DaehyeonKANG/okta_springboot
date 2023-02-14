package com.okta.spring.apis.region;

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

public class RegionRepository {
    public JSONObject searchRegion(RegionEntity entity) {
        String apiUrl = "https://samsung-poc.workflows.oktapreview.com/api/flo/f4757d2dbecf73be03f3043834889c27/invoke?clientToken=a89594d578fcf44b2e6ecfd3bd357f636f18bb75047cfa82248f67f8bb973fbd";

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