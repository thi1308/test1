$(function () {
    $(".btn-delete").on("click", function () {
        let url = $(this).data("route");
        let payload = { _method: "DELETE" }
        if (confirm("bạn có chắc chắn muốn xóa")) {
            callAjax(url, payload, "POST").done(function (response) {
                if (response.status === 200) {
                    location.reload()
                }
            });
        }
    });
});
