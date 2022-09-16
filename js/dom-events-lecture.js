////The three steps of the handling events

////1. Get a reference to the element that will trigger the event
let theButton = document.querySelector("button");

//2. Wright the function that will be triggered by the event
//A function is a set of instruction. This kind of function that is triggered by an event is called an event handler, or also called callback
//The function contains the instructions that will run when the event is triggered
function eventHandler(){
    alert("You clicked me!")
}

//3. Register the handler
//We can use addEventListener with two arguments: the type of event and teh function that will be triggered

theButton.addEventListener('click', eventHandler);
/////above is same as below
// theButton.onclick = eventHandler;



////shorten code the way below once I have complete understanding of steps 1-3
// document.querySelector('button').addEventListener('click', function(){
//     alert('You clicked me!')
//     }
//     )

// Use html and css to create a square with a background color on a html page.
// Register an event handler and write its code such that when you click on a page, it alerts that it is a square and what color it is.
// 1. Get a reference to the element that will trigger the event
let theSquare = document.querySelector("section")
//2. Wright the function that will be triggered by the event
//A function is a set of instruction. This kind of function that is triggered by an event is called an event handler, or also called callback
 let squareClicked = function (){
    alert("I am a square");
}
//The function contains the instructions that will run when the event is triggered
//3. Register the handler
//We can use addEventListener with two arguments: the type of event and teh function that will be triggered
theSquare.addEventListener('click', squareClicked);


let para = document.querySelector("div");
function buttonChange() {
    para.innerHTML = "COOL Stuff! You changed me!"
}
theButton.addEventListener('click', buttonChange)


////Usefull to find specific information and manipulate:: event can also be shortened to just e:::
theSquare.addEventListener('click', function (event){
    console.log(event)
})
////withing the log can locate more specific information and where manipulation can take place::: event.target/ e.target; getComputedStyle(e.target); ect

theSquare.addEventListener('click', function (e){
    console.log(e.target.className);
    let theColor = getComputedStyle(e.target).backgroundColor
    console.log(theColor);
    document.querySelector(".otherSquare").style.backgroundColor = theColor;
});

////!!!!look to Javier to fine mistake!!!!!


//To get the user input from a form field
let formInput = document.getElementById('formInput');
formInput.onkeyup = function() {
    console.log(formInput.value)
}