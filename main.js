var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var lastPositionOfX, lastPositionOfY;
var color = "black";
var widthOfLine = 4;
var width = screen.width;
var newWidth = width-70;
var newHeight = screen.height-300;
if (width<992) {
    canvas.width=newWidth;
    canvas.height=newHeight;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e) {
lastPositionOfX=e.touches[0].clientX -canvas.offsetLeft;
lastPositionOfY=e.touches[0].clientY -canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e) {
 var currentPositionOf_x =e.touches[0].clientX -canvas.offsetLeft;
 var currentPositionOf_y =e.touches[0].clientY -canvas.offsetTop;
     ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = widthOfLine;
ctx.moveTo(lastPositionOfX,lastPositionOfY);
ctx.lineTo(currentPositionOf_x,currentPositionOf_y);
ctx.stroke();
 lastPositionOfX=currentPositionOf_x;
 lastPositionOfY=currentPositionOf_y;
}
