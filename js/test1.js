$(document).ready(function () {
    $(".planet").on("click", function (event) {
        var thisId = jQuery(this).attr("id");
        $('html, body').animate({
            scrollTop: $(("#" + thisId + "Go")).offset().top
        }, 18410);

        setTimeout(function () {
            $("#" + thisId + "Hint").css('left', function () { return $(this).offset().left; })
             			.animate({ "left": "50px" }, 600);
        }, 3000);

        setTimeout(function () {
            $("#" + thisId + "Hint").css('left', function () { return $(this).offset().left; })
             			.animate({ "left": "-400px" }, 600);
        }, 7000);

    });
});