function configureTitle(data) {
    let userProfileAttributes = data.principal.attributes;

    console.log(userProfileAttributes.userCompanyInput);
    console.log(userProfileAttributes.name);

    let title = userProfileAttributes.name + "님 환영합니다.";
    document.getElementById("userProfile-title").innerHTML = title;

}