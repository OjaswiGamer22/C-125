noseX=0;
noseY=0;
RightWristX=0;
LeftWristX=0;
difference=0;

function preload(){

}

function setup(){
video= createCapture(VIDEO);
video.size(500,500);
canvas=createCanvas(500,400);
canvas.position(560,100);
poseNet=ml5.poseNet(video,Modelloaded);
poseNet.on("pose", gotPoses);
}

function draw(){
background("gray");
fill("orange");
stroke("lightblue");
square(noseX,noseY,difference);
textSize(difference);
document.getElementById("heading3").innerHTML="Font size of the text is   "+difference+"Pixels";
fill("magenta");
text("OJASWI",50,400);
}

function Modelloaded(){
    console.log("poseNet is initialized");
    }

    function gotPoses(results){
        if(results.length > 0){
            console.log(results);
            noseX=results[0].pose.nose.x;
            noseY=results[0].pose.nose.x;
            console.log("noseX = " + noseX + "noseY= " + noseY);
            LeftWristX=results[0].pose.leftWrist.x;
            RightWristX=results[0].pose.rightWrist.x;
console.log("LeftWristX= " + LeftWristX + "RightWristX= " + RightWristX);
difference= floor(LeftWristX-RightWristX);
        }
    }

