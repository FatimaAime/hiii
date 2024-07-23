var mouseEvent="empty";
var lastpositionofX,lastpositionofY;

canvas=
document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

color=" ";
width_of_line=0;
radius=0;

canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mouseleave";
}

canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mouseup";
}

canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    
     current_position_of_mouse_x=e.clientX - canvas.offsetLeft;
     current_position_of_mouse_y=e.clientY - canvas.offsetTop;

     if (mouseEvent == "mouseDown") {

        console.log("Current position of x and y coordinates");
        console.log("x = " + current_position_of_mouse_x + "y = "+ current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 , 2 * Math.PI);
        ctx.stroke();
     }



}

