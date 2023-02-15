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

            for(let i = 0; i < response.length; i++) {
                profileRecords = profileRecords.concat("<tr>");
                profileRecords = profileRecords.concat("<td>").concat((i + 1)).concat("</td>");
                profileRecords = profileRecords.concat("<td>").concat(response[i].Username).concat("</td>");
                profileRecords = profileRecords.concat("<td>").concat(response[i].company_name).concat("</td>");
                profileRecords = profileRecords.concat("<td>").concat(response[i].region_name).concat("</td>");
                profileRecords = profileRecords.concat("<td>").concat(response[i].isCompanyVerified).concat("</td>");
                profileRecords = profileRecords.concat("<td>").concat(response[i].AssignedChannelB).concat("</td>");
                profileRecords = profileRecords.concat("</tr>");
            }

            for(let i = 0; i < response.length; i++) {
                termsAgreedRecords = termsAgreedRecords.concat("<tr>");
                termsAgreedRecords = termsAgreedRecords.concat("<td>").concat((i + 1)).concat("</td>");
                termsAgreedRecords = termsAgreedRecords.concat("<td>").concat(response[i].Username).concat("</td>");
                termsAgreedRecords = termsAgreedRecords.concat("<td>").concat(response[i].channel_B_tcAgreedAt).concat("</td>");
                termsAgreedRecords = termsAgreedRecords.concat("<td>").concat(response[i].channel_B_tcAgreedVer).concat("</td>");
                termsAgreedRecords = termsAgreedRecords.concat("<td>").concat(response[i].AssignedChannelB).concat("</td>");
                termsAgreedRecords = termsAgreedRecords.concat("</tr>");
            }

            for(let i = 0; i < response.length; i++) {
                privacypolicyAgreedRecords = privacypolicyAgreedRecords.concat("<tr>");
                privacypolicyAgreedRecords = privacypolicyAgreedRecords.concat("<td>").concat((i + 1)).concat("</td>");
                privacypolicyAgreedRecords = privacypolicyAgreedRecords.concat("<td>").concat(response[i].Username).concat("</td>");
                privacypolicyAgreedRecords = privacypolicyAgreedRecords.concat("<td>").concat(response[i].ppAgreedAt).concat("</td>");
                privacypolicyAgreedRecords = privacypolicyAgreedRecords.concat("<td>").concat(response[i].ppAgreedVer).concat("</td>");
                privacypolicyAgreedRecords = privacypolicyAgreedRecords.concat("<td>").concat(response[i].AssignedChannelB).concat("</td>");
                privacypolicyAgreedRecords = privacypolicyAgreedRecords.concat("</tr>");
            }

            for(let i = 0; i < response.length; i++) {
                integratedMarketingAgreedRecords = integratedMarketingAgreedRecords.concat("<tr>");
                integratedMarketingAgreedRecords = integratedMarketingAgreedRecords.concat("<td>").concat((i + 1)).concat("</td>");
                integratedMarketingAgreedRecords = integratedMarketingAgreedRecords.concat("<td>").concat(response[i].Username).concat("</td>");
                integratedMarketingAgreedRecords = integratedMarketingAgreedRecords.concat("<td>").concat(response[i].maAgreedAt).concat("</td>");
                integratedMarketingAgreedRecords = integratedMarketingAgreedRecords.concat("<td>").concat(response[i].maAgreedVer).concat("</td>");
                integratedMarketingAgreedRecords = integratedMarketingAgreedRecords.concat("<td>").concat(response[i].AssignedChannelB).concat("</td>");
                integratedMarketingAgreedRecords = integratedMarketingAgreedRecords.concat("</tr>");
            }

            document.getElementById("channelBMemberProfile").innerHTML = profileRecords;
            document.getElementById("channelBTermsAgreed").innerHTML = termsAgreedRecords;
            document.getElementById("channelBPrivacyPolicyAgreed").innerHTML = privacypolicyAgreedRecords;
            document.getElementById("channelBIntegratedMarketingAgreed").innerHTML = integratedMarketingAgreedRecords;
        }
    });
}