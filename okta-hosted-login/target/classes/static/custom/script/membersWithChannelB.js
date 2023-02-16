function getAllMembersWithChannelB() {
    $.ajax({
        url: "/user/channelmembers",
        type: "POST",
        async: true,
        dataType: "json",
        contentType: "application/json",
        beforeSend: function(xhr) {
            xhr.setRequestHeader($("meta[name='_csrf_header']").attr("content"), $("meta[name='_csrf']").attr("content"));
        },
        success: function(response) {
            let users = response.users;
            let profileRecords = "";
            let termsAgreedRecords = "";
            let privacypolicyAgreedRecords = "";
            let integratedMarketingAgreedRecords = "";

            let isCompanyVerified;
            let assignedChannelB;

            for(let i = 0; i < users.length; i++) {
                isCompanyVerified = (checkNullObject(users[i].IsComVerified)) ? "<span class='red-highlight'>미인증</span>" : "<span class='blue-highlight'>인증</span>";
                assignedChannelB = (checkNullObject(users[i].assignedChB)) ? "<span class='red-highlight'>미승인</span>" : "<span class='blue-highlight'>승인</span>";

                profileRecords = profileRecords.concat("<tr>");
                profileRecords = profileRecords.concat("<td>").concat((i + 1)).concat("</td>");
                profileRecords = profileRecords.concat("<td class='text-left'>").concat(users[i].email).concat("</td>");
                profileRecords = profileRecords.concat("<td>").concat(users[i].company).concat("</td>");
                profileRecords = profileRecords.concat("<td>").concat(users[i].country).concat("</td>");
                profileRecords = profileRecords.concat("<td>").concat(isCompanyVerified).concat("</td>");
                profileRecords = profileRecords.concat("<td>").concat(assignedChannelB).concat("</td>");
                profileRecords = profileRecords.concat("</tr>");

                termsAgreedRecords = termsAgreedRecords.concat("<tr>");
                termsAgreedRecords = termsAgreedRecords.concat("<td>").concat((i + 1)).concat("</td>");
                termsAgreedRecords = termsAgreedRecords.concat("<td class='text-left'>").concat(users[i].email).concat("</td>");
                termsAgreedRecords = termsAgreedRecords.concat("<td>").concat(covertDateTime(users[i].chB_TC_D)).concat("</td>");
                termsAgreedRecords = termsAgreedRecords.concat("<td>").concat((checkNullObject(users[i].chB_TC_V)?"-":users[i].chB_TC_V)).concat("</td>");
                termsAgreedRecords = termsAgreedRecords.concat("<td>").concat(assignedChannelB).concat("</td>");
                termsAgreedRecords = termsAgreedRecords.concat("</tr>");

                privacypolicyAgreedRecords = privacypolicyAgreedRecords.concat("<tr>");
                privacypolicyAgreedRecords = privacypolicyAgreedRecords.concat("<td>").concat((i + 1)).concat("</td>");
                privacypolicyAgreedRecords = privacypolicyAgreedRecords.concat("<td class='text-left'>").concat(users[i].email).concat("</td>");
                privacypolicyAgreedRecords = privacypolicyAgreedRecords.concat("<td>").concat(covertDateTime(users[i].PP_D)).concat("</td>");
                privacypolicyAgreedRecords = privacypolicyAgreedRecords.concat("<td>").concat((checkNullObject(users[i].PP_V)?"-":users[i].PP_V)).concat("</td>");
                privacypolicyAgreedRecords = privacypolicyAgreedRecords.concat("<td>").concat(assignedChannelB).concat("</td>");
                privacypolicyAgreedRecords = privacypolicyAgreedRecords.concat("</tr>");

                integratedMarketingAgreedRecords = integratedMarketingAgreedRecords.concat("<tr>");
                integratedMarketingAgreedRecords = integratedMarketingAgreedRecords.concat("<td>").concat((i + 1)).concat("</td>");
                integratedMarketingAgreedRecords = integratedMarketingAgreedRecords.concat("<td class='text-left'>").concat(users[i].email).concat("</td>");
                integratedMarketingAgreedRecords = integratedMarketingAgreedRecords.concat("<td>").concat(covertDateTime(users[i].MA_D)).concat("</td>");
                integratedMarketingAgreedRecords = integratedMarketingAgreedRecords.concat("<td>").concat((checkNullObject(users[i].MA_V)?"-":users[i].MA_V)).concat("</td>");
                integratedMarketingAgreedRecords = integratedMarketingAgreedRecords.concat("<td>").concat(assignedChannelB).concat("</td>");
                integratedMarketingAgreedRecords = integratedMarketingAgreedRecords.concat("</tr>");
            }

            document.getElementById("channelBMemberProfile").innerHTML = profileRecords;
            document.getElementById("channelBTermsAgreed").innerHTML = termsAgreedRecords;
            document.getElementById("channelBPrivacyPolicyAgreed").innerHTML = privacypolicyAgreedRecords;
            document.getElementById("channelBIntegratedMarketingAgreed").innerHTML = integratedMarketingAgreedRecords;
        }
    });
}

function checkNullObject(object) {
    if (object == null || object == undefined || object == "" || object == false) {
        return true;
    }

    return false;
}

function covertDateTime(value) {
    const enterDate = new Date(value);
    const KST_TIME_DIFF = 9 * 60 * 60 * 1000;
    const kstEnterDate = new Date((enterDate.getTime() + (enterDate.getTimezoneOffset() * 60 * 1000)) + (KST_TIME_DIFF));

    const date = new Intl.DateTimeFormat('kr').format(kstEnterDate);
    const time = kstEnterDate.toTimeString().split(' ')[0];

    return date + " " + time;
}