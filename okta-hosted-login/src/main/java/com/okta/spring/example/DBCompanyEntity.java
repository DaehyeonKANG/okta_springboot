package com.okta.spring.example;

// import javax.persistence.*;
import lombok.*;

// @Entity
// @Table(name = "PARTNER_COMPANIES")
// @Data
// @Builder
// @AllArgsConstructor
// @NoArgsConstructor
@Getter
@Setter
public class DBCompanyEntity {
    private String data;
    private String date2;
    // @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    // @Column(name = "COMPANY_IDX")
    // private Long id;

    // @Column(name = "COMPANY_NAME_KO")
    // private String companyNameKo;

    // @Column(name = "COMPANY_NAME_US")
    // private String companyNameUs;
}
