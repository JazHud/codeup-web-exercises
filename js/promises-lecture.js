// //AJAX request with jQurey
// $.get("data/murals.json", function (data){
//     console.log(data);
// });

//Fetch API aka vanilla way
////.then works like the .done in the jQurey way
// fetch("data/murals.json").then(function(response){
//     return response.json();
// }).then(function(data){
//     console.log(data);
// });

///Abbreviated Fetch request using arrow function below

fetch("data/murals.json").then(resp => resp.json()).then(data =>
console.log(data));

///Callback: a function passed as an argument to another function; it can run after another function has finished running such as an event handler
//
// function sayHello(greeting, name){
//     return `${greeting}, ${name}`;
// }
//
// let greeting = sayHello("Hola", "Jaz");
//
// function displayOutput(output){
//     $("#output").html(output);
// }
//
// displayOutput(greeting);
////or can do above like below
// function sayHello(greeting, name){
//     greeting = `${greeting}, ${name}`;
//     displayOutput(greeting);
// }
// sayHello("Hola", "Jaz");
//
// function displayOutput(output){
//     $("#output").html(output);
// }
///call back function below for above:: the blow functions allows you to change the content of what you want to be displayed in a new function without haveing to reconstruct the first function
function greeter(greeting, name, displayFunction){
    greeting = `${greeting}, ${name}!`;
    displayFunction(greeting);
}

function displayToOutputDiv(output){
    $("#output").html(output);
}

greeter("Hola", "Jaz", displayToOutputDiv)

        ///arrow function
// setTimeout( () => greeter("Aloha", "Jason", displayToOutputDiv), 3000);
        ///not arrow function
setTimeout(function() {
    greeter("Aloha", "Jason", displayToOutputDiv)
}, 3000)

// setTimeout(greeter, 3000, "Yo", "dude", displayToOutputDiv);


const greetings = [ "Salutations", "Shoutout", "Hello", "Hullo", "Hail", "Hey", "Hi", "Aloha", "Hola", "Bonjour", "Howdy", "Namaste", "Ohayo", "Ni hao"];
const names = ['David', 'Jay', 'Bianca', 'Laura', 'Kenneth', 'Cody', 'Justin', 'Javier', 'Dane', 'Casey', 'Mark', 'Ry', 'Jordy'];
function generateGreeting(greetingsArray, namesArray, displayFunction){
    let greeting = greetingsArray[Math.floor(Math.random() * greetingsArray.length)];
    const name = namesArray[Math.floor(Math.random() * namesArray.length)];
    greeting = `${greeting}, ${name}!`;
    displayFunction(greeting);
}

generateGreeting(greetings, names, displayToOutputDiv) ///on click greetings and name will change

//setInterval(generateGreeting, 1000, greetings, names, displayToOutputDiv); /// every second greeting and name will change

//javier has an example using a downloaded data function with a display function


///after New is a constructor that always takes theses too parameters resolve, and reject of the function::: is to find whether the promise is being executed
const aPromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        if (Math.random() > 0.5){
            resolve("I was fulfilled")
        } else {
            reject("I was rejected");
        }
    }, 3000)
});
///.then if the prom
aPromise.then(value => console.log(value)).catch(error=>console.log(error));



///fetch call returns a promise::logs that can give useful info
fetch("data/murals.json").then(response => {
    console.log(response.status); //200 Ok 404 bad
    console.log(response.headers);
    console.log(response.url);
    return response.json()
}

    ).then(data => console.log(data)).catch(error => console.log("Oh no, it doesn't work"));


/////Promise.all takes in multiple APIs and outputs them as array of elements::: look to Javiers for example