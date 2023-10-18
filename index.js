/**
 * 3-block Model - Exercise 1
 * Input:
 *  - salary per day
 *  - number of working days 
 * Logic Block:
 *  - Step 1: Create 2 variables for salary per day & number of working days
 *  - Step 2: calculate salary with formula: salary = salary per day * number of working days
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
 * 3-block Model - Exercise 2 
 * Input: 
 * Logic Block:
 * Output: 
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


