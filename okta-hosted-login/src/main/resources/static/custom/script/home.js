function checkObject(data) {
    if (data != null) {
        let userProfileAttributes = data.principal.attributes;

        let agreeChannelB = userProfileAttributes.channel_B_tcAgreedAt;
        let agreeState = (agreeChannelB == null || agreeChannelB == undefined || agreeChannelB == "") ? false : true;
        if (agreeState) {
            location.href = "/profile";
        } else {
            let welcomeMsg = "";

            let userInfoFlag = ((userProfileAttributes.userCompanyInput==null||userProfileAttributes.userCompanyInput==undefined||userProfileAttributes.userCompanyInput=="") || (userProfileAttributes.name==null||userProfileAttributes.name==undefined||userProfileAttributes.name=="")) ? false : true;
            if(userInfoFlag) {
                welcomeMsg = welcomeMsg.concat("[").concat(userProfileAttributes.userCompanyInput).concat("] ").concat(userProfileAttributes.name).concat("님은 ");
            }

            welcomeMsg = welcomeMsg.concat("<span class='red-highlight'>").concat("미인가").concat("</span>").concat(" 사용자입니다.").concat("<br/>간편가입을 진행해주세요.");
            document.getElementById("access-user-profile").innerHTML = welcomeMsg;
        }
    }
}