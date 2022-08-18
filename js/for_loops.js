// function showMultiplicationTable(){
//     let number = prompt("Enter a number:");
//     for(let multiplier = 1; multiplier <= 10; multiplier++) {
//         console.log(`${number}  x  ${multiplier} = ${multiplier * number}`);
//     }
// }
// showMultiplicationTable();
//
// for (let i = 0; i < 10; i++) {
//     let randomNum = Math.floor(Math.random() * 181) + 20;
//     if (randomNum % 2 === 0) {
//         console.log(randomNum + " is even");
//     } else {
//         console.log(randomNum + " is odd");
//     }
// }
//

//
// for (let i = 1; i <= 9; i++){
//     console.log(i.toString().repeat(i));
// }

///vvvvvvvvv_____while loop same as above__________vvvvvvvvv
//
// for(let i = 1; i <= 9; i++) {
//     let count = 0
//     let outputString = "";
//     while (count < number) {
//         outputString = outputString + number;
//         count++;
//     }
//     console.log(outputString);
// }
//
// //////vvvvvvv_________________for loop within a loop_______________vvvvvvvvvv//////////
// for (let i = i; i <= 9; i++){
//     let outputString = "";
//     for (let count = 0; count < i; count++){
//         outputString = outputString + i;
//     }
//     console.log(outputString)
// }


//
// //???? what am i doing wrong? should count down in 5's from 100//
// for (let i = 100; i >= 5; i = i - 5) {
//     console.log(i);
// }
// ///short hand for i = i - 5 is i -= 5

//////vvvvvvvvvv________________breaks___________________vvvvvvvvv

// let string = "";
// for (let i = 0; i < 8; i++){
//     let word = prompt("Lets make a sentence! Enter a word.");
//
//     if (word === "curses"){
//         console.log("That word is not allowed");
//         continue;
//     }
//     string += " " + word;
//     console.log("Your sentence is: " + string);
// }

////// break; stops the loop entirely and continue; will skip that one loop but will continue back into the loop;