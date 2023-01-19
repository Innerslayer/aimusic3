function setup() {
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);
}

function modelloaded() {
    console.log('Posenet is Initialized');
}



song1="";
song2="";
song1status = "";
song2status = "";

leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;

function preload() {
    song1 = loadSound("music_01.mp3");
    song2 = loadSound("music.mp3");
}

function gotposes(results){
    if(results.length  > 0){
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;

        console.log("leftwristx = " + leftwristX + " leftwristy = " + leftwristY);
        console.log("rightwristx = " + rightwristX + "rightwristy" + rightwristY);
    }
}

function draw() {
    image(video,0,0,600,500);
}

