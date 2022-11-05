var canv = document.getElementById("canv");
var ctx = canv.getContext("2d");

var zero = document.getElementById("zero"); //path a
var A1 = document.getElementById("A1");
var A1_1 = document.getElementById("A1.1");
var A2 = document.getElementById("A2");
var A2_1 = document.getElementById("A2.1");
var A3 = document.getElementById("A3");
var A4 = document.getElementById("A4");
var A4_1 = document.getElementById("A4.1");
var A4_2 = document.getElementById("A4.2");
var A4_3 = document.getElementById("A4.3");
var A5 = document.getElementById("A5");
var A6 = document.getElementById("A6");
var A7 = document.getElementById("A7");
var A8 = document.getElementById("A8");
var A9 = document.getElementById("A9");
var A10 = document.getElementById("A10");
var A10_1 = document.getElementById("A10.1");
var A11 = document.getElementById("A11");
var A12 = document.getElementById("A12");
var A13 = document.getElementById("A13");

var B1 = document.getElementById("B1"); //path b
var B2 = document.getElementById("B2");
var B3 = document.getElementById("B3");
var B4 = document.getElementById("B4");
var B5 = document.getElementById("B5");

var C1 = document.getElementById("C1"); //path c lol

var M1 = document.getElementById("M1"); //manifesto staements
var M2 = document.getElementById("M2");
var M3 = document.getElementById("M3");
var M4 = document.getElementById("M4");

var Z1 = document.getElementById("Z1"); //art results
var Z2 = document.getElementById("Z2");
var Z3 = document.getElementById("Z3");
var Z4 = document.getElementById("Z4");

var Alist = [ A1, A1_1, A2, A2_1, M2, A3, A4, A4_1, A4_2, A4_3, A5, A6, A7, M3, A8, Z3, A9, A10, A10_1, M4, A11, A12, A13, Z4 ];
var Blist = [ B1, B2, B3, Z1, B4, M1, B5, Z2 ];

var thisbox = zero;
var lastbox = zero;

function canvsize(){ //resizes canvas to window
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight; 
}

function isinvis(thing){ //checks if inputted thing isinvisible
  return thing.classList.contains("invis")
}

function reveal(thing){ //reveals inputted thing
  thing.classList.replace("invis", "vis");
  thisbox = thing;
}

function place(event){ //picks a step
  
  var x = event.clientX; //position of mouseclick
  var y = event.clientY;

  if(x < 120 && y < 120 == true){ //if u clicked box zero do nothing
    return;
  }else{

    if(zero.classList.contains("pathA") == true){ //reveals path a in order

      for( i=0; i < Alist.length; i++){

        if (isinvis(Alist[i]) == true){
          lastbox = thisbox;
          reveal(Alist[i]);
          drawline(event);
          return; 
        }
      }

    }else if(zero.classList.contains("pathB") == true){ //reveals path b in order

      for( i=0; i < Blist.length; i++){

        if (isinvis(Blist[i]) == true){
          lastbox = thisbox;
          reveal(Blist[i]);
          drawline(event);
          return;
        }
      }

    }else if(zero.classList.contains("pathC") == true){ //reveals path c lol
      if(isinvis(C1) == true){
        reveal(C1);
        drawline(event);
      }
    }

  }
}

function drawline(event){ //draws lines on canvas

  var x = event.clientX; //position of the mouseclick
  var y = event.clientY;

  thisbox.style.top = y; //placing thisbox at mouseclick
  thisbox.style.left = x;

  var lastboxx = lastbox.style.left; //sets lastbox position
  var lastboxy = lastbox.style.top;

  ctx.strokeStyle = "#97B2F0"; //line style
  ctx.lineWidth = 4;

  if (thisbox.classList.contains("halfstep") == true || thisbox.classList.contains("boom") == true){ //do not draw lines on a halfstep or art or manifesto
    return; 
  }else{
    if(lastbox.id == "zero"){ //first click start point is box zero
      ctx.beginPath();
      ctx.moveTo(50,50);
    }else{ 
      ctx.moveTo(lastboxx, lastboxy); //draw the line from lastbox...
    }
    ctx.lineTo(x, y); //to current mouseclick
    ctx.stroke(); 
    
  } 
}

const S1 = document.getElementById("S1"); //sounds
const S2 = document.getElementById("S2");
const S3 = document.getElementById("S3");
const S4 = document.getElementById("S4");
const S5 = document.getElementById("S5");
const S6 = document.getElementById("S6");
const S7 = document.getElementById("S7");
const S8 = document.getElementById("S8");

const sounds = [S1, S2, S3, S4, S5, S6, S7, S8];

function ding(){ //dings

  var pos = Math.floor(Math.random() * 8);
  var ding = sounds[pos];
  ding.play();
}

function erase(){ //clears canvas

  var boxes = document.querySelectorAll(".vis");
  Array.from(boxes);
  boxes.forEach(box => box.classList.replace("vis", "invis"));

  ctx.closePath();  
  lastbox = zero;
  thisbox = zero;
  ctx.clearRect(0, 0, canv.width, canv.height);

  if(zero.classList.contains("pathA") == true){ //swap paths

    zero.classList.replace("pathA", "pathB");
    zero.innerHTML = "HOW TO MAKE ART? (HOME)";

  }else if(zero.classList.contains("pathB") == true){
    
    zero.classList.replace("pathB", "pathC");
    zero.innerHTML = "HOW TO MAKE ART? (WORK)";

  }else if(zero.classList.contains("pathC") == true){

    zero.classList.replace("pathC", "pathA");
    zero.innerHTML = "HOW TO MAKE ART? (SCHOOL)";
  }
}