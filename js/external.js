// console.log("Hello from external JavaScript!")
//
// alert("Welcome to my Website!");
//
// let color = prompt("What is your favorite color?");
// console.log(color)
// alert(("Great ") + color + (' is my favorite color too!'));
//
// //#3 on Working With Data Types, Operators, and Variables
// let daysOfLittleMermaid = prompt("How many days did you rent The Little Mermaid?");
// let daysOfBrotherBear = prompt("How many days did you rent Brother Bear?");
// let daysOfHercules = prompt( "How many days did you rent Hercules?");
//
// let totalCost = (daysOfLittleMermaid * 3) + (daysOfBrotherBear * 3) + (daysOfHercules * 3);
//
// alert("Your total rental cost is " + totalCost + " dollars");

// let hoursAtGoogle = prompt("How many hours did you work at Google?");
// let payAtGoogle = prompt( "What is you hourly pay rate at Google?");
// let hoursAtAmazon = prompt( "How many hours did you work at Amazon?");
// let payAtAmazon = prompt( "What is your hourly pay rate at Google?");
// let hoursAtFacebook = prompt("How many hours did you work at Facebook?");
// let payAtFacebook = prompt( "What is your hourly pay rate at Facebook?");
//
// let totalPay = hoursAtGoogle * payAtGoogle + hoursAtAmazon * payAtAmazon + payAtFacebook * payAtFacebook;
//
// alert("Your total pay is: " + totalPay + " dollars.");

// let classFull = confirm("Is the class ful?");
// let ScheduleConflit = confirm("Is there a scheduling conflict?");
//
// let canEnroll = !classFull && !ScheduleConflit;
//
// if (canEnroll){
//     alert("You can enroll")
// } else {
//     alert("You can't enroll")
// }

let numberOfItemsBought = prompt("How many items did the customer buy?");
let offerExpired = confirm("Has the offer expired?");
let premiumMember = confirm("Is the customer a premium member?");

let makeProductOffer = (premiumMember || numberOfItemsBought > 2) && !offerExpired;

if (makeProductOffer) {
    alert("You get a product offer!");
} else {
    alert("You are an inferior customer. You must be terminated.");
}