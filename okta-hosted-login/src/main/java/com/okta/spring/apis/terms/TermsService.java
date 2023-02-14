package com.okta.spring.apis.terms;

import org.json.simple.JSONObject;

public class TermsService {
    private final TermsRepository termsRepository = new TermsRepository();

    public JSONObject getTermsList() {
        return this.termsRepository.getTermsList();
    }
}
