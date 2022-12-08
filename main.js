canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")

nasa_mars_images_array=["coolPic1.jpg","coolPic2","coolPic3","coolPic4"]

random_number = Math.floor(Math.random() * 4);
 console.log(random_number);
  rover_width = 100;
  rover_height = 90;
  
  background_image = nasa_mars_images_array[random_number];
   console.log("background_image = " + background_image);
   rover_image = "rover.png";



rover_x = 10;
rover_y = 10;



function add(){ 
background_imgTag = new Image();
background_imgTag.onload = uploadbackground;
background_imgTag.src = background_image;

rover_imgTag = new Image();
rover_imgTag.onload = uploadrover;
rover_imgTag.src = rover_image;
}
function uploadbackground(){                                                                                       

ctx.drawImage(background_imgTag , 0, 0, canvas.width , canvas.height);

}


function uploadrover(){                                                                                       

    ctx.drawImage(rover_imgTag , rover_x , rover_y , rover_width , rover_height);
    
    }

    window.addEventListener("keydown",my_keydown);

    function my_keydown(e){    
        
        keyPressed = e.keyCode;
        console.log(keyPressed);

if(keyPressed == '38')
{
up();
console.log("up");

}
if(keyPressed == '40')
{
down();
console.log("down");

}
if(keyPressed == '37')
{
left();
console.log("left");

}  
if(keyPressed == '39')
{
right();
console.log("right");

}
    


}
function up()
{

if(rover_y >= 0)
{
rover_y = rover_y - 10;
console.log("when up is pressed, x =" + rover_x + "and y= " +rover_y);
uploadbackground();
uploadrover();
}

}


function down()
{

if(rover_y <= 500)
{
rover_y = rover_y + 10;
console.log("when down is pressed, x =" + rover_x + "and y= " +rover_y);
uploadbackground();
uploadrover();
}

}


function left()
{

if(rover_x >= 0)
{
rover_x = rover_x - 10;
console.log("when left is pressed, x =" + rover_x + "and y= " +rover_y);
uploadbackground();
uploadrover();
}

}


function right()
{

if(rover_x <= 700)
{
rover_x = rover_x + 10;
console.log("when right is pressed, x =" + rover_x + "and y= " +rover_y);
uploadbackground();
uploadrover();
}

}

