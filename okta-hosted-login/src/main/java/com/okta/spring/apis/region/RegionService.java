package com.okta.spring.apis.region;

import org.json.simple.JSONObject;

public class RegionService {
    private final RegionRepository regionRepository = new RegionRepository();

    public JSONObject searchRegion(RegionEntity entity) {
        return this.regionRepository.searchRegion(entity);
    }
}