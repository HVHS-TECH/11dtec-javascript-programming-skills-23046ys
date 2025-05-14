/****************************
 Task-12 WHile Loops
  Yuv Singh
  29/04/2025
The purpose of this is be a template for all the pages
 ***************************/

console.log("Running t12_while_loops.js");
console.log("H");

//Variables
var Question= "Y"
var Confirm
/****************************
Main Code:
 ***************************/
while( Question !="N" ) {
    Question= prompt("Do you want the loop to continue? Answer N for No.");
   if ( Question !="N") {
    alert("Loop will continue.")
} else {
    alert("Loop will not continue.")
}
}

while( confirm("Do you want the loop to continue?") != false ){
    confirm("Do you want the loop to continue?");
    if ( confirm("Do you want the loop to continue?") == true ) {
    alert("Loop will continue.")
} 
}
      alert("Loop will not continue.")
/****************************
Functions
 ***************************/