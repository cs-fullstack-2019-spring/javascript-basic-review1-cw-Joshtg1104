// #### Exercise 5
// Write a JavaScript program that does the following:
// * Prompts the User to enter their outstanding loan amount as a number (```LOANAMT```)
// * Prompts the User to enter the number of months in which they want to pay off the loan (```NUMMONTHS```)
// * Calculates the monthly payment they need to make and logs it to the console as
// ```To pay of a loan of LOANAMT it will take NUMMONTHS months```
//
// #### BONUS: Keep prompting until the User actually enters a number for both loan amount and number of months
// (HINT: Look into using ```NaN```)

var LOANAMT = parseInt(prompt("Enter Outstanding Loan Amount"));
var NUMMONTHS = parseInt(prompt("Enter Number of Months You want to Pay Off Loan"));
var MONTHPAY = LOANAMT / NUMMONTHS;
console.log("To pay off loan of " + LOANAMT + " it will take " + MONTHPAY + " per month.");