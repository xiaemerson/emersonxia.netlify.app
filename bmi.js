/*
New Perspectives on HTML5 and CSS3, 7th Edition
Assignment 6
Author: Emerson Xia
Date: 03/10/2020
Filename: bmi.js
*/

"use strict";
function BMICalculate()
{
///get height in feet, height in inches, weight from form and store in 3 variables feet, inches, weight
    
var weight = document.getElementById('weight').value;
var feet = document.getElementById('heightft').value;
var inches = document.getElementById('heightin').value;
    
//convert height in feet and inches to total inches and store in another variable height

var height = (feet*12) + (inches*1);
     
//calculate bmi using the formula, store in a variable called bmi

var bmi = weight * 703 / Math.pow(height, 2);
    
//display bmi on the html page

document.getElementById("msg").innerHTML = "BMI:" + " " + bmi;
}

//Clear function that "clears" all the elements on the page

function BMIClear()
{
document.getElementById("weight").value = "";
document.getElementById("heightft").value = "";
document.getElementById("heightin").value = "";
document.getElementById("msg").innerHTML = "BMI:";
}

