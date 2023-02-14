package com.okta.spring.apis.company;

import org.json.simple.JSONObject;

public class CompanyService {
    private final CompanyRepository companyRepository =  new CompanyRepository();
    
    public JSONObject searchCompany(CompanyEntity entity) {
        return this.companyRepository.searchCompany(entity);
    }
}