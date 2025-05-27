/****************************
 Task-14 Constants
  Yuv Singh
  09/05/2025
The purpose of this is 
 ***************************/

const { startTransition } = require("react");

console.log("Running t14_constants.js");
console.log("H");

//Variables
const lindtBlock= 5;
const dairyBlock= 4;
const kingCrunch= 3;
const moroBar= 2;
const marioBar= 1;

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
if (isNaN(Age) || Age == null || Age <= 0 || Age > 100 || Age == "" ){
ValidAge= "Invalid";
while( ValidAge == "Invalid"){
  Age= prompt('Invalid Age');
if (isNaN(Age) || Age == null || Age <= 0 || Age > 100 || Age == "" ){
  alert("Invalid Age")
} else {
  ValidAge= "Valid"
}
}
}
}
function askUserMoney() {
  
  PocketMoney= Number(prompt('How much money do you have from 1-5?', PocketMoney))

  if(isNaN(PocketMoney) || PocketMoney == null || PocketMoney < 0 || PocketMoney > 5 || PocketMoney == "" ){
    while(isNaN(PocketMoney) || PocketMoney == null || PocketMoney < 0 || PocketMoney > 5 || PocketMoney == "" ){
          
      PocketMoney= Number(prompt('Invalid Number', PocketMoney))
      
    }
  } 
if (PocketMoney = lindtBlock){
    ChocolateAffordability= "You can afford a lindt block";
} else if (PocketMoney <= dairyBlock){
    ChocolateAffordability= "You can afford a dairy milk block";
} else if (PocketMoney <= kingCrunch){
    ChocolateAffordability= "You can afford a king size crunchy"
} else if (PocketMoney <= moroBar){
    ChocolateAffordability= "You can afford a moro bar"
} else if (PocketMoney <= marioBar){
    ChocolateAffordability= "You can afford a mars bar"
} else {
    ChocolateAffordability= "Sorry you cannot afford a chocolate bar";
}
alert(ChocolateAffordability)

  
  
  

}



function programStart() {
    askUserName();
    askUserAge();
    askUserMoney();
    askUserNumbers();
}