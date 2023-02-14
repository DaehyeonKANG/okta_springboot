package com.okta.spring.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.Collections;
import org.springframework.ui.Model;


@SpringBootApplication
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
public class CodeFlowExampleApplication {

    public static void main(String[] args) {
        SpringApplication.run(CodeFlowExampleApplication.class, args);
    }

    /**
     * The default Spring logout behavior redirects a user back to {code}/login?logout{code}, so you will likely want
     * to change that.  The easiest way to do this is by extending from {@link WebSecurityConfigurerAdapter}.
     */
    @Configuration
    static class WebConfig extends WebSecurityConfigurerAdapter {
        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http.authorizeRequests()
                    // allow antonymous access to the root page
                    .antMatchers("/").permitAll()
                    // all other requests
                    .anyRequest().authenticated()

                // set logout URL
                .and().logout().logoutSuccessUrl("/")

                // enable OAuth2/OIDC
                .and().oauth2Client()
                .and().oauth2Login();
        }
    }

    /**
     * This example controller has endpoints for displaying the user profile info on {code}/{code} and "you have been
     * logged out page" on {code}/post-logout{code}.
     */
    @Controller
    public class ExampleController {
        @GetMapping("/")
        @PreAuthorize("hasAuthority('SCOPE_profile')")
        public String home(Model model, OAuth2AuthenticationToken authentication) {
            model.addAttribute("informations", authentication);
            return "home";
        }

        @GetMapping("/profile")
        @PreAuthorize("hasAuthority('SCOPE_profile')")
        public String userDetails(Model model, OAuth2AuthenticationToken authentication) {
            model.addAttribute("informations", authentication);
            return "profile";
        }

        // @GetMapping("/profile")
        // @PreAuthorize("hasAuthority('SCOPE_profile')")
        // public ModelAndView userDetails(OAuth2AuthenticationToken authentication) {
        //     return new ModelAndView("userProfile" , Collections.singletonMap("details", authentication.getPrincipal().getAttributes()));
        // }

        @GetMapping("/signup")
        @PreAuthorize("hasAuthority('SCOPE_profile')")
        public String signup(Model model, OAuth2AuthenticationToken authentication) {
            CompanyInfoList companies = new CompanyInfoList();
            model.addAttribute("informations", authentication);
            model.addAttribute("companies", companies.companies);
            return "userSignup";
        }

        @GetMapping("/completeuserprofile")
        public String completeuserprofile(Model model, OAuth2AuthenticationToken authentication) {
            return "userSignout";
        }

        @GetMapping("/termsonchannelb")
        public String termsonchannelb() {
            return "termsonchannelb";
        }
    }
}
