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
var ValidPocketMon
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
  
  PocketMoney= Number(prompt('How much money do you have from 1-5?', PocketMoney))

  if(isNaN(PocketMoney) || PocketMoney == null || PocketMoney < 0 || PocketMoney > 5 ){
    ValidPocketMon= "no";
    while(ValidPocketMon="no"){
      if(isNaN(PocketMoney) || PocketMoney == null || PocketMoney < 0 || PocketMoney > 5 ){       
      PocketMoney= Number(prompt('Invalid Number', PocketMoney))
      }else{
        ValidPocketMon= "Okay";
      }
    }
  }
  
  
    while(ValidPocketMon="no"){
      if(isNaN(PocketMoney) || PocketMoney == null || PocketMoney < 0 || PocketMoney > 5 ){       
      PocketMoney= Number(prompt('Invalid Number', PocketMoney))
      }else{
        ValidPocketMon= "Okay";
      }
    }
  


}

function chocAfford() {
  if (PocketMoney >= 20){
    ChocolateAffordability= "You CAN afford TWO chocolate bars";
} else if (PocketMoney >= 10){
    ChocolateAffordability= "You CAN afford a chocolate bar";
} else {
    ChocolateAffordability= "Sorry you CAN'T afford a chocolate bar";
}
}

function programStart() {
    askUserName();
    askUserAge();
    askUserMoney();
    askUserNumbers();
}