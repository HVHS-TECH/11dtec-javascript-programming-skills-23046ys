/****************************
 Task-08 The for loop
  Yuv Singh
  08/05/2025
The purpose of this is 
 ***************************/

console.log("Running t08_for_loop.js");
console.log("H");

//Variables
var UserNumber
var total= 0;
for (count = 0; count<5; count++) {
    UserNumber= Number(prompt("Pick a Number"))
    total= total + UserNumber;
}
console.log("Total: " + total)
alert("The total of the five numbers you picked is " + total)

/****************************
Main Code:
 ***************************/


/****************************
Functions
 ***************************/