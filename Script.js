const arr = [];
let click = [1, 1, 1, 1, 1, 1, 1,
 1, 1
];
let ans = [];
let lock = 0;
let elements = ["one", "two",
 "three", "four", "five",
 "six", "seven", "eight",
 "nine"
];
let mode="day";
let color=mode=="day"?"black":"white";
let turn = "0";
let count = 0;
let inter;
let idx = 0;
let i = 0;
const body = document
 .querySelector("body");
//heading
const head=document.createElement("h2");
 head.innerText="Tic Tac Toe";
 head.classList.add("heading"); 
 //container and buttons
 const container = document
 .createElement("div");
container.classList.add("container");
elements.forEach((elem)=>{
const divItem=document.createElement("div");
divItem.classList.add("item");
const buttonItem=document.createElement("button");
buttonItem.classList.add(elem);
divItem.appendChild(buttonItem);
container.appendChild(divItem);
});
//restart button
const reset = document
 .createElement("button");
 reset.classList.add("restart");
reset.innerText="restart"; 
const win = document
 .createElement("p");
 win.classList.add("win");
 win.innerText="Start the game";
 //toggle button
const toggle = document
 .createElement("div");
 const toggleContainer = document
 .createElement("div");
 const circle = document
 .createElement("div"); 
 toggle.classList.add("toggle");
 toggleContainer.classList.add("toggle-container");
 circle.classList.add("circle");
 toggle.appendChild(circle);
 toggleContainer.appendChild(toggle);
 //appending every element to body
 
body.appendChild(head);
body.appendChild(container);
body.appendChild(reset);
body.appendChild(win);
body.appendChild(toggleContainer);
//access buttons of tic tac toe
const buttons = document.querySelectorAll(
  '.container button');
  //Restart the game
reset.addEventListener("click",()=>{
 for (let i = 0; i < 9; i++) {
  arr[i] = "";
  click[i] = 1;
 }
 win.innerText =
  "Start the Game";
 count = 0;
 line = 1;
 i = 0;
 tie = 0;
 index = 0;
 ans = [];
 buttons.forEach((button) => {
  button.style.backgroundColor =
   "rgb(26,155,235)";
  button.innerText = "";
  button.style.borderColor =
   "rgb(26,155,235)";
 });
});
//check win condition
function check() {
 const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
 ];

 for (let [a, b, c] of
  winningConditions) {
  if (arr[a] && arr[a] === arr[
    b] && arr[a] === arr[c]) {
   return [a, b, c, arr[a]];
  }
 }
 return 0;
}
//change color of winning pattern buttons
function change() {
 if (idx >= ans.length) {
  clearInterval(inter);
  idx = 0;
  return;
 }
const element= document.querySelector(`.${elements[
   ans[idx]]}`);
   element.style
  .backgroundColor =
  "rgb(21,237,36)";
element.style.borderColor=color; 
 idx++;
}
//change color of buttons on draw
function draw() {
 if (i >= 9) {
  clearInterval(inter);
  return;
 }
 const element = document
  .querySelector(`.${elements[i]}`);
  element.style.borderColor =
  "#eb6e6e";
 element.style.backgroundColor =
  "#eb6e6e";
 i++;
}
//click on buttons 
buttons.forEach((button,
 index) => {
 button.addEventListener(
  'click',()=>{
  one(index);
  })
  });
  function one(index){
 if (click[index]){
  click[index] = 0;
  count++;
  const element = document
   .querySelector(`.${elements[
    index]}`);

  element.style.backgroundColor =
   "#0d7dde";
   element.style.borderColor =
   "#0d7dde";
  element.style.fontSize =
   "28px";

  if (turn == "0") {
   element.innerText = "X";
   arr[index] = "X";
   turn = "X";
   win.innerText =
    "Player 0's turn";
  } else {
   element.innerText = "0";
   arr[index] = "0";
   turn = "0";
   win.innerText =
    "Player X's turn";
  }
  if (check()) {
   ans = check();
   let last = ans[3];
   ans.pop();
   inter = setInterval(change,
    50);
   win.innerText =
    "Player " +
    last + " wins";
   for (let i = 0; i <
    9; i++) {
    click[i] = 0;
   }
   return;
  }
  if (count == 9) {
   win.innerText =
    "It's a draw!";
   inter = setInterval(draw,
    50);
  }
  return;
 }
}

//toggle day/nignt mode
toggle.addEventListener("click",()=> {
 mode=mode=="day"?"night":"day"; color=mode=="day"?"black":"white";
  document.body.classList
   .toggle(
    "dark-mode");
  container.classList.toggle(
   "dark");
  container.classList.toggle(
   "dark-container");
  win.classList.toggle(
   "dark-text");
  head.classList.toggle(
   "dark-head");
  reset.classList.toggle(
   "dark-reset");
   if(check())
   {
  inter= setInterval(change);
   }
 }
);
