window.onload=function(){
    var canvas=document.getElementById("circle");
    var context=canvas.getContext("2d");
    context.arc(200,470,30,0,2*Math.PI,false);
    
    context.fillStyle="#FFFF00";
    context.fill();
    context.lineWidth=5;
    context.strokeStyle="black";
    context.stroke();
    
    
};
var x=50;
var y=500;
var speed=10;
var speedY=5;


var update= function(){

while(y>=0){

var speedY=1;
y+=speedY
};
}

var draw=function(){
    
    ctx.fillStyle="#fff000";
    ctx.fill();
    context.beginPath();
      context.clearRect(x - 29, y - 29, 62,62);

context.closePath();

}
var step=function(){
    update();
    draw();
    window.requestAnimationFrame(step);
}
  step();

