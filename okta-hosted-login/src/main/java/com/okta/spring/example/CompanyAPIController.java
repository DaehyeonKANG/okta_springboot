package com.okta.spring.example;

import java.util.HashMap;
import java.util.ArrayList;
import org.json.simple.JSONObject;
import org.json.simple.JSONArray;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping(path = "/company")
public class CompanyAPIController {
    private final CompanyService companyService = new CompanyService();

    @PostMapping("/search")
    public ResponseEntity<String> companySearch(@RequestBody CompanyInfo entity) {
        return new ResponseEntity(this.companyService.searchCompany(entity), HttpStatus.OK);
    }
}
