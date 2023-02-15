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
            let profileRecords = "";
            let termsAgreedRecords = "";
            let privacypolicyAgreedRecords = "";
            let integratedMarketingAgreedRecords = "";

            let isCompanyVerified;
            let assignedChannelB;

            for(let i = 0; i < response.length; i++) {
                isCompanyVerified = (checkNullObject(response[i].isCompanyVerified)) ? "<span class='red-highlight'>미인증</span>" : "<span class='blue-highlight'>인증</span>";
                assignedChannelB = (checkNullObject(response[i].AssignedChannelB)) ? "<span class='red-highlight'>미승인</span>" : "<span class='blue-highlight'>승인</span>";

                profileRecords = profileRecords.concat("<tr>");
                profileRecords = profileRecords.concat("<td>").concat((i + 1)).concat("</td>");
                profileRecords = profileRecords.concat("<td>").concat(response[i].Username).concat("</td>");
                profileRecords = profileRecords.concat("<td>").concat(response[i].company_name).concat("</td>");
                profileRecords = profileRecords.concat("<td>").concat(response[i].region_name).concat("</td>");
                profileRecords = profileRecords.concat("<td>").concat(isCompanyVerified).concat("</td>");
                profileRecords = profileRecords.concat("<td>").concat(assignedChannelB).concat("</td>");
                profileRecords = profileRecords.concat("</tr>");

                termsAgreedRecords = termsAgreedRecords.concat("<tr>");
                termsAgreedRecords = termsAgreedRecords.concat("<td>").concat((i + 1)).concat("</td>");
                termsAgreedRecords = termsAgreedRecords.concat("<td>").concat(response[i].Username).concat("</td>");
                termsAgreedRecords = termsAgreedRecords.concat("<td>").concat(covertDateTime(response[i].channel_B_tcAgreedAt)).concat("</td>");
                termsAgreedRecords = termsAgreedRecords.concat("<td>").concat(response[i].channel_B_tcAgreedVer).concat("</td>");
                termsAgreedRecords = termsAgreedRecords.concat("<td>").concat(assignedChannelB).concat("</td>");
                termsAgreedRecords = termsAgreedRecords.concat("</tr>");

                privacypolicyAgreedRecords = privacypolicyAgreedRecords.concat("<tr>");
                privacypolicyAgreedRecords = privacypolicyAgreedRecords.concat("<td>").concat((i + 1)).concat("</td>");
                privacypolicyAgreedRecords = privacypolicyAgreedRecords.concat("<td>").concat(response[i].Username).concat("</td>");
                privacypolicyAgreedRecords = privacypolicyAgreedRecords.concat("<td>").concat(covertDateTime(response[i].ppAgreedAt)).concat("</td>");
                privacypolicyAgreedRecords = privacypolicyAgreedRecords.concat("<td>").concat(response[i].ppAgreedVer).concat("</td>");
                privacypolicyAgreedRecords = privacypolicyAgreedRecords.concat("<td>").concat(assignedChannelB).concat("</td>");
                privacypolicyAgreedRecords = privacypolicyAgreedRecords.concat("</tr>");

                integratedMarketingAgreedRecords = integratedMarketingAgreedRecords.concat("<tr>");
                integratedMarketingAgreedRecords = integratedMarketingAgreedRecords.concat("<td>").concat((i + 1)).concat("</td>");
                integratedMarketingAgreedRecords = integratedMarketingAgreedRecords.concat("<td>").concat(response[i].Username).concat("</td>");
                integratedMarketingAgreedRecords = integratedMarketingAgreedRecords.concat("<td>").concat(covertDateTime(response[i].maAgreedAt)).concat("</td>");
                integratedMarketingAgreedRecords = integratedMarketingAgreedRecords.concat("<td>").concat(response[i].maAgreedVer).concat("</td>");
                integratedMarketingAgreedRecords = integratedMarketingAgreedRecords.concat("<td>").concat(assignedChannelB).concat("</td>");
                integratedMarketingAgreedRecords = integratedMarketingAgreedRecords.concat("</tr>");
            }

            // for(let i = 0; i < response.length; i++) {
            //     // termsAgreedRecords = termsAgreedRecords.concat("<tr>");
            //     // termsAgreedRecords = termsAgreedRecords.concat("<td>").concat((i + 1)).concat("</td>");
            //     // termsAgreedRecords = termsAgreedRecords.concat("<td>").concat(response[i].Username).concat("</td>");
            //     // termsAgreedRecords = termsAgreedRecords.concat("<td>").concat(response[i].channel_B_tcAgreedAt).concat("</td>");
            //     // termsAgreedRecords = termsAgreedRecords.concat("<td>").concat(response[i].channel_B_tcAgreedVer).concat("</td>");
            //     // termsAgreedRecords = termsAgreedRecords.concat("<td>").concat(assignedChannelB).concat("</td>");
            //     // termsAgreedRecords = termsAgreedRecords.concat("</tr>");
            // }

            // for(let i = 0; i < response.length; i++) {
            //     // privacypolicyAgreedRecords = privacypolicyAgreedRecords.concat("<tr>");
            //     // privacypolicyAgreedRecords = privacypolicyAgreedRecords.concat("<td>").concat((i + 1)).concat("</td>");
            //     // privacypolicyAgreedRecords = privacypolicyAgreedRecords.concat("<td>").concat(response[i].Username).concat("</td>");
            //     // privacypolicyAgreedRecords = privacypolicyAgreedRecords.concat("<td>").concat(response[i].ppAgreedAt).concat("</td>");
            //     // privacypolicyAgreedRecords = privacypolicyAgreedRecords.concat("<td>").concat(response[i].ppAgreedVer).concat("</td>");
            //     // privacypolicyAgreedRecords = privacypolicyAgreedRecords.concat("<td>").concat(assignedChannelB).concat("</td>");
            //     // privacypolicyAgreedRecords = privacypolicyAgreedRecords.concat("</tr>");
            // }

            // for(let i = 0; i < response.length; i++) {
            //     // integratedMarketingAgreedRecords = integratedMarketingAgreedRecords.concat("<tr>");
            //     // integratedMarketingAgreedRecords = integratedMarketingAgreedRecords.concat("<td>").concat((i + 1)).concat("</td>");
            //     // integratedMarketingAgreedRecords = integratedMarketingAgreedRecords.concat("<td>").concat(response[i].Username).concat("</td>");
            //     // integratedMarketingAgreedRecords = integratedMarketingAgreedRecords.concat("<td>").concat(response[i].maAgreedAt).concat("</td>");
            //     // integratedMarketingAgreedRecords = integratedMarketingAgreedRecords.concat("<td>").concat(response[i].maAgreedVer).concat("</td>");
            //     // integratedMarketingAgreedRecords = integratedMarketingAgreedRecords.concat("<td>").concat(assignedChannelB).concat("</td>");
            //     // integratedMarketingAgreedRecords = integratedMarketingAgreedRecords.concat("</tr>");
            // }

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