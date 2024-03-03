$(function() {
    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            Accept: "application/json",
        },
    });
});

function callAjax(url, data = {}, method = 'GET') {
    return $.ajax({
        url: url,
        data: data,
        type: method
    });
}

function callAjaxWithFormData(url, data = {}, method = 'POST') {
    return $.ajax({
        url: url,
        data: data,
        type: method,
        contentType: false,
        processData: false,
    });
}
