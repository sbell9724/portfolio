/*
*Author: Solomon Bell <somibell@ucsc.edu>
*Created: 8 February
*License: Public Domain
*/

function firstFruit(test) {
  console.log(test + ": This is the first fruit.</br>")
}

function secondFruit(test) {
  console.log(test + ": This is the second fruit.</br>")
}

function thirdFruit(test) {
  console.log(test + ": This is the third fruit.</br>")
}

//Test 1: Checking the console.log
firstFruit("Fruits");
secondFruit("Fruits");
thirdFruit("Fruits");

//Test 2: Checking the order of fruits
setTimeout(function() {
  firstFruit("Apples");
}, 0);

setTimeout(function() {
  secondFruit("Oranges");
}, 0);

setTimeout(function() {
  thirdFruit("Grapes");
}, 0);

//Test 3: Changing the timing of fruits
setTimeout(function() {
  firstFruit("Apples");
}, 3000);

setTimeout(function() {
  secondFruit("Oranges");
}, 1000);

setTimeout(function() {
  thirdFruit("Grapes");
}, 2000);
