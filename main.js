noseX = 0;
noseY = 0;
punto1X = 0;
punto1Y = 0;
punto2X = 0;
punto2Y = 0;

function preload() 
{
    nose = loadImage('clownnose.png')
    punto1 = loadImage('https://creazilla-store.fra1.digitaloceanspaces.com/emojis/54081/eye-emoji-clipart-md.png');
    punto2 = loadImage('https://creazilla-store.fra1.digitaloceanspaces.com/emojis/54081/eye-emoji-clipart-md.png');
    gorra = loadImage('gorra.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(658, 300);
  video = createCapture(VIDEO);
  video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function take_snapshot(){    
  save('myFilterImage.png');
}
function modelLoaded()
{
    console.log('poseNet esta inicialisado')
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        console.log('nariz x+ ' + results[0].pose.nose.x);
        console.log('nariz y+ ' + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
        punto1X = results[0].pose.leftEye.x-15;
        punto1Y = results[0].pose.leftEye.y-15;
        punto2X = results[0].pose.rightEye.x-15;
        punto2Y = results[0].pose.rightEye.y-15;
    }
}
function draw() {
    image(video,0,0,300,300);
    fill(250, 0, 0);
    stroke(255, 0, 0);
    image(nose, noseX, noseY, 30, 30);
    image(punto1, punto1X, punto1Y, 40, 40);
    image(punto2, punto2X, punto2Y, 40, 40);
    image(gorra, noseX-40, noseY-120, 110, 110);
    }