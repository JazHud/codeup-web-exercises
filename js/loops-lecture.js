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

let number = 5;
while (number < 200){
    //number = number * 2;
    number *= 2;
    console.log(number);
}
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
let total = 0;
let priceOfItem;
while (true){
    let userInput = prompt(" Enter the price of your item:" +
                            "\n Enter STOP when you are done");
    if(userInput === "STOP") {
        alert("Your final is now $" + total.toFixed(2));
        break;
    } else {
        priceOfItem = parseFloat(userInput);
        total = total + priceOfItem;
        alert("Your total is " + total.toFixed(2));
    }
}

