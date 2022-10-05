const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
let output = '';


//one parameter (price => { ::::two parameters (price, index) => {
prices.forEach((price, index, array) => {
    const tax = (price *0.0825).toFixed(2);
    const total = (price + parseFloat(tax)).toFixed(2);
    output += `<p id="price-${index+1}">Item number ${index +1} Price $${price}. Tax $${tax}. Total $${total}</p>` //<p id="price-${index+1}"> TO CREATE A NEW ID FOR EACH BY ADDING +1
    // console.log(output);
    $("div").html(output);
    if (index === array.length-1) {
        $("div").append("<p>That's it!!!</p>");
    }
});
////////find the error above
//
// const pricesAfterTax = prices.map(price =>{
//     const tax = (price * 0.0825).toFixed(2);
//     const total = (price + parseFloat((tax))).toFixed(2);
//     return parseFloat(total);
// });
// console.log(prices);
// console.log(pricesAfterTax);
//
// const doubledArray =prices.map(price => price * 2); ////.map is going through each array and *2
// console.log(doubledArray);
//

// const dessert = ['sherbet', 'whiskey cake', 'cupcake', 'eclair'];
// const eatingDessert = dessert.map(dessert => `Eating ${dessert} yummmmm`);
// eatingDessert.forEach(element => {
//     $("div").append(`<p>${element}</p>`)
// });

const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];

// const milages = cars.map(car => car.mileage);
// // console.log(milages);
// const newObject = cars.map(car => {
//     car.newProp = 'new property';
//     //delete car.mileage; ///delete removes that of object from the array (delete is a global scope
//     return car;
// });
// //// can also use .reduce below to just the the mileage
//
const milages = cars.reduce((accumulator, car) =>{
    accumulator.push(car.mileage);
    return accumulator
}, []);
console.log(milages);

const highestMilage = cars.reduce((accumulator, car, index, array) => {
    accumulator.push(car.mileage);
    if (index === array.length - 1) {
        return accumulator.sort(function (a, b) {
            return b - a
        })[0];
    } else { accumulator.push(car.mileage);
        return accumulator
    }
}, []);
console.log(highestMilage);

const highestMilageMathMax = cars.reduce((accumulator, car, index, array) => {
    accumulator.push(car.mileage);
    if (index === array.length - 1) {
        return Math.max(...accumulator);
            return b - a
    } else { accumulator.push(car.mileage);
        return accumulator
    }
}, []);
console.log(highestMilageMathMax);

const highestMilageMathMaxApply = cars.reduce((accumulator, car, index, array) => {
    accumulator.push(car.mileage);
    if (index === array.length - 1) {
        return Math.max.apply(Math,accumulator);
        return b - a
    } else { accumulator.push(car.mileage);
        return accumulator
    }
}, []);
console.log(highestMilageMathMaxApply);


///no conditional, index and array variables needed
const highestMilage2Reduces = cars.reduce((accumulator, car) => {
    accumulator.push(car.mileage)   ///the first reduce gets all the mileages in an array
        return accumulator;
    }, []).reduce((accumulator, mileage) => {
        return Math.max(accumulator, mileage); //the second reduce is going through the arrays and reducing values by the Max #
})

console.log(highestMilageMathMax);



// console.log(cars[0]); ///new property is a new object added to the array
////FIND THE ERROR
const under10K = cars.filter(car => car.mileage < 10000);
//// below is called object deconstruction
under10K.forEach(({make, model, mileage}, index) => {
    output += `<p>Car number ${index + 1}:I found a ${make} ${model} with ${mileage} miles</p>`;
    $(".output").html(output);
});


prices.filter(price => price < 10)
    .map(price => {
        const tax = (price * 0.0825).toFixed(2);
        const total = (price + parseFloat(tax)).toFixed(2);
        return parseFloat(total);
    }).forEach(price =>                         ////.forEach makes the return value come back undefined if you want to declare the variable and return that value
        $("div").append(`<p> ${price}</p>`));

// console.log(under10DollarsWithTax)


/// The function passes to the reduce method takes an extra parameter, the accumulator
/// The accumulator is often abbreviated "acc"
/// By default the first and second paramaters are set the to the first and second elements of the array
/// As it goes the addition of the two become the total and continues down the array.
const totalCost = prices.reduce(function(total, itemPrice, index){
   //  console.log(`The index is ${index}, the total is ${total.toFixed(2)}, the item price is ${itemPrice});
   // `);
    return total += itemPrice;
});
    // $(".output").append(`<p> The total is ${totalCost}</p>`);

const averagePrice = prices.reduce((function (accumulator, current, index, array) {
    accumulator += current;
    if (index === array.length - 1) {
        return accumulator / array.length;
    }
    return accumulator ///this value has to be passed for the function to work
}));


    console.log("You have $158.76 in your shopping cart.");

    const total = prices.reduce(function (total, priceOfItem) {
        return total + priceOfItem;
    }, 158.76); ///so that the function will start with the total being at 158.76

    console.log(`Your total cost is ${total.toFixed(2)}`);
