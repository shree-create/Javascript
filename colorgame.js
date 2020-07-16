var numsquares=6;
var colors=generateRandomColor(numsquares);

var squares=document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var colorDisplay=document.querySelector("#colordisplay");
var messagedisplay=document.querySelector("#message");
var header=document.querySelector("h1");
var resetbtn=document.querySelector("#reset");
var modebtns=document.querySelectorAll(".mode");

for(var i=0;i<modebtns.length;i++){
    modebtns[i].addEventListener("click",function(){
    modebtns[0].classList.remove("selected");
    modebtns[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? numsquares = 3: numsquares = 6;
    reset();
  });
}

function reset(){
    colors=generateRandomColor(numsquares);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    resetbtn.textContent="New Colors";
    messagedisplay.textContent="";
    for(var i=0;i<squares.length;i++){
      if(colors[i]){
          squares[i].style.display="block";
          squares[i].style.backgroundColor=colors[i];
      }else{
          squares[i].style.display="none";
      }
    }
    header.style.background="steelblue";
}


colordisplay.textContent=pickedcolor;

resetbtn.addEventListener("click",function(){
  reset();
})

for(var i=0;i < squares.length; i++){
  //add inintial color to the squares
  squares[i].style.backgroundColor=colors[i];
  //add click listener to squares
  squares[i].addEventListener("click",function(){
  //grab the color of the clicked squares
  var clickedcolor=this.style.backgroundColor;
  if(clickedcolor===pickedcolor)
  {
    messagedisplay.textContent="Correct!";
    changecolor(clickedcolor);
    resetbtn.textContent="Play Again?";
  }else{
    this.style.backgroundColor="#232323";
    messagedisplay.textContent="Try Again";
  }
  //compare color to picked color
  });
}


function changecolor(color){
  for(var i=0; i < squares.length;i++){
    squares[i].style.backgroundColor=color;
  }
    header.style.backgroundColor=color;
}


function pickcolor(){
  var random=Math.floor(Math.random()*colors.length);
  return colors[random];
}

function generateRandomColor(num){
  var arr=[];
  for(var i=0;i<num ;i++){
      arr.push(Randomcolor());
  }
  return arr;
}

function Randomcolor(){
  var r=Math.floor(Math.random()*256);
  var g=Math.floor(Math.random()*256);
  var b=Math.floor(Math.random()*256);
  return "rgb("+ r + ", " + g + ", "+ b +")";
}
