package com.okta.spring.apis.user;

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

public class UserRepository {
    public JSONObject updateUserProfile(UserEntity entity) {
        String apiUrl = "https://samsung-poc.workflows.oktapreview.com/api/flo/36588068ca31ee4fc7f1c38574e7d1fd/invoke?clientToken=b03f63d784806f54b19c1840d163088155da92316402c93e7cd70217c53250f5";

        // RestTemplate restTemplate = new RestTemplate();
        // HttpHeaders headers = new HttpHeaders();
        // headers.setContentType(MediaType.APPLICATION_JSON);
        // headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));

        Map<String, Object> payLoad = new HashMap<>();
        Map<String, Object> query = new HashMap<>();
        query.put("user_id", entity.getUserId());
        query.put("channel_B_tcAgreedAt", entity.getTcAgreedDate());
        query.put("ppAgreedAt", entity.getPpAgreedDate());
        query.put("maAgreedAt", entity.getMaAgreedDate());
        query.put("channel_B_tcAgreedVer", entity.getTcAgreedVersion());
        query.put("ppAgreedVer", entity.getPpAgreedVersion());
        query.put("maAgreedVer", entity.getMaAgreedVersion());
        query.put("companyName", entity.getUserCompany());
        query.put("regionName", entity.getUserRegion());
        query.put("tcAgreedExist", entity.getTcAgreedExist());
        query.put("ppAgreedExist", entity.getPpAgreedExist());
        query.put("maAgreedExist", entity.getMaAgreedExist());
        payLoad.put("query", query);

        // HttpEntity<Map<String, Object>> httpEntity = new HttpEntity<>(payLoad, headers);
        // ResponseEntity<String> response = restTemplate.postForEntity(apiUrl, httpEntity, String.class);

        // JSONParser parser = new JSONParser();
        // JSONObject responseObject = new JSONObject();
        // try {
        //     responseObject = (JSONObject) parser.parse(response.getBody());
        // } catch (ParseException e) {
        //     // TODO Auto-generated catch block
        //     e.printStackTrace();
        // }

        // return responseObject;
        return sendPostRequest(apiUrl, payLoad);
    }

    public JSONObject getAllMembersWithChannelB() {
        String apiUrl = "https://samsung-poc.workflows.oktapreview.com/api/flo/cc7f01cf01d945daebbd78fef5ee077a/invoke?clientToken=e2a17a78293a7c96f3eb5c33ec5cf40a5e76bf03818128e7300a0913fae731a3";
        Map<String, Object> payLoad = new HashMap<>();
        Map<String, Object> query = new HashMap<>();
        payLoad.put("query", query);

        return sendPostRequest(apiUrl, payLoad);
    }

    public JSONObject sendPostRequest(String apiUrl, Map<String, Object> payLoad) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));

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
