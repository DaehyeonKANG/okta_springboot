// configure user profile token information
function setUserInfo(userProfileAttributes) {
    document.getElementById("userName").value = userProfileAttributes.name;
    document.getElementById("userEmail").value = userProfileAttributes.email;

    optionSelect(userProfileAttributes.userCountryInput, "userRegion");
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

function initCompanyState(userProfileAttributes) {
    let userCompanyValue = userProfileAttributes.userCompanyInput;
    document.getElementById("userCompanyKeyword").value = userCompanyValue;

    searchCompanyName(userCompanyValue);
}

function searchCompanyName(companyKeyword) {
    let payLoad = new Object();
    payLoad.companyName = companyKeyword;
    $.ajax({
        url: "/company/search",
        type: "POST",
        async: true,
        data: JSON.stringify(payLoad),
        dataType: "json",
        contentType: "application/json",
        beforeSend: function(xhr) {
            xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
        },
        success: function(response) {
            let companies = response.companies;
            let companySelector = document.getElementById("companySearchResult");
            companySelector.options.length = 0;

            for (let i = 0; i < companies.length; i++) {
                companySelector.options.add(new Option(companies[i], companies[i]));
                if (companies[i] == companyKeyword) {
                    companySelector.options[i].selected = true;
                }
            }
        }
    });
}

function initRegionState(userProfileAttributes) {
    let userRegionValue = userProfileAttributes.userCountryInput;

    let payLoad = new Object();
    $.ajax({
        url: "/region/search",
        type: "POST",
        async: true,
        data: JSON.stringify(payLoad),
        dataType: "json",
        contentType: "application/json",
        beforeSend: function(xhr) {
            xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
        },
        success: function(response) {
            let regions = response.regions;
            let regionSelector = document.getElementById("userRegion");
            regionSelector.options.length = 0;

            for (let i = 0; i < regions.length; i++) {
                regionSelector.options.add(new Option(regions[i].REGION_DESCRIPTION, regions[i].REGION_ABBREVIATION));
                if (regions[i].REGION_ABBREVIATION == userRegionValue) {
                    regionSelector.options[i].selected = true;
                }
            }
        }
    });
}

// configure terms agrred state.
function initTermsState(userProfileAttributes) {
    if (!checkNullObject(userProfileAttributes.channel_B_tcAgreedAt)) {
        location.href = "/profile";
    }

    setTermsState(userProfileAttributes.ppAgreedAt, "agreePrivacyPolicy");
    setTermsState(userProfileAttributes.maAgreedAt, "agreeIntegratedMarketing");
}

function setTermsState(object, domName) {
    if (!checkNullObject(object)) {
        document.getElementById(domName).checked = true;
    }
}

function configureEventHandlers(userProfileAttributes) {
    let searchCompanyBtn = document.getElementById("searchCompanies");
    searchCompanyBtn.addEventListener("click", function() {
        searchCompanyName(document.getElementById("userCompanyKeyword").value);
    });

    document.getElementById("userCompanyKeyword").addEventListener("keyup", function(event) {
        if (event.keyCode == 13) {
            searchCompanyBtn.click();
        }
    });

    let userRegionAttribute = userProfileAttributes.userCountryInput;
    let ppAgreedState = checkNullObject(userProfileAttributes.ppAgreedAt);

    let ppObj = document.getElementById("agreePrivacyPolicy");
    let userRegion = document.getElementById("userRegion");
    userRegion.addEventListener("change", function() {
        if (userRegionAttribute == userRegion.value && !ppAgreedState) {
            ppObj.checked = true;
        } else {
            ppObj.checked = false;
        }
    });

    document.getElementById("sign-up-user-profile").addEventListener("click", function() {
        let fillState = checkDataConfig();
        if (fillState) {
            alert("가입 신청이 완료되었습니다.\n다시 로그인해 주세요.");

            let payLoad = new Object();
            payLoad.userId = userRegionAttribute.email;
            payLoad.userCompany = userRegionAttribute.userCompanyInput;
            payLoad.userRegion = userRegionAttribute.userCountryInput;
            payLoad.tcAgreedVersion = userRegionAttribute.channel_B_tcAgreedVer;
            payLoad.tcAgreedDate = userRegionAttribute.channel_B_tcAgreedAt;
            payLoad.ppAgreedVersion = userRegionAttribute.ppAgreedVer;
            payLoad.ppAgreedDate = userRegionAttribute.ppAgreedAt;
            payLoad.maAgreedVersion = userRegionAttribute.maAgreedVer;
            payLoad.maAgreedDate = userRegionAttribute.maAgreedAt;
            console.log(payLoad);

            $.ajax({
                url: "/user/assign",
                type: "POST",
                async: true,
                data: JSON.stringify(payLoad),
                dataType: "json",
                contentType: "application/json",
                beforeSend: function(xhr) {
                    xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
                },
                success: function(response) {
                    console.log(response);
                }
            });

            // location.href = "/updateuserprofile?email=" + document.getElementById("userEmail").value + "&country=" + document.getElementById("userRegion").value;
        }
    });
}

function checkNullObject(object) {
    if (object == null || object == undefined || object == "") {
        return true;
    }

    return false;
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
    if (document.getElementById("companySearchResult").value == "") {
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