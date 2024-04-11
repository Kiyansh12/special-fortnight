song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreRightWrist=0;
scoreleftWrist=0;
function setup() {
	canvas =  createCanvas(600, 400);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

    poseNet = ml5.poseNet(video, "modelLoaded");
	poseNet.on('pose', gotPoses);
}

function preload()
{
	song = loadSound("Oops(PagalWorld).mp3");
}



function modelLoaded() {
  console.log('PoseNet Is Initialized');
}



   
function play()
{
	song.play();
}

function gotPoses(results)
{
	if(results.length > 0)
	{
		console.log(results);
		leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);

		rightWristX = results[0].pose.leftWrist.x;
        rightWristY = results[0].pose.leftWrist.y;
		console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
	}
}

function draw() {
	image(video, 0, 0, 600, 500); 

	fill("#FF0000");
	stroke("#FF0000");
	
    circle(rightWristX,rightWristY,20);

	if(scoreRightWrist > 0.1)
  {
	circle(rightWristX,rightWristY,20);

	if(rightWristY >0 && rightWristY <= 100)
	{
		document.getElementById("speed").innerHTML = "Speed = Oops(PagalWorld).mp3";
		song.rate("Oops(PagalWorld).mp3");
	}
	else if(rightWristY > 100 && rightWristY <= 200)
	{
		document.getElementById("volume").innerHTML = "volume = .mp3";
		song.rate(".mp3");
	}
  }
}
