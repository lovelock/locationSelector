$.each(provinceList, function (key, value) {
    $("#province")
        .append($("<option></option>")
            .val(value)
            .text(value));
});

$('#province').change(function () {
    $("#city").empty();
    var city = $('#province').find('option:selected').val();
    $.each(cityList[city], function (key, value) {
        $("#city")
            .append($("<option></option>")
                .val(value)
                .text(value));
    });
});