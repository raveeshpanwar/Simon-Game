//declaring
let buttonColours=["red","blue","green","yellow"];
let gamePattern=[];
let userClickedPattern=[];
let level=0;
let started=false;

$(document).keypress(function(){   
if(!started){
$("#level-title").text("Level " + level);
nextSequence(); 
started=true;}
});

$('.btn').click(function(e){
    let userChosenColour=e.target.id;
    userClickedPattern.push(userChosenColour);
    playsound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1)
});

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
    if(userClickedPattern.length===gamePattern.length){
    setTimeout(function (){
    nextSequence();    
    },1000);
    }
    }else{
    console.log('wrong');
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
    }
}

nextSequence=()=>{
    userClickedPattern=[];
    level++;
    $('h1').text('Level '+level);
    randomNumber=Math.floor(Math.random()*4);
    let randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    let ye='#'+randomChosenColour;
    $(ye).animate({
        opacity:'0.2',
    },300);
    $(ye).animate({
        opacity:'1',
    },300);
   playsound(randomChosenColour);
 
  
}
   
//animating buttons
animatePress=(currentColour)=>{
        $('#'+currentColour).addClass('pressed');
       setTimeout(() => {
        $('#'+currentColour).removeClass('pressed');
       }, 100); 

}
//sound function attached to user and pattern
function playsound(name){
    let audi='sounds/'+name+'.mp3';
    audi=new Audio(audi);
    audi.play();
}
function startOver(){
level=0;
gamePattern=[];
started=false;
}
//next sequence



