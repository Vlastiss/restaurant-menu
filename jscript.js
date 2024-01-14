$(document).ready(function () {

    var collumIds = ['#lunchCol1', '#lunchCol2', '#breakfastCol1', '#breakfastCol2', '#dinnerCol1', '#dinnerCol2', '#shakeCol1','#shakeCol2']

    $("#all").click(function() {
        collumIds.forEach( id => {
            if ($(id).hasClass("d-none")) {
                $(id).removeClass("d-none")
            }
        })
    })

    $("#breakfast").click(function() {
        removeClass();
        collumIds.forEach( id => {
            if (!$(id).is('#breakfastCol1, #breakfastCol2')) {
                $(id).addClass("d-none")
            }
        })
    })
    
    $("#lunch").click(function() {
        removeClass();
        collumIds.forEach( id => {
            if (!$(id).is('#lunchCol1, #lunchCol2')) {
                $(id).addClass("d-none")
            }
        })
    })
    $("#shakes").click(function() {
        removeClass();
        collumIds.forEach( id => {
            if (!$(id).is('#shakeCol1, #shakeCol2')) {
                $(id).addClass("d-none")
            }
        })
    })
    $("#dinner").click(function() {
        removeClass();
        collumIds.forEach( id => {
            if (!$(id).is('#dinnerCol1, #dinnerCol2')) {
                $(id).addClass("d-none")
            }
        })
    })

    function removeClass() {
        collumIds.forEach( id => {
                $(id).removeClass("d-none")
        })
    }




});