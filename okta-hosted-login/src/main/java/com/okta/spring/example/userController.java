package com.okta.spring.example;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class userController {
    
    @RequestMapping("/getlikes/")
    public String updateUserProfile(Model model) {
        model.addAttribute("informations", "");
        return "home";
    }    
}
