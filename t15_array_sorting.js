/****************************
 Task-15 Array Sorting
  Yuv Singh
  09/05/2025
The purpose of this is 
 ***************************/



console.log("Running t15_array_sorting.js");
console.log("H");

//Variables


var Name
var PocketMoney
var ChocolateAffordability=0;
var Age
var ValidName
var ValidAge
let chocArray = ["Mars Bar", "Moro Bar", "King Size Crunchy", "Dairy Milk Block", "Lindt Block"]
let priceArray = [2,2.50,3,6,7]
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
  
  PocketMoney= Number(prompt('How much money do you have from 1-10?', PocketMoney))

  if(isNaN(PocketMoney) || PocketMoney == null || PocketMoney < 0 || PocketMoney > 10 || PocketMoney == "" ){
    while(isNaN(PocketMoney) || PocketMoney == null || PocketMoney < 0 || PocketMoney > 10 || PocketMoney == "" ){
          
      PocketMoney= Number(prompt('Invalid Number', PocketMoney))
      
    }
  } 
  
if(PocketMoney >= priceArray[5]){
ChocolateAffordability= 5;
console.log(ChocolateAffordability);
}else if(PocketMoney >= priceArray[4]){
ChocolateAffordability= 4;
console.log(ChocolateAffordability);
}else if(PocketMoney >= priceArray[3]){
ChocolateAffordability= 3;
console.log(ChocolateAffordability);
}else if(PocketMoney >= priceArray[2]){
ChocolateAffordability= 2;
console.log(ChocolateAffordability);
}else if(PocketMoney >= priceArray[1]){
ChocolateAffordability= 1;
console.log(ChocolateAffordability);
}else{
  ChocolateAffordability= 0;
  console.log(ChocolateAffordability);
}
if(ChocolateAffordability > 0){
  alert("You can afford a " + chocArray[ChocolateAffordability] + " for the price of $" + priceArray[ChocolateAffordability])
  console.log("Afford");
}else{
  alert("You can't afford anything.")
  console.log("Not afford");
}
}



function programStart() {
    askUserName();
    askUserAge();
    askUserMoney();
}