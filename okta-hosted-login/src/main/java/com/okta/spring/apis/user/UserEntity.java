package com.okta.spring.apis.user;

import lombok.*;
import java.time.LocalDateTime;

@Getter
@Setter
public class UserEntity {
    private String userId;
    private String userCompany;
    private String userRegion;
    private int tcAgreedVersion;
    private LocalDateTime tcAgreedDate;
    private String tcAgreedExist;
    private int ppAgreedVersion;
    private LocalDateTime ppAgreedDate;
    private String ppAgreedExist;
    private int maAgreedVersion;
    private LocalDateTime maAgreedDate;
    private String maAgreedExist;
}