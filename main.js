function preload(){

}
function setup(){
    canvas = createCanvas(600,400);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();

    snap = "";
}
function take_snapshot(){
    save("snap.png");
}
function draw(){
    image(video,0,0,600,400);
}