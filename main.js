
noseX = 0;
noseY = 0;


function preload(){
moustache = loadImage("https://i.postimg.cc/vmJSY6yc/moustache.png");
bear = loadImage("https://i.postimg.cc/8Cdzxmvt/bear.png");
}

function setup(){
    canvas = createCanvas(400,400);
    canvas.position(600,200);
    camera=createCapture(VIDEO);
    camera.hide();

    Posemodel=ml5.poseNet(camera,modelLoaded);
    Posemodel.on('pose',gotPoses);

}

function draw(){
 image(camera,0,0,400,400);
  image(moustache,noseX-130,noseY-65,80,80);
  image(bear,noseX-135,noseY-280,100,100);

}

function take_snapshot(){
  save("filterimage.png");
}


function modelLoaded(){
  console.log("Model Loaded");
}

function gotPoses(results){
  if(results.length > 0)
  {
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log(results);
    console.log("nose x: "+noseX);
    console.log("nose y: "+noseY);
    
  }
}
