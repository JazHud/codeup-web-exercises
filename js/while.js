// let counter = 2;
// while (counter <= 65536) {
//     console.log(counter);
//     counter *= 2;
// }

// let number = Math.ceil(Math.random() *6);
// let guess;
// console.log(guess);
// do {
//     guess = parseInt(prompt("Enter a number a number between 1 and 6"));
// } while (guess !== number);
// alert(`Your guess of $
//

//vvvv------------my poor attempt------------vvvvv
// let allCones = Math.floor(Math.random() * 50) + 50;
// let conesSold = Math.floor(Math.random() * 5) + 1;
// console.log(`${conesSold} cones sold`)
// do {
//     allCones - conesSold
//
// } while (allCones => 0)
// console.log("Yay I sold them all ")


let allCones = Math.floor(Math.random() * 51) + 50;

do {
    let conesWanted = Math.floor(Math.random() * 5) + 1;
    if (conesWanted > allCones){
        console.log(`Cannot sell you ${conesWanted} I only have ${allCones}`);
    } else {
        console.log(`${conesWanted} sold...`);
        allCones = allCones - conesWanted;
    }
    console.log(`${allCones} left`)
} while (allCones > 0);
console.log("Yay I sold them all ")


