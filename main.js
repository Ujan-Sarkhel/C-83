canvas = document.getElementById("myCanvas")
mouseEvent = ""
ctx = canvas.getContext("2d")

var last_position_of_x, last_position_of_y
color = "red"
lineWidth = 2

var current_position_of_x, current_position_of_y

canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(e) {
    // Additional Activity
    color=document.getElementById("colour").value 
    lineWidth=document.getElementById("width").value
    // Additional Activity End
    mouseEvent = "mouseDown"
}

canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup(e) {
    mouseEvent = "mouseUP"
}

canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e) {
    mouseEvent = "mouseleave"
}

canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e) {
    current_position_of_x = e.clientX - canvas.offsetLeft
    current_position_of_y = e.clientY - canvas.offsetTop

    if (mouseEvent == "mouseDown") {
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = lineWidth
        console.log("Current postion of mouseX ="+ current_position_of_x + ", current postion of mouse Y = "+ current_position_of_y)
        ctx.moveTo(last_position_of_x, last_position_of_y)
        console.log("Last postion of mouseX ="+ last_position_of_x + ", last postion of mouse Y = "+ last_position_of_y)
        ctx.lineTo(current_position_of_x, current_position_of_y)
        ctx.stroke()   
        
    }
    last_position_of_x=current_position_of_x
    last_position_of_y=current_position_of_y
}


function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}


