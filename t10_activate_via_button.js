/****************************
 Task-09 Functions
  Yuv Singh
  09/05/2025
The purpose of this is 
 ***************************/

const { startTransition } = require("react");

console.log("Running t09_functions.js");
console.log("H");

//Variables
var UserNumber
var total= 0;
var Name
var PocketMoney
var ChocolateAffordability
var Age
/****************************
Main Code:
 ***************************/

/****************************
Functions
 ***************************/
function askUserName() {
Name= prompt('Welcome to my program ' + Name + '!\nPlease enter your name', Name);
}
function askUserAge() {
Age= prompt('Please enter your age', Age)
}
function askUserMoney() {
  PocketMoney= Number(prompt('How much money do you have?', PocketMoney))

if (PocketMoney >= 20){
    ChocolateAffordability= "You CAN afford TWO chocolate bars";
} else if (PocketMoney >= 10){
    ChocolateAffordability= "You CAN afford a chocolate bar";
} else {
    ChocolateAffordability= "Sorry you CAN'T afford a chocolate bar";
}
alert("Hi " + Name + ".\nI predict you were born in " + (2025 - Age) + ".\nYou have " + PocketMoney + " dollars.\n" + ChocolateAffordability
);
}
function askUserNumbers() {
  for (count = 0; count<5; count++) {
    UserNumber= Number(prompt("Pick a Number"))
    total= total + UserNumber;
}
console.log("Total: " + total)
alert("The total of the five numbers you picked is " + total)
}
function programStart() {
    askUserName();
    askUserAge();
    askUserMoney();
    askUserNumbers();
}