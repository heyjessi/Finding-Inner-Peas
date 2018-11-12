/* main JS file */

console.log("Hello JS world!");

$("#show").click(function(){
    $(".stories").show();
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
        console.log("hello1");
        comfort.load();
        comfort.play(); },
    function () { comfort.pause(); });


$('#favorite').hover(function () {
        console.log("hello2");
        favorite.load();
        favorite.play(); },
    function () { favorite.pause(); });

$('#nostalgia').hover(function () {
        console.log("hello3");
        nostalgia.load();
        nostalgia.play(); },
    function () { nostalgia.pause(); });

$('#perfect').hover(function () {
        console.log("hello4");
        perfect.load();
        perfect.play(); },
    function () { perfect.pause(); });
