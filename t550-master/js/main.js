/* main JS file */

console.log("Hello JS world!");

$("#show").click(function(){
    // $(".stories").show();
    $(".stories").animate({opacity: '1'}, "slow");
});

$("#show").click(function(){
    $("#show").hide();
});

var best = document.getElementById("weekAudio");
var comfort = document.getElementById("comfortAudio");
var favorite = document.getElementById("favoriteAudio");
var nostalgia = document.getElementById("nostalgiaAudio");
var perfect = document.getElementById("bestAudio");

$('#best').hover(function () {
                    console.log("hello0");
                    best.load();
                    best.play(); },
                function () { best.pause(); });

$('#comfort').hover(function () {
        comfort.load();
        comfort.play(); },
    function () { comfort.pause(); });


$('#favorite').hover(function () {
        favorite.load();
        favorite.play(); },
    function () { favorite.pause(); });

$('#nostalgia').hover(function () {
        nostalgia.load();
        nostalgia.play(); },
    function () { nostalgia.pause(); });

$('#perfect').hover(function () {
        perfect.load();
        perfect.play(); },
    function () { perfect.pause(); });
