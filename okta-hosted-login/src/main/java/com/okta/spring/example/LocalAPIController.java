package com.okta.spring.example;

import java.util.HashMap;

// import org.json.simple.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

// import com.okta.spring.example.DBCompanyEntity;
// import com.okta.spring.example.DBCompanyService;

@RestController
@RequestMapping(path = "/company")
public class LocalAPIController {
    // private final CompanyService companyService = new CompanyService();

    // @PostMapping("/search")
    // public ResponseEntity<String> companySearch(@RequestBody CompanyInfo entity) {
    //     this.companyService.searchCompany(entity);

    //     HashMap<String, String> responseEntity = new HashMap<String, String>();
    //     responseEntity.put("code", "200");

    //     // responseEntity.put("company_name_ko", responseData.getCompanyNameKo());
    //     // responseEntity.put("company_name_us", responseData.getCompanyNameUs());

    //     return new ResponseEntity(responseEntity, HttpStatus.OK);
    // }

    // private final DBCompanyService companyService = new DBCompanyService();

    // @PostMapping("/search")
    // public ResponseEntity<String> companySearch(@RequestBody DBCompanyEntity entity) {
    //     DBCompanyEntity responseData = this.companyService.selectCompanyNameUs(entity);

    //     HashMap<String, String> responseEntity = new HashMap<String, String>();
    //     responseEntity.put("code", "200");
    //     responseEntity.put("company_name_ko", responseData.getCompanyNameKo());
    //     responseEntity.put("company_name_us", responseData.getCompanyNameUs());

    //     return new ResponseEntity(responseEntity, HttpStatus.OK);
	// }
}
