const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
let output = '';


//one parameter (price => { ::::two parameters (price, index) => {
prices.forEach((price, index, array) => {
    const tax = (price *0.0825).toFixed(2);
    const total = (price + parseFloat(tax)).toFixed(2);
    output += `<p id="price-${index+1}">Item number ${index +1} Price $${price}. Tax $${tax}. Total $${total}</p>` //<p id="price-${index+1}"> TO CREATE A NEW ID FOR EACH BY ADDING +1
    console.log(output);
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

const milages = cars.map(car => car.mileage);
console.log(milages);
const newObject = cars.map(car => {
    car.newProp = 'new property';
    delete car.mileage; ///delete removes that of object from the array (delete is a global scope
    // return car;
});

console.log(cars[0]); ///new property is a new object added to the array
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


/// finish function from javie
const totalCost = prices.reduce(function(total, itemPrice, index){
    console.log(`The index is ${index} the total is ${total}, the item price is ${itemPrice});
   `);
    return total += itemPrice;
})
    $(".output").append(`<p> The total is ${totalCost}</p>`);