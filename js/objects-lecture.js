// let currentWeather = {          /////currentWeather is a reference to the objects inside
//     humidity: 77,                  //// these are variables within object
//     temp: 82.33,
//     feels_like: 88.79,
//     clouds: 75,
//     description: "cloudy"
// }
// //vvvv-------Use dot notation to access object property values under most circumstances
// console.log(currentWeather.temp); ///how to access the value of that property
// console.log(currentWeather.description);
// console.log(currentWeather.feels_like);
//
// ////vvvv--------Use bracket notation to access object property values when you need to use variable-driven property names
// console.log(currentWeather["humidity"]);  ///variable driven property choice
// let userChoice = "clouds"
// console.log(currentWeather[userChoice]);
// let userChoice = "temp"
// console.log(currentWeather[userChoice]);
//
//
// ////////vvvvvvv--------You can do anything to an object property that you can do to any other variable
// // console.log("The current weather is " + currentWeather.temp);
// // if (currentWeather.temp > 95){
// //     console.log("It's kind of hot");
// // } else {
// //     console.log("It's cool today in Texas");
// // }
//
// // for(let property in currentWeather){       //<--to loop through an array using for in loop
// //     console.log(property + " " + currentWeather[property]);
// // }
// //
// // currentWeather.uvIndex = 9.79;     ///Dynamically add new properties to existing objects
// // console.log(currentWeather.uvIndex);
//
// // let hourlyWeather = [   /////an array that holds objects = {}; that has properties time, temp, and feels_like;
// //     {
// //         time: "08:00",
// //         temperature: 78.91,
// //         feels_like: 78.91
// //     },
// //     {
// //         time: "09:00",
// //         temperature: 79.57,
// //         feels_like: 79.57
// //     },
// //     {
// //         time: "10:00",
// //         temperature: 81.46,
// //         feels_like: 86.04
// //     },
// //     {
// //         time: "11:00",
// //         temperature: 84.49,
// //         feels_like: 89.24
// //     }
// // ];
// // /////vvv------using the for loop to loop over an array of ojbects
// // for (let i = 0; i < hourlyWeather.length; i++){
// //     console.log(`At ${hourlyWeather[i].time} the temperature will be ${hourlyWeather[i].temperature}`);
// // }
// /////vvvv----forEach less user error prone when just trying to loop through an array
// hourlyWeather.forEach(function(forecast){
//     console.log(`At ${forecast.time} the temperature will be ${forecast.temperature} and feel like ${forecast.feels_like}`);
// });
//
// // /////===========equal to above but is using arrow syntax
// // hourlyWeather.forEach(forecast =>
// //     console.log(`At ${forecast.time} the temperature will be ${forecast.temperature} and feel like ${forecast.feels_like}`)
// // );
// //
// // let texasInfo = [
// //     {
// //         city: "San Antonio",
// //         latitude: 29.423017,
// //         longitude: -98.48527,
// //         timezone: "America/Chicago",
// //         currentWeather: {
// //             humidity: 77,
// //             temp: 82.33,
// //             feels_like: 88.79,
// //             clouds: 75
// //         }
// //     },
// //     {
// //         city: "Houston",
// //         latitude: 29.7915,
// //         longitude: -95.093,
// //         timezone: "America/Chicago",
// //         currentWeather: {
// //             humidity: 68,
// //             temp: 87.44,
// //             feels_like: 97.7,
// //             clouds: 75
// //         }
// //     }
// // ];
//
//
//
//
//
//
//
//
// let fighter = {
//     name: "Arata",
//     hitPoints: 18,
//     maxDamage: 8,
// }
//
// let monster = {
//     name: "Goblin",
//     hitPoints: 8,
//     maxDamage: 6,
// }
// /////vvvv-A controller object to handle anything players or game object do that affects the state of th game. Handles taking user input and calculating the input's effect on the game.
//
// let controller = {
//     attack: function (attacker, defender) {
//         let defenderHPBeforeAttack = defender.hitPoints;
//         let damage = Math.ceil(Math.random() * attacker.maxDamage);
//         defender.hitPoints -= damage;
//         view.displayAttackResults(attacker, defender, defenderHPBeforeAttack, damage);
//     }
// }
//
// //vvvv--------The view object handles output
// let view = {
//     displayAttackResults: function (attacker, defender, defenderHPBeforeAttack, damage){
//         console.log(`${defender.name} has ${defenderHPBeforeAttack} hit points`);
//         console.log(attacker.name + " attacks!");
//         console.log(`${defender.name} now has ${defenderHPBeforeAttack - damage} hit points.`);
//         console.log("-------------");
//     }
// }
//
// let model = {
//     fighter: {
//         name: "Arata",
//         hitPoints: 18,
//         maxDamage: 8,
//     },
//     monster: {
//         name: "Goblin",
//         hitPoints: 8,
//         maxDamage: 6,
//     }
// }
// controller.attack(fighter, model.monster);
// controller.attack(monster, model.fighter);
//
//
// //////vvvv___________creating objects; define and empty object and creat e properties dynamically
// let goblin = {};
// goblin.name = "Goblin";
//
// /////creating a function that returns objects
// function makeMonster(name, hitPoints, maxDamage){
//     return {
//         name: name,
//         hitPoints: hitPoints,
//         maxDamage: maxDamage,
//     }
// }
//
// ////model.hobgoblin = makeMonster("Hobgoblin", 11, 11);
// ////controller.attack(model.hobgoblin, model.fighter);
//
//
// ////object constructor
//
// function Monster(name, hitPoints, maxDamage){
//     this.name = name;
//     this.hitPoints = hitPoints
//     this.maxDamage = maxDamage
// }
//
// model.hobgoblinCaptin = new Monster("Hobgoblin Captin", 39, 14)
//
// controller.attack(model.hobgoblinCaptin, model.fighter);

////Object Destructuring

const car = {
    make: "Toyota",
    model: "Tacoma",
    year: 2019,
    mileage: 12657
}

// let make = car.make;
// let carModel = car.model;
//
// console.log(make);
// console.log(carModel);

const {make, model, year, mileage} = car;
console.log(make);
console.log(model);
console.log(year);
console.log(mileage);

const outputCarInfo = ({make, model, year, mileage} = car) =>
    {console.log (`${year} ${make} ${model} with ${mileage}`)}
outputCarInfo(car);