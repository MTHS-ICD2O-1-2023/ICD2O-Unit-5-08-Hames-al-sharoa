// Copyright (c) hames al sharoa All rights reserved
//
// Created by: hames al sharoa 
// Created on: may 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-08-JS/sw.js", {
    scope: "/ICS2O-Unit5-08-JS/",
  })
}

/**
 * This function calculates the quotient of the user's division problem using subtraction.
 */
function myButtonClicked() {
  const num1 = parseInt(document.getElementById("number1").value)
  const num2 = parseInt(document.getElementById("number2").value)
  let counter = 0
  let remainder = num1

  if (num1 > 0 && num2 > 0) {
    while (remainder + 1 > num2) {
      remainder -= num2
      counter++
    }
    document.getElementById("difference").innerHTML =
      num1 + " ÷ " + num2 + " = " + counter + " R " + remainder
  } else {
    document.getElementById("difference").innerHTML =
      "Uh oh- only enter positive numbers above 0, thanks!"
  }
}