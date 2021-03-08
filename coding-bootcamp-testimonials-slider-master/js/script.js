$(function(){
var next = $(".next");
var prev = $(".prev");
var tanya = $(".tanya");
var john = $(".john");

function slideRight(){
    tanya.css("display", "none");
    john.css("display", "block");
}

next.on("click", slideRight);

function slideLeft(){
    tanya.css("display", "block");
    john.css("display", "none");
}

prev.on("click", slideLeft);

});