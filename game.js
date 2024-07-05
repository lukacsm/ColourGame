"use strict"

$(document).ready(function() {
    setQuiz();
});

$('#reset').on('click', function() {
    setQuiz();
});

$('#easyBTN').on('click', function() {
    createSquares(3);
});

$('#normalBTN').on('click', function() {
    createSquares(6);
});

$('#hardBTN').on('click', function() {
    createSquares('12');
});

$('.square').on('click', function() {
    var squareBg = $(this).css("background-color"),
        quizBg = $('#rgbCode').text().toLowerCase();;

    if (squareBg === quizBg) {
        $('#rgbCode').text("RICHTIG").fadeOut().fadeIn();
        $('.square').off('click');
        $('#gameheader').css("background-color", $(this).css("background-color"));
        timeout();
        $('.square').on('click');
    } else {
        $(this).css("background-color", "#232323");
    };
});

function createSquares(numberofSquares) {
    $('.square').remove();
    for (let i = 0; i < numberofSquares; i++) {
        var squareDiv = $(".square");
        $('.items').append('<div class="square"></div>');
    };
    setQuiz();
};

function setQuiz() {
    var correctSquareNr = Math.floor(Math.random() * 6);
    
    $('#gameheader').css("background-color", "#232323");
    $.each($('.square'), function(index) {
        var r = Math.floor(Math.random() * 256),
            g = Math.floor(Math.random() * 256),
            b = Math.floor(Math.random() * 256),
            color = "rgb(" + r + ", " + g + ", " + b + ")";
        $(this).css("background-color", color);
        if (correctSquareNr == index) {
            $('#rgbCode').text(color);
        };
    });
};

function timeout() {
    setTimeout(function() {
        setQuiz()
    }, 3000);
};