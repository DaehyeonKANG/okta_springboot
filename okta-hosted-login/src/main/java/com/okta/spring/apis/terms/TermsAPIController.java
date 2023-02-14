package com.okta.spring.apis.terms;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/terms")
public class TermsAPIController {
    private final TermsService termsService = new TermsService();

    @PostMapping("/list")
    public ResponseEntity<String> getTermsList() {
        return new ResponseEntity(this.termsService.getTermsList(), HttpStatus.OK);
    }
}
