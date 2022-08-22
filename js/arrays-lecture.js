
//declaring an array literal:
//each item in an array is called an element
//
// let groceryList = ['bread', 'eggs', 'butter', 'milk'];
//
// ///vvvvv________________looping through an array_______________vvvvv
// /////      used .length of whatever array to get total list but has to be < because .length starts at 0...very basic example below.
//
// for(let i = 0; i < groceryList.length; i++){
//     console.log(i);
// }
//
// for (let i = 0; i < groceryList.length; i++ ){
//     if (i === groceryList.Array){
//         console.log("I have to by " + groceryList[i] + ".");
//     } else {
//         console.log("I have to buy " + groceryList[i] + " and ")
//     }
// }

////vvvv------- console.log(texasCities[i]); -->to list out array on each individual line (w/o the if else)

//let texasCities = ['San Antonio', 'Houston', 'Dallas', 'El Paso'];
// for (let i = 0; i < texasCities.length; i++) {
//     if (i % 2 === 1) {
//         console.log(texasCities[i] + " is an odd city");
//     } else {
//         console.log(texasCities[i]);
//     }
// }


////vvvvvvvvv________how to list out with a function
// function outputArray(array){
//     for (let i = 0; i < texasCities.length; i++){
//         console.log(array[i]);
//     }
// }
// outputArray(texasCities);
//

//////forEach loop takes an anonymous function
//the function we pass to the forEach loop has up to three parameters
//the first parameter represents the array elements
//the second parameter represents the element index
//the third parameter represents the array itself
//the second and third parameters are optional

// let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
//
// //since the function is anonymous, we can use arrow syntax
// prices.forEach(price => {
//     console.log(price);
// })


// /// to add and remove from the end
// groceryList.push("potatoes");
// console.log(groceryList);
// groceryList.pop();
// console.log(groceryList);
////to add remove to the beginning
// groceryList.unshift("sliced cheddar");
// console.log(groceryList);
// groceryList.shift();
// console.log(groceryList);
// //locate index to find the item you want replace when the location is unknown.
// let indexOfButter = groceryList.indexOf("butter");
// console.log(indexOfButter);
//
// groceryList[indexOfButter] = "peanut butter";
// console.log(groceryList);
//
// groceryList[0] = "avocados"
// console.log(groceryList);
//
//
// //slice needs a start and end index (0,2) really reads the 0 and 1 of index
// let firstHalfOfGroceryList = groceryList.slice(0, 2); ///removes the last 2 items
// console.log(firstHalfOfGroceryList);
// let secondHalfOfGroceryList = groceryList.slice(2); ///removes the first 2 items
// console.log(secondHalfOfGroceryList);
//
// firstHalfOfGroceryList.push("butter");
//
// groceryList = firstHalfOfGroceryList.concat(secondHalfOfGroceryList);
// console.log(groceryList);
// /////you have to splice, push, then concat to replace something in the middle.
//
// groceryList.reverse();
// console.log(groceryList);
//
// groceryList.sort();
// console.log(groceryList)  ////only in order for strings not numbers
// console.log(groceryList.reverse());
//
// prices.sort(function(a,b){ ///to sort a string of numbers
//     return a-b;
// });
// console.log(prices);
//
// groceryList[3] = "Blueberries";       //
// console.log(groceryList);            // <- will put the capital letter first
// console.log(groceryList.sort());    //    below is the solutions -V
//

// for (let i = 0; i < groceryList.length; i++){
//     groceryList[i] = groceryList[i].toLowerCase();
// }
//  console.log(groceryList.sort());
//====================above equals to below==================
// groceryList.forEach((item, index, array) => {
//     array[index] = item.toLowerCase();     //
// })
//
// console.log(groceryList);
// ////=============above equals below==============
// groceryList = groceryList.join(' ').toLowerCase().split(' ').sort();
// console.log(groceryList);
//
//
// let quote = "All the world's a play";
// let quoteArray = quote.split(' ');
// console.log(quoteArray);
// quoteArray = quoteArray.reverse();
// console.log(quoteArray);
// quote = quoteArray.join(' ').toLowerCase();
// console.log(quote);

let wishList = [25, 15, 34, 8, 59];

function checkWishListPrices(wishList){
    for (let i = 0; i < wishList.length; i++){
        if (wishList[i] > 50) {
            return false;
        }
    }
    return true;
}


////not on assessments but shows how a function can be used inside a function to perform a function.
console.log(checkWishListPrices(wishList));

function checkWishListTotal(wishList){
    let total = 0;
    for (let i = 0; i < wishList.length; i++){
        total += wishList[i];
    }
    return total <= 100;
}

console.log(checkWishListTotal(wishList));

function processWishList(wishList, testFunction1, testFunction2){
    return testFunction1(wishList) && testFunction2(wishList);
}
 console.log(processWishList(wishList, checkWishListPrices, checkWishListTotal));
