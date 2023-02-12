function setUserInfo(data) {
    if (data != null) {
        let userProfileAttributes = data.principal.attributes;

        document.getElementById("userName").value = userProfileAttributes.name;
        document.getElementById("userEmail").value = userProfileAttributes.email;

        optionSelect(userProfileAttributes.userCompanyInput, "userCompany");
        optionSelect(userProfileAttributes.userCountryInput, "userRegion");
    }
}

function optionSelect(userOption, elementId) {
    if (userOption != null && userOption != undefined) {
        let element = document.getElementById(elementId).options;
        for (let i = 0; i < element.length; i++) {
            if (element[i].value == userOption) {
                element[i].selected = true;
            }
        }
    }
}

function checkPrivacyPolicy(data) {
    let userProfileAttributes = data.principal.attributes;
    let userRegionAttribute = userProfileAttributes.userCountryInput;

    let userRegion = document.getElementById("userRegion");
    userRegion.addEventListener("change", function() {
        if (userRegionAttribute == userRegion.value) {
            document.getElementById("agreePrivacyPolicy").checked = true;
        } else {
            document.getElementById("agreePrivacyPolicy").checked = false;
        }
    });
}

function setUserCompany(companies) {
    let companySelector = document.getElementById("userCompany");
    companySelector.options.add(new Option("회사선택", "none"));
    for (let i = 0; i < companies.length; i++) {
        companySelector.options.add(new Option(companies[i].companyNameKo, companies[i].companyNameEn));
    }
}

function checkDataConfig() {
    if (document.getElementById("userName").value == "") {
        alert("사용자 이름을 입력하세요.");
        return false;
    }
    if (document.getElementById("userEmail").value == "") {
        alert("사용자 e-mail을 입력하세요.");
        return false;
    }
    if (document.getElementById("userCompany").value == "none") {
        alert("회사를 선택하세요.");
        return false;
    }
    if (document.getElementById("userRegion").value == "none") {
        alert("국가를 선택하세요.");
        return false;
    }
    if (!document.getElementById("agreeChannelB").checked) {
        alert("채널 B 사용 약관에 동의해야합니다.");
        return false;
    }
    if (!document.getElementById("agreePrivacyPolicy").checked) {
        alert("개인 정보 활용에 동의해야합니다.");
        return false;
    }
    if (!document.getElementById("agreeIntegratedMarketing").checked) {
        alert("통합 마케팅 활용 약관에 동의해야합니다.");
        return false;
    }

    return true;
}