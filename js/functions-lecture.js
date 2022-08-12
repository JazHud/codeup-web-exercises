//"use strict";
// The parts of a function
// 1. function keyword
// 2. The name of the function
// 3. Parentheses with zero or more parameters
// 4. If there is more than one parameter, the list is comma separated.
// 5. Curly braces contain the function body
// 6. The function body contains the code that runs when the function is invoked.
// 7. [optional but common] return statement
function sayHello(greeting, name) {
    return `${greeting}, ${name}`;
}

// //Error number is not defined. What happens in the function stays in the function. aka number has local scope
// function localOrGlobal(){
//     let number = 20;
// }
// console.log(number);

//No error: Example of number with global scope but not ideal.
// let number = 20;
// function localOrGlobal(){
//     console.log(number)
// }

//No error when both local and global is defined. Not good to depend on Global
// let number = 20;
// //function declarations
// function localOrGlobal() {
//     let number = 10;
//     console.log(number);
//     // vvv Took a global scope when not declared. but is a glitch (not proper) <-a reason to use or not "use strict" at the top of the pg.
//     anotherNumber = 23
// }
// localOrGlobal();
// console.log(number);
// console.log(anotherNumber)

// function expression::wont get hoisted hense the error
//bark();
//
// const bark = function(){
//     console.log("woof");
// }
//
// //function declaration are hoisted so no error.
// yap();
//
// function yap(){
//     console.log("yip yip");
// }

// //function declaration (stick to these while learning)
// function add(num1, num2){
//     return num1 + num2;
// }
//
// //function expression
//
// const add = function(num1, num2){
//     return num1 + num2;
// }

//arrow function do not get hoisted: don't need curly braces, define the function(anonymous function), and does not need return statement if it only returns (no more than one line aka not a sequence). if {} are used then need to use return or console.log,
const add = (num1, num2) => num1 + num2;

//if there is only one parameter, you dont need ().
const addTen = number => number +10;

// if you have no parameters, you used empty parentheses
const helloWorld = () => "Hello World";