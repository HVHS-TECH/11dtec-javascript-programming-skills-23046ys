/****************************
 Task-04 Debugging
  Yuv Singh
  29/04/2025
The purpose of this is 
 ***************************/


console.log("Running t04_Debuggingjs");

//Variables

// Set up the size of the page.
var length = 8;
var width = 10

// calculate the area
var area = length * width;

// calculate the perimeter
var perimeter = length * 2 + width * 2; 

// Display the results
console.log("A area of a piece of paper with a length of ", length, ", and a width of ", width, " is ", area);
console.log("The same piece of paper has a perimeter of ", perimeter);

// Check, does this result look sensible
if (perimeter < area) {
    console.log("Yay, your area is larger, this is right for this example");
} else {
    console.log("Hmm, your perimeter is larger. It shouldn't be for this example")
}

/****************************
Main Code:
 ***************************/


/****************************
Functions
 ***************************/