$(document).ready(function() {
    $("#btn-search-address").on("click", function() {
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
                // 예제를 참고하여 다양한 활용법을 확인해 보세요.
                $("#postcode").val(data.zonecode);
                $("#address").val(data.roadAddress);
                $("#address-eng").val(data.roadAddressEnglish);
            }
        }).open();
    });
});