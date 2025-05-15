/****************************
 Task-13 Validation
  Yuv Singh
  09/05/2025
The purpose of this is 
 ***************************/

const { startTransition } = require("react");

console.log("Running t13_validation.js");
console.log("H");

//Variables
var UserNumber
var total= 0;
var Name
var PocketMoney
var ChocolateAffordability
var Age
var ValidName
var ValidAge
/****************************
Main Code:
 ***************************/

/****************************
Functions
 ***************************/
function askUserName() {
Name= prompt('Welcome to my program ' + Name + '!\nPlease enter your name', Name);
if (!isNaN(Name) || Name == null || Name == "" || Name == " "){
ValidName= "Invalid";
while( ValidName == "Invalid"){
  Name= prompt('Invalid Name');
if (!isNaN(Name) || Name == null || Name == "" || Name == " "){
  alert("Invalid Name")
} else {
  ValidName= "Valid"
}
}
}
}
function askUserAge() {
Age= prompt('Please enter your age', Age)
if (isNaN(Age) || Age == null || Age <= 0 || Age > 100 ){
ValidAge= "Invalid";
while( ValidAge == "Invalid"){
  Age= prompt('Invalid Age');
if (isNaN(Age) || Age == null || Age <= 0 || Age > 100 ){
  alert("Invalid Age")
} else {
  ValidAge= "Valid"
}
}
}
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