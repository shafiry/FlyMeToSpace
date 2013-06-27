$(document).ready(function () {
    $(".planet").on("click", function (event) {

        var thisId = jQuery(this).attr("id");           //gets id of whatever was clicked
        var time = 5000;                                //easily change time to place
        document.getElementById(thisId + "Go").style.display = "block";
        document.getElementById("spaceship").style.display = "block";
        document.getElementById("spaceship").style.top = "-150px";                              //
        $("#spaceship").animate({ opacity: 1 }, 0);                                             //   Takes care of spaceship
        $("#spaceship").css('top', function () { return $(this).offset().top; })                //
             			.animate({ "top": "80%" }, time/3, function () {
             			    $("#spaceship").css('top', "80%") // '50%' must mach what the last one animated to!
             			        .animate({ "top": "300px" }, time / 5);
             			});

        $('html, body').animate({
            scrollTop: ($(("#" + thisId + "Go")).offset().top - 300)                            //
        }, time);
        document.getElementById("scrollUp").style.display = "block";

        /*setTimeout(function () {
        document.getElementById("#spaceshipmoving").style.display = "block";    // maybe add a shadow to spaceship
        }, 700);*/

        setTimeout(function () {
            $("#" + thisId + "Hint").css('left', function () { return $(this).offset().left; }) // Hints
             			.animate({ "left": "50px" }, 2000);                                     //
        }, time / 8);

        setTimeout(function () {
            $("#" + thisId + "Hint").css('left', function () { return $(this).offset().left; }) // Makes hints disappear
             			.animate({ "left": "-400px" }, 600);                                    //
        }, 3 * time / 4);

    });

    $("#scrollUp").on("click", function (event) {
        document.getElementById("spaceship").style.display = "none";                            // scroll up when done with animation
        $('html, body').animate({                                                               //
            scrollTop: 0            // how long it takes to get back up
        }, 1000, function () { document.getElementById("scrollUp").style.display = "none"; });  // deletes scroll when finished getting to the top
    });

});