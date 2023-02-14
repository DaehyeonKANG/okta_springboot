package com.okta.spring;

import java.util.ArrayList;

public class CompanyInfoList {
    public ArrayList<CompanyInfo> companies = new ArrayList<CompanyInfo>();
    public CompanyInfoList(){
        CompanyInfo samsung = new CompanyInfo();
        CompanyInfo okta = new CompanyInfo();
        CompanyInfo biteksystem = new CompanyInfo();

        samsung.companyNameKo = "삼성전자";
        samsung.companyNameEn = "samsung electronics";
        okta.companyNameKo = "옥타";
        okta.companyNameEn = "okta";
        biteksystem.companyNameKo = "바이텍씨스템";
        biteksystem.companyNameEn = "biteksystem";
        
        companies.add(samsung);
        companies.add(okta);
        companies.add(biteksystem);
	}
}
