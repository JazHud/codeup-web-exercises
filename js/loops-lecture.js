//
// let slices = 4;
// console.log(`There are ${slices}`);
// while (slices > 0) {
//     console.log("I'll have a slice");
//     slices = slices - 1;
//     console.log(`Now there's ${slices} left`);
// }
// console.log("No more pizza.");

// let counter = 0;
// while (counter <= 100){
//     console.log(counter)
//     counter++;
// }
// ^^^^^^counts to 100

// let counter = 100;
// while (counter >= 0){
//     console.log(counter);
//     counter--;
// }
// ^^^^counts down from 100

// let number = 5;
// while (number < 200){
//     //number = number * 2;
//     number *= 2;
//     console.log(number);
// }
/// when console.log(number) is above the equation it wont compute past 200 and will include original number


// vvvv---------------Puesdo Code____________vvvv
//Ask a user for input -- how much does something cost

// Assign the user input to a variable

//Declare a variable to hold the total cost

//Tell the user what the total is

//get the user input for the next item's cost

//There needs to be a way for the user to say when there's no more items


// //vvvvvvvv-------------rough draft/find bugs---------vvvvvvvv
// let total = 0;
// let priceOfItem = parseFloat(prompt("Enter the price of your item"));
// total = total + priceOfItem;
// alert("Your total is now $" + total);
//
// ////vvvvvv--------------------first draft but UGLY-------------vvvvv
// let userInput == "";
// while(userInput !== "stop"){
//     userInput = prompt("Enter the price of your item");
//     if (userInput === "stop"){
//         alert("Your final is now $" + total);
//     } else {
//         priceOfItem = parseFloat(userInput);
//         total = total + priceOfItem;
//         alert("You total is now $" + total);
//
// let total = 0;
// let priceOfItem;
// while (true){
//     let userInput = prompt(" Enter the price of your item:" +
//                             "\n Enter STOP when you are done");
//     if(userInput === "STOP") {
//         alert("Your final is now $" + total.toFixed(2));
//         break;
//     } else {
//         priceOfItem = parseFloat(userInput);
//         total = total + priceOfItem;
//         alert("Your total is " + total.toFixed(2));
//     }
// }


//vvvvvv------------------Do while loops----------------vvvvv

// let number = Math.ceil(Math.random() *6);
// let guess;
// console.log(guess);
// do {
//     guess = parseInt(prompt("Enter a number a number between 1 and 6"));
// } while (guess !== number);
// alert(`Your guess of ${guess} matches the number ${guess}!`);

////-vvvvvvvv------------------------For Loops lecture-----------------vvvvvvvv
//////for loops are shorthands for while loops
//
// //this is the loop control variable
// //initialize it to a starting value <MUST
// let count = 100;
// // check the value of th eloop control variable in a conditional test <MUST
// while (count >= 0){
//     console.log(count);
// // change the value of the loop control variable <MUST
//     count = count - 1;
// }
//
// for(let count = 100; count >= 0; count = count -1){
//     console.log(count);
// }
//
// //// i = count or whatever var name
//
// for (let i = 100; i >= 0; i--){
//     console.log(count);
//}
//
// let i = 0;
// while (i < 100){
//     console.log(i);
//     i++;
// }
//
// console.log("Outside the loop: " + i);
//
// let i = 0;
// while (i < 100){
//     i++;
//     console.log(i);
// }
//
// console.log("Inside the loop: " + i);
// //technically dont loose 0 it is incremented before hand


//cant alter the last incremented number as in while loop;
for (let i =0; i < 100; i++){
    console.log(i);
}