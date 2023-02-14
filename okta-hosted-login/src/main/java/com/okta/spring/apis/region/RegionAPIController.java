package com.okta.spring.apis.region;

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
@RequestMapping(path = "/region")
public class RegionAPIController {
    private final RegionService regionService = new RegionService();

    @PostMapping("/search")
    public ResponseEntity<String> regionSearch(@RequestBody RegionEntity entity) {
        return new ResponseEntity(this.regionService.searchRegion(entity), HttpStatus.OK);
    }
}
