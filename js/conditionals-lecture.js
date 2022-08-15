
//
// let flavor = prompt("Welcome to Codupe ice cream. What flavor do you want");
// ///statements are case sensitive
// flavor = flavor.toLowerCase();
//
// if (flavor === "chocolate") {
//     alert("One choloate coming right up!")
// } else if (flavor === "vanilla"){
//     alert("One vanilla coming right up!");
// } else {
//     alert("We do not have that flavor. Sorry! :(");
// }

//////////above equals below and is also case sensitive////////////////

// switch (flavor) {
//     case ("choloate"):
//         alert("One chocolate coming right up!");
//         break;
//     case("vanilla"):
//         alert("One vanilla coming right up!");
//         break;
//     case("strawberry"):
//         alert("One strawberry coming right up!");
//         break;
//     default:
//         alert("We do not have that flavor. Sorry! :(");
//         break;
// }

let decision = confirm("Are you sure you want to close this page?");
alert(decision);
//// confirms return true or false//
if (decision) {
    alert("OK, closing the page.");
} else {
    alert("Ok, keeping page open.");
}

//shorthand for above is below

//(decision)?alert("Closing the page"):alert("Keeping page open.");
//// is like the "if" and the ":" is like the else in an IF ELSE statement"///

//let number = prompt( "Enter a number") or can use divisibleByFive(number) but divisibleByFive(prompt("Enter a number.") is cleaner


// function divisibleByFive(number){
//     if (number % 5 === 0){
//         alert("That number is divisible by 5");
//     } else {
//         alert("That number is not divisble by 5");
//     }
// }
//
// divisibleByFive(prompt( "Enter a number"));

//=================equals below===============

// function divisibleByFive(number){
//     number % 5 === 0 ? alert("That number is divisible by 5") :
//         alert("That number is not divisible by 5");
// }
//
//     divisibleByFive(prompt( "Enter a number"));

// function divisibleByFive(number){
//     alert(number % 5 === 0 ? "that number is divisible by 5" : "That number is not divisible by 5");
// }
//
//     divisibleByFive(prompt( "Enter a number"));

////and empty string = 0 so if you hit cancel from prompt it will say that number is divisible by 5  solution below vvvvvvvvvv
///if (number % 5 === 0 && number !== null && number !== "")

// function alertMVPCustomer(purchaseTotal){
//     if (purchaseTotal > 1000){
//         alert("MVP")
//     }
// }
//
// alertMVPCustomer(1001);

////////above equal to below/////////

function isMVP(purchaseTotal){
    return purchaseTotal > 1000;
}

let customer1purchase = 1001;

if(isMVP(customer1purchase)){
    alert("MVP!");
}