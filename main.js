nose_x=0;
nose_y=0;

function preload(){
image_Tophat=loadImage('https://i.postimg.cc/T2Lh0LBb/tophat.png');
}

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("model is on");
}

function gotPoses(results){
if(results.length>0){
     console.log(results);
     nose_x=results[0].pose.nose.x-130;  
     
     nose_y=results[0].pose.nose.y-200;
    

} 

}



function draw(){
image(video,0,0,500,500);
image(image_Tophat,nose_x,nose_y,250,170);


}

function Take_Photo(){
    save('My_photo_2');
}


