const btn = document.querySelector("#btnColor");
const colorSpan = document.querySelector(".color");
const colors = ["black","silver","gray","white","maroon","red","purple", "fuchsia","green","lime","olive","yellow","navy","blue","teal","aqua"];
const hex = ["1","2","3", "4", "5", "6", "7","8", "9","A", "B", "C", "D", "E", "F"];
const logo = document.querySelector("nav > h2");
function setSimpleColor() {
  // getting random simple color from array
  let color = colors[getRandomArrayIndex(colors)];
  //setting the color on chosen elements
  document.body.style.backgroundColor = color;
  colorSpan.style.color = color;
  colorSpan.textContent = color;
  logo.style = 'background: -webkit-linear-gradient(#eee,' +color+');-webkit-background-clip: text;';

  console.log("simple color flipper executed");
}

function setRandomHexColor(event) {
  let color = "#";
  // adding up 6 random digits of hex
  for(let digit = 0; digit < 6; digit++) {
    color += hex[getRandomArrayIndex(hex)];
  }
  console.log(color);
  // setting color on chosen elements
  document.body.style.backgroundColor = color;
  colorSpan.style.color = color;
  colorSpan.textContent = color;
  logo.style = 'background: -webkit-linear-gradient(#eee,' +color+');-webkit-background-clip: text;';

  console.log("hex func executed");

}


function getRandomArrayIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

//mode switches from simple flipper to hex flipper and vice versa
const simpleFlipper = document.querySelector(".simple");
const hexFlipper = document.querySelector(".hex");
//adding class to classList
simpleFlipper.addEventListener("click", function(event) {
  btn.classList.add("btnSimpleFlipper");
  btn.classList.remove("btnHexFlipper");
});

hexFlipper.addEventListener("click", function() {
  btn.classList.add("btnHexFlipper");
  btn.classList.remove("btnSimpleFlipper");
});

//higher function checking set mode by checking class attribute and executing proper function
function setColor(event) {
  console.log(event.target.classList);
 if(event.target.className.includes("btnSimpleFlipper")) {
  setSimpleColor();
 } else if(event.target.className.includes("btnHexFlipper")) {
  setRandomHexColor();
 } else {
  return;
 }
}
btn.addEventListener("click", setColor);