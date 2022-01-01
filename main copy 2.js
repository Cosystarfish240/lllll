img = "";
status = "";

function preload(){
    img = loadImage('L.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
   objectDetector = ml5.objectDetector('cocssd', modelLoaded);
   document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function draw(){
    image (img,0,0, 640, 420);
    fill("#FF0000")
    text("Car", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 550, 350);
}
function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}
