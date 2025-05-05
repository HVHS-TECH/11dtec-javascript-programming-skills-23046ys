/****************************
 Task-05 Alerts and Prompts
  Yuv Singh
  29/04/2025
The purpose of this task is 
 ***************************/

console.log("Running t05_alerts_prompts.js");
console.log("H");

//Variables
var Name= "El";
var Age= 3;
var PocketMoney= 20;

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

/****************************
Functions
 ***************************/