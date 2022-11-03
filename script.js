var canv = document.getElementById("canv");
var ctx = canv.getContext("2d");

var zero = document.getElementById("zero"); //ALL 20 STEPS OF PATH A NOT INCLUDING ART
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

var B1 = document.getElementById("B1"); //ALL 5 STEPS OF PATH B NOT INCLUDING ART
var B2 = document.getElementById("B2");
var B3 = document.getElementById("B3");
var B4 = document.getElementById("B4");
var B5 = document.getElementById("B5");

var C1 = document.getElementById("C1"); //PATH C LOL

var M1 = document.getElementById("M1"); //ALL MANIFESTO STAEMENTS
var M2 = document.getElementById("M2");
var M3 = document.getElementById("M3");
var M4 = document.getElementById("M4");

var Z1 = document.getElementById("Z1"); //ALL ART RESULTS
var Z2 = document.getElementById("Z2");
var Z3 = document.getElementById("Z3");
var Z4 = document.getElementById("Z4");

var thisbox = zero;
var lastbox = zero;

function canvsize(){    //RESIZES CANVAS TO WINDOW
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight; 
}

function isinvis(thing){    //CHECKS IF INPUTTED THING IS INVISIBLE
  return thing.classList.contains("invis")
}

function reveal(thing){   //REVEALS INPUTTED THING
  thing.classList.remove("invis");
  thing.classList.add("vis");
  thisbox = thing;
}

function place(event){
  
  var x = event.clientX; //POSITION OF THE MOUSECLICK
  var y = event.clientY;

  if(x < 120 && y < 120 == true){ //IF U CLICKED BOX ZERO DO NOTHING
    return;
  }else{

    if(zero.classList.contains("pathA") == true){ //REVEALS PATH A IN ORDER
      if(isinvis(A1) == true){
        reveal(A1);
        lastbox = zero;
      }else if (isinvis(A1_1) == true){
        reveal(A1_1)
        lastbox = A1;
      }else if (isinvis(A2) == true){
        reveal(A2);
      }else if (isinvis(A2_1) == true){
        reveal(A2_1);
        lastbox = A2;
      }else if (isinvis(M2) == true){
        reveal(M2);
      }else if (isinvis(A3) == true){
        reveal(A3);
      }else if (isinvis(A4) == true){
        reveal(A4);
        lastbox = A3;
      }else if (isinvis(A4_1) == true){
        reveal(A4_1);
        lastbox = A4;
      }else if (isinvis(A4_2) == true){
        reveal(A4_2);
      }else if (isinvis(A4_3) == true){
        reveal(A4_3);
      }else if (isinvis(A5) == true){
        reveal(A5);
        lastbox = A4;
      }else if (isinvis(A6) == true){
        reveal(A6);
        lastbox = A5;
      }else if (isinvis(A7) == true){
        reveal(A7);
        lastbox = A6;
      }else if (isinvis(M3) == true){
        reveal(M3);
      }else if (isinvis(A8) == true){
        reveal(A8);
        lastbox = A7;
      }else if (isinvis(Z3) == true){
        reveal(Z3);
        lastbox = A8;
      }else if (isinvis(A9) == true){
        reveal(A9);
      }else if (isinvis(A10) == true){
        reveal(A10);
        lastbox = A9;
      }else if (isinvis(A10_1) == true){
        reveal(A10_1);
      }else if (isinvis(M4) == true){
        reveal(M4);
      }else if (isinvis(A11) == true){
        reveal(A11);
        lastbox = A10;
      }else if (isinvis(A12) == true){
        reveal(A12);
        lastbox = A11;
      }else if (isinvis(A13) == true){
        reveal(A13);
        lastbox = A12;
      }else if (isinvis(Z4) == true){
        reveal(Z4);
        lastbox = A13;
      }
    }else if(zero.classList.contains("pathB") == true){ //REVEALS PATH B IN ORDER
      if(isinvis(B1) == true){
        reveal(B1);
        lastbox = zero;
      }else if(isinvis(B2) == true){
        reveal(B2);
        lastbox = B1;
      }else if(isinvis(B3) == true){
        reveal(B3);
        lastbox = B2;
      }else if(isinvis(Z1) == true){
        reveal(Z1);
        lastbox = B3;
      }else if(isinvis(B4) == true){
        reveal(B4);
      }else if(isinvis(M1) == true){
        reveal(M1);
        lastbox = B4;
      }else if(isinvis(B5) == true){
        reveal(B5);
      }else if(isinvis(Z2) == true){
        reveal(Z2);
        lastbox = B5;
      }
    }else if(zero.classList.contains("pathC") == true){ //REVEALS PATHC LOL
      if(isinvis(C1) == true){
        reveal(C1);
      }
    }

    // DRAWS LINES AND DETERMINES POSITION OF BOX
    thisbox.style.top = y - 50; //PLACING THISBOX AT THE MOUSECLICK
    thisbox.style.left = x - 50;

    var lastboxx = lastbox.style.left; //DEFINING LAST BOX POSITION
    var lastboxy = lastbox.style.top;

    //LINE STYLE
    ctx.strokeStyle = "#97B2F0";
    ctx.lineWidth = 4;

    if (thisbox.classList.contains("halfstep") == true || thisbox.classList.contains("boom") == true){
      return; //HALF STEP OR BOOM DO NOTHING
    }else{
      if(lastbox.id == "zero"){ //FIRST CLICK START POINT IS BOX ZERO
        ctx.beginPath();
        ctx.moveTo(50,50);
      }else{ 
        ctx.moveTo(lastboxx, lastboxy); //DRAW THE LINE FROM LAST BOX--
      }
      ctx.lineTo(x, y); //--TO CURRENT MOUSECLICK
      ctx.stroke();
    }
  }
}

const S1 = document.getElementById("S1");
const S2 = document.getElementById("S2");
const S3 = document.getElementById("S3");
const S4 = document.getElementById("S4");
const S5 = document.getElementById("S5");
const S6 = document.getElementById("S6");
const S7 = document.getElementById("S7");
const S8 = document.getElementById("S8");

const sounds = [S1, S2, S3, S4, S5, S6, S7, S8];

function ding(){

  var pos = Math.floor(Math.random() * 9);
  var ding = sounds[pos];

  ding.play();
}

function erase(){

  var boxes = document.querySelectorAll(".vis");
  Array.from(boxes);

  boxes.forEach(box => box.classList.remove("vis"));
  boxes.forEach(box => box.classList.add("invis"));

  ctx.clearRect(0, 0, canv.width, canv.height);

  if(zero.classList.contains("pathA") == true){
    zero.classList.remove("pathA");
    zero.classList.add("pathB");
    zero.innerHTML = "HOW TO<br>MAKE ART?<br>(HOME)";
  }else if(zero.classList.contains("pathB") == true){
    zero.classList.remove("pathB");
    zero.classList.add("pathC");
    zero.innerHTML = "HOW TO<br>MAKE ART?<br>(WORK)";
  }else if(zero.classList.contains("pathC") == true){
    zero.classList.remove("pathC");
    zero.classList.add("pathA");
    zero.innerHTML = "HOW TO<br>MAKE ART?<br>(SCHOOL)";
  }

}

function cpyrt(){
  var bruhg = window.innerHeight;
  document.getElementById("copyright").style.top = bruhg - 30;
}