package com.okta.spring.example;

import org.json.simple.JSONObject;

public class CompanyService {
    private final CompanyRepository companyRepository =  new CompanyRepository();
    
    public JSONObject searchCompany(CompanyInfo entity) {
        return this.companyRepository.searchCompany(entity);
    }
}