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
    private int ppAgreedVersion;
    private LocalDateTime ppAgreedDate;
    private int maAgreedVersion;
    private LocalDateTime maAgreedDate;
}