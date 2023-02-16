function configureTitle(data) {
    let userProfileAttributes = data.principal.attributes;
    if (userProfileAttributes.channel_B_tcAgreedAt == null || userProfileAttributes.channel_B_tcAgreedAt == undefined || userProfileAttributes.channel_B_tcAgreedAt == "") {
        location.href = "/";
        return false;
    }


    let title = "환영합니다. " + userProfileAttributes.name + "님.";
    document.getElementById("userProfile-title").innerHTML = title;

    console.log(userProfileAttributes);
    let assignedChannelB = userProfileAttributes.assignedChannelB;
    let assignedState = (assignedChannelB == null || assignedChannelB == undefined || assignedChannelB == "" || assignedChannelB == false) ? false : true;
    let description = "";
    if (assignedState) {
        description = userProfileAttributes.name + "님은 현재 <span class='red-highlight'>[승인]</span> 상태입니다.";
    } else {
        description = userProfileAttributes.name + "님은 현재 <span class='red-highlight'>[승인 대기]</span> 상태입니다.<br/>관리자 승인 후 정상적으로 시스템을 사용하실 수 있습니다.";
    }

    if(userProfileAttributes.isCompanyVerified == null || userProfileAttributes.isCompanyVerified == undefined || userProfileAttributes.isCompanyVerified == "" || userProfileAttributes.isCompanyVerified == false) {
        description = description.concat("<br/>회사 정보가 <span class='red-highlight'>미인증</span> 상태입니다. 관리자에게 확인하세요.");
    }

    document.getElementById("userProfile-description").innerHTML = description;
}

function configureUserAttribute(data) {
    let userProfileAttributes = data.principal.attributes;

    let response = "";
    let index = 1;
    response = response.concat(configureUserProfileTableContents(index++, "이름", userProfileAttributes.name));
    response = response.concat(configureUserProfileTableContents(index++, "별칭", userProfileAttributes.nickname));
    response = response.concat(configureUserProfileTableContents(index++, "성별", userProfileAttributes.gender));
    response = response.concat(configureUserProfileTableContents(index++, "생일", userProfileAttributes.birthdate));
    response = response.concat(configureUserProfileTableContents(index++, "회사", userProfileAttributes.userCompanyInput));
    response = response.concat(configureUserProfileTableContents(index++, "국가", userProfileAttributes.userCountryInput));

    document.getElementById("userProfileAttributeTableBody").innerHTML = response;

    response = "";
    index = 1;
    response = response.concat(configureTermsTableContents(index++, "채널 A 이용 약관", userProfileAttributes.channel_A_tcAgreedAt, userProfileAttributes.channel_A_tcAgreedVer));
    response = response.concat(configureTermsTableContents(index++, "채널 B 이용 약관", userProfileAttributes.channel_B_tcAgreedAt, userProfileAttributes.channel_B_tcAgreedVer));
    response = response.concat(configureTermsTableContents(index++, "개인정보 활용 동의", userProfileAttributes.ppAgreedAt, userProfileAttributes.ppAgreedVer));
    response = response.concat(configureTermsTableContents(index++, "통합 마케팅 활용 동의", userProfileAttributes.maAgreedAt, userProfileAttributes.maAgreedVer));

    document.getElementById("userTermsAttributeTableBody").innerHTML = response;
}

function configureUserProfileTableContents(index, name, value) {
    if (value == null || value == undefined || value == "") {
        return "<tr>".concat("<td>").concat(index).concat("</td>").concat("<td>").concat(name).concat("</td>").concat("<td>").concat(" - ").concat("</td>").concat("</tr>");
    }

    return "<tr>".concat("<td>").concat(index).concat("</td>").concat("<td>").concat(name).concat("</td>").concat("<td>").concat(value).concat("</td>").concat("</tr>");
}

function configureTermsTableContents(index, name, datetime, version) {
    if (datetime == null || datetime == undefined || datetime == "") {
        return "<tr>".concat("<td>").concat(index).concat("</td>").concat("<td>").concat(name).concat("</td>").concat("<td>").concat(" - ").concat("</td>").concat("<td>").concat(" - ").concat("</td>").concat("</tr>");
    }

    return "<tr>".concat("<td>").concat(index).concat("</td>").concat("<td>").concat(name).concat("</td>").concat("<td>").concat(covertDateTime(datetime)).concat("</td>").concat("<td>").concat(version).concat("</td>").concat("</tr>");
}

function covertDateTime(value) {
    const enterDate = new Date(value);
    const KST_TIME_DIFF = 9 * 60 * 60 * 1000;
    const kstEnterDate = new Date((enterDate.getTime() + (enterDate.getTimezoneOffset() * 60 * 1000)) + (KST_TIME_DIFF));

    const date = new Intl.DateTimeFormat('kr').format(kstEnterDate);
    const time = kstEnterDate.toTimeString().split(' ')[0];

    return date + " " + time;
}