for (var i=0;i<document.querySelectorAll(".bt").length;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    var buttonClicked = this.innerHTML;
    console.log(this);
    isClicked(buttonClicked);
  });
}

// for (var i=0;i<document.querySelectorAll(".bt").length;i++){
  document.addEventListener("keydown",function(event){
    isClicked(event.key);
  });

function isClicked(clicked){
  switch (clicked) {
    case "A":
      var tom1=new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;
    case "K":
      var tom2=new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;
    case "S":
      var tom3=new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;
    case "H":
      var tom4=new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;
    case "N":
      var crash=new Audio("sounds/crash.mp3");
      crash.play();
    break;
    case "R":
      var kick=new Audio("sounds/kick-bass.mp3");
      kick.play();
    break;
    case "Y":
      var sn=new Audio("sounds/snare.mp3");
      sn.play();
    break;
    case "W":
      var ww=new Audio("sounds/kick-bass.mp3");
      ww.play();
    break;
    default:alert("Invalid key");}}
