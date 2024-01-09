/*var ptrn=[];
var arr=["red", "blue", "green", "yellow"];
uptrn=[];
var srt=false;
var lvl=0;
$(document).keyPress(function(){
    if(!srt){
        $("#level-title").text("Level "+lvl);
        next();
        srt=true;
    }
});

$(".btn").click(function(){
    var u=$(this).attr("id");
    playSound(u)
    animatePress(u)
    uptrn.push(u);
});

function next(){
    lvl++;
    $("#level-title").text("Level "+lvl);
    var x = Math.floor(Math.random()*4);
    ptrn.push(arr[x]);
    $("#" + arr[x]).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(arr[x]);
}


function playSound(n){
    var audio=new Audio('sounds/'+n+'.mp3');
    audio.play();
}

function animatePress(c){
    $("#"+c).addClass("pressed");
    setTimeout(function(){
        $("#"+c).removeClass("pressed");
    },100);
}
*/
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

//You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
var started = false;

//2. Create a new variable called level and start at level 0.
var level = 0;

//1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(function() {
  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
});

function nextSequence() {

  //4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
  level++;

  //5. Inside nextSequence(), update the h1 with this change in the value of level.
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}






