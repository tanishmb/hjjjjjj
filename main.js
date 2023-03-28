song="";
song2=""


function setup(){
canvas=createCanvas(500,400);
 canvas.center();
  video=createCapture(VIDEO);
    video.hide();
    
   
}

function draw(){
    image(video,0,0,500,400);
}
function play(){
    song.play()
}

function preload(){
    song=loadSound("90shukar.mp4")
    song2=loadSound("Tibbe.mp4")
}


