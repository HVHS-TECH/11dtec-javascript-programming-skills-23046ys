/****************************
 Task-06 Arrays
  Yuv Singh
  06/05/2025
The purpose of this task is 
 ***************************/

console.log("Running t06_arrays.js");
console.log("H");

//Variables
var Name= "El";
var Age= 3;
var PocketMoney= 20;
let scaleArray=["You loathe bread","You dislike bread","You like bread","You love bread"]
var Choice= 2;

/****************************
Main Code:
 ***************************/

Name= prompt('Welcome to my program ' + Name + '!\nPlease enter your name', Name);
Age= prompt('Please enter your age', Age)
PocketMoney= Number(prompt('How much money do you have?', PocketMoney))

alert("Hi " + Name + "! \nAs of now you are " + Age + " years old. \nYou were born in " + ( 2025 - Age ) + "\nYou have " + PocketMoney + " dollars. \nHalf of your money is " + (PocketMoney / 2) )
console.log("Hi", Name)
console.log("As of now you are", Age, "years old")
console.log("You were born in", 2025 - Age)
console.log("You have", PocketMoney, "dollars")
console.log("Half of your money is", PocketMoney / 2)

Choice= Number(prompt("On a scale of 0-3 how much do you like bread?"))
alert(scaleArray[Choice]);
/****************************
Functions
 ***************************/