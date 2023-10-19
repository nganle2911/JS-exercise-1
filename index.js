/**
 * TODO: 3-block Model - Exercise 1
 * Input:
 *  - salary per day
 *  - number of working days 
 * Logic Block:
 *  - Step 1: Create 2 variables for salary per day & number of working days
 *  - Step 2: Calculate salary with formula: salary per day * number of working days
 *  - Step 3: Print out the result 
 * Output: 
 *  - salary 
 */

function calculateSalary() {
    // Input salary per day & working days
    var salaryEl = document.getElementById("salary").value * 1;
    var workingDaysEl = document.getElementById("day").value * 1;
    console.log({ salaryEl, workingDaysEl });

    // Calculate salary 
    var salaryResult = salaryEl * workingDaysEl;

    // Display result
    document.getElementById("ex1-output").innerText = salaryResult;
};

/**
 * TODO: 3-block Model - Exercise 2 
 * Input: 
 *  - 5 numbers 
 * Logic Block:
 *  - Step 1: Create 5 variables for 5 numbers
 *  - Step 2: Calculate the average number with formula: (num1 + ... + num5) / 5
 *  - Step 3: Print out the result 
 * Output: 
 *  - the average number
 */

function calAverageNum() {
    // Input 5 numbers
    var num1El = document.getElementById("num1").value * 1;
    var num2El = document.getElementById("num2").value * 1;
    var num3El = document.getElementById("num3").value * 1;
    var num4El = document.getElementById("num4").value * 1;
    var num5El = document.getElementById("num5").value * 1;

    // Calculate the average number 
    var averageNum = (num1El + num2El + num3El + num4El + num5El) / 5; 

    // Display result
    document.getElementById("ex2-output").innerText = averageNum; 
}; 

/**
 * TODO: 3-block model - Exercise 3
 * Input:
 *  - amount of money in USD
 *  - exchange rate 1USD = 23500VND 
 * Logic Block:
 *  - Step 1: Create a constant of exchange rate 1 USD = 23500VND
 *  - Step 2: Create a variable for amount of money in USD
 *  - Step 3: Calculate money after converting from USD to VND with formula: amount of money in USD * exchange rate
 *  - Step 4: Print out the result 
 * Output:
 *  - converted money 
 */

function convertMoney() {
    // Constant of exchange rate 
    const EX_RATE = 23500;
    // Input amount 
    var amountEl = document.getElementById("amount").value * 1;

    // Calculate the converted amount 
    var convertedMoney = amountEl * EX_RATE; 

    // Print out the result 
    document.getElementById("ex3-output").innerText = convertedMoney; 
}; 