package com.okta.spring;

import java.util.HashMap;
import org.springframework.ui.Model;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.json.simple.JSONObject;

@Controller
public class UserController {
    private final UserService userService = new UserService();

    @RequestMapping("/updateuserprofile")
    public String updateUserProfile(@RequestParam(defaultValue = "") String email, @RequestParam(defaultValue = "") String country) {
        UserEntity userEntity =  new UserEntity();
        userEntity.user = email;
        userEntity.country = country;
        userEntity.channel = "b";
        userEntity.tc = "consented";
        userEntity.pp = "consented";
        userEntity.ma = "consented";

        JSONObject response = this.userService.updateUserProfile(userEntity);

        return "redirect:/completeuserprofile";
    }

    // @PostMapping("/updateuserprofile")
    // @RequestMapping("/updateuserprofile")
    // public ResponseEntity<String> updateUserProfile(UserEntity userEntity) {
    //     userEntity.channel = "b";
    //     userEntity.tc = "consented";
    //     userEntity.pp = "consented";
    //     userEntity.ma = "consented";

    //     System.out.println("user id" + userEntity.user);
    //     System.out.println("user channel" + userEntity.channel);
    //     System.out.println("user country" + userEntity.country);
    //     System.out.println("user tc" + userEntity.tc);
    //     System.out.println("user pp" + userEntity.pp);
    //     System.out.println("user ma" + userEntity.ma);

    //     // JSONObject response = this.userService.updateUserProfile(userEntity);

    //     HashMap<String, String> resultMessage = new HashMap<String, String>();
    //     resultMessage.put("code", "200");
    //     resultMessage.put("message", "[Success] update user profile");

    //     return new ResponseEntity(resultMessage, HttpStatus.OK);
    // }

}
