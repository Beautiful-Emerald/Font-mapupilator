left_wristx="";
right_wristx="";
difference="";

function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(550, 450);
    canvas.position(560, 90);
    
    posenet=ml5.poseNet('video',modelLoaded);
    posenet.on('pose', gotPoses);
    }

    function modelLoaded(){
    console.log("model loaded");
    }

    function gotPoses(results){
    if(results.length>0){
    console.log(results);

    left_wristx=results[0].pose.leftWrist.x;
    right_wristx=results[0].pose.rightWrist.x;
    difference=floor(left_wristx - right_wristx);
    }
    }

    function draw(){
    fill("#a2a1f0");
    stroke("#a2a1f0");
    textSize(difference);
    text("Ishrath", 50, 400);
    document.getElementById("m").innerHTML="font size is" + difference;
    }