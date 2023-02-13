function configureTitle(data) {
    let userProfileAttributes = data.principal.attributes;

    let title = "환영합니다. " + userProfileAttributes.name + "님.";
    document.getElementById("userProfile-title").innerHTML = title;

    let assignedChannelB = userProfileAttributes.assignedChannelB;
    let assignedState = (assignedChannelB == null || assignedChannelB == undefined || assignedChannelB == "" || assignedChannelB == false) ? false : true;
    let description = "";
    if (assignedState) {
        description = userProfileAttributes.name + "님은 현재 <span class='red-highlight'>[승인]</span> 상태입니다.";
    } else {
        description = userProfileAttributes.name + "님은 현재 <span class='red-highlight'>[승인 대기]</span> 상태입니다.<br/>관리자 승인 후 정상적으로 시스템을 사용하실 수 있습니다.";
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

// function configureUserBaseAttribute(data) {
//     let userProfileAttributes = data.principal.attributes;

//     let response = "";
//     let index = 1;
//     response = response.concat(configureUserProfileTableContents(index++, "login", userProfileAttributes.login));
//     response = response.concat(configureUserProfileTableContents(index++, "firstName", userProfileAttributes.firstName));
//     response = response.concat(configureUserProfileTableContents(index++, "lastName", userProfileAttributes.lastName));
//     response = response.concat(configureUserProfileTableContents(index++, "middleName", userProfileAttributes.middleName));
//     response = response.concat(configureUserProfileTableContents(index++, "honorificPrefix", userProfileAttributes.honorificPrefix));
//     response = response.concat(configureUserProfileTableContents(index++, "honorificSuffix", userProfileAttributes.honorificSuffix));
//     response = response.concat(configureUserProfileTableContents(index++, "email", userProfileAttributes.email));
//     response = response.concat(configureUserProfileTableContents(index++, "title", userProfileAttributes.title));
//     response = response.concat(configureUserProfileTableContents(index++, "displayName", userProfileAttributes.displayName));
//     response = response.concat(configureUserProfileTableContents(index++, "nickName", userProfileAttributes.nickName));
//     response = response.concat(configureUserProfileTableContents(index++, "profileUrl", userProfileAttributes.profileUrl));
//     response = response.concat(configureUserProfileTableContents(index++, "secondEmail", userProfileAttributes.secondEmail));
//     response = response.concat(configureUserProfileTableContents(index++, "mobilePhone", userProfileAttributes.mobilePhone));
//     response = response.concat(configureUserProfileTableContents(index++, "primaryPhone", userProfileAttributes.primaryPhone));
//     response = response.concat(configureUserProfileTableContents(index++, "streetAddress", userProfileAttributes.streetAddress));
//     response = response.concat(configureUserProfileTableContents(index++, "city", userProfileAttributes.city));
//     response = response.concat(configureUserProfileTableContents(index++, "state", userProfileAttributes.state));
//     response = response.concat(configureUserProfileTableContents(index++, "zipCode", userProfileAttributes.zipCode));
//     response = response.concat(configureUserProfileTableContents(index++, "countryCode", userProfileAttributes.countryCode));
//     response = response.concat(configureUserProfileTableContents(index++, "postalAddress", userProfileAttributes.postalAddress));
//     response = response.concat(configureUserProfileTableContents(index++, "preferredLanguage", userProfileAttributes.preferredLanguage));
//     response = response.concat(configureUserProfileTableContents(index++, "locale", userProfileAttributes.locale));
//     response = response.concat(configureUserProfileTableContents(index++, "timezone", userProfileAttributes.timezone));
//     response = response.concat(configureUserProfileTableContents(index++, "userType", userProfileAttributes.userType));
//     response = response.concat(configureUserProfileTableContents(index++, "employeeNumber", userProfileAttributes.employeeNumber));
//     response = response.concat(configureUserProfileTableContents(index++, "costCenter", userProfileAttributes.costCenter));
//     response = response.concat(configureUserProfileTableContents(index++, "organization", userProfileAttributes.organization));
//     response = response.concat(configureUserProfileTableContents(index++, "division", userProfileAttributes.division));
//     response = response.concat(configureUserProfileTableContents(index++, "department", userProfileAttributes.department));
//     response = response.concat(configureUserProfileTableContents(index++, "managerId", userProfileAttributes.managerId));
//     response = response.concat(configureUserProfileTableContents(index++, "manager", userProfileAttributes.manager));

//     document.getElementById("userBaseAttributeTableBody").innerHTML = response;
// }

// function configureUserCustomAttribute(data) {
//     let userProfileAttributes = data.principal.attributes;

//     let response = "";
//     let index = 1;
//     response = response.concat(configureUserProfileTableContents(index++, "channel_A_tcAgreedAt", userProfileAttributes.channel_A_tcAgreedAt));
//     response = response.concat(configureUserProfileTableContents(index++, "channel_A_tcAgreedVer", userProfileAttributes.channel_A_tcAgreedVer));
//     response = response.concat(configureUserProfileTableContents(index++, "channel_B_tcAgreedAt", userProfileAttributes.channel_B_tcAgreedAt));
//     response = response.concat(configureUserProfileTableContents(index++, "channel_B_tcAgreedVer", userProfileAttributes.channel_B_tcAgreedVer));
//     response = response.concat(configureUserProfileTableContents(index++, "userCompanyInput", userProfileAttributes.userCompanyInput));
//     response = response.concat(configureUserProfileTableContents(index++, "userCountryInput", userProfileAttributes.userCountryInput));
//     response = response.concat(configureUserProfileTableContents(index++, "ppAgreedAt", userProfileAttributes.ppAgreedAt));
//     response = response.concat(configureUserProfileTableContents(index++, "maAgreedAt", userProfileAttributes.maAgreedAt));
//     response = response.concat(configureUserProfileTableContents(index++, "maAgreedVer", userProfileAttributes.maAgreedVer));
//     response = response.concat(configureUserProfileTableContents(index++, "ppAgreedVer", userProfileAttributes.ppAgreedVer));

//     document.getElementById("userCustomAttributeTableBody").innerHTML = response;
// }

// function configureApplicationBaseAttribute(data) {
//     let userProfileAttributes = data.principal.attributes;

//     let response = "";
//     let index = 1;
//     response = response.concat(configureUserProfileTableContents(index++, "userName", userProfileAttributes.userName));
//     response = response.concat(configureUserProfileTableContents(index++, "name", userProfileAttributes.name));
//     response = response.concat(configureUserProfileTableContents(index++, "nickname", userProfileAttributes.nickname));
//     response = response.concat(configureUserProfileTableContents(index++, "given_name", userProfileAttributes.given_name));
//     response = response.concat(configureUserProfileTableContents(index++, "middle_name", userProfileAttributes.middle_name));
//     response = response.concat(configureUserProfileTableContents(index++, "family_name", userProfileAttributes.family_name));
//     response = response.concat(configureUserProfileTableContents(index++, "email", userProfileAttributes.email));
//     response = response.concat(configureUserProfileTableContents(index++, "profile", userProfileAttributes.profile));
//     response = response.concat(configureUserProfileTableContents(index++, "picture", userProfileAttributes.picture));
//     response = response.concat(configureUserProfileTableContents(index++, "website", userProfileAttributes.website));
//     response = response.concat(configureUserProfileTableContents(index++, "gender", userProfileAttributes.gender));
//     response = response.concat(configureUserProfileTableContents(index++, "birthdate", userProfileAttributes.birthdate));
//     response = response.concat(configureUserProfileTableContents(index++, "zoneinfo", userProfileAttributes.zoneinfo));
//     response = response.concat(configureUserProfileTableContents(index++, "locale", userProfileAttributes.locale));
//     response = response.concat(configureUserProfileTableContents(index++, "phone_number", userProfileAttributes.phone_number));
//     response = response.concat(configureUserProfileTableContents(index++, "street_address", userProfileAttributes.street_address));
//     response = response.concat(configureUserProfileTableContents(index++, "locality", userProfileAttributes.locality));
//     response = response.concat(configureUserProfileTableContents(index++, "region", userProfileAttributes.region));
//     response = response.concat(configureUserProfileTableContents(index++, "postal_code", userProfileAttributes.postal_code));
//     response = response.concat(configureUserProfileTableContents(index++, "country", userProfileAttributes.country));
//     response = response.concat(configureUserProfileTableContents(index++, "formatted", userProfileAttributes.formatted));

//     document.getElementById("applicationBaseAttributeTableBody").innerHTML = response;
// }

// function configureApplicationCustomAttribute(data) {
//     let userProfileAttributes = data.principal.attributes;

//     let response = "";
//     let index = 1;
//     response = response.concat(configureUserProfileTableContents(index++, "channel_A_tcAgreedAt", userProfileAttributes.channel_A_tcAgreedAt));
//     response = response.concat(configureUserProfileTableContents(index++, "channel_B_tcAgreedAt", userProfileAttributes.channel_B_tcAgreedAt));
//     response = response.concat(configureUserProfileTableContents(index++, "channel_A_tcAgreedVer", userProfileAttributes.channel_A_tcAgreedVer));
//     response = response.concat(configureUserProfileTableContents(index++, "channel_B_tcAgreedVer", userProfileAttributes.channel_B_tcAgreedVer));
//     response = response.concat(configureUserProfileTableContents(index++, "userCompanyInput", userProfileAttributes.userCompanyInput));
//     response = response.concat(configureUserProfileTableContents(index++, "userCountryInput", userProfileAttributes.userCountryInput));
//     response = response.concat(configureUserProfileTableContents(index++, "ppAgreedAt", userProfileAttributes.ppAgreedAt));
//     response = response.concat(configureUserProfileTableContents(index++, "maAgreedAt", userProfileAttributes.maAgreedAt));
//     response = response.concat(configureUserProfileTableContents(index++, "maAgreedVer", userProfileAttributes.maAgreedVer));
//     response = response.concat(configureUserProfileTableContents(index++, "ppAgreedVer", userProfileAttributes.ppAgreedVer));

//     document.getElementById("applicationCustomAttributeTableBody").innerHTML = response;
// }