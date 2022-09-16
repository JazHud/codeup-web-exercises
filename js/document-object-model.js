let accessTheDOM = document.getElementById("dc"); // using the document object as a reference to an element of a pg using a property .getElementByID and w/in the () is what we are searching the page for
let showMe = accessTheDOM.innerHTML; // .innerHTML element property gets or sets the HTML or XML markup contained within the element.
alert(showMe);

let marvel = document.getElementById('marvel');

let preference = "dc"

////below is similar to concatenating using the DOM
let like = document.getElementById("like");
let dontLike = document.getElementById("dontLike");
let output = `${dontLike.innerHTML} ${showMe} movies`;
console.log(output);

let output2 = `${dontLike.innerHTML} ${document.getElementById(preference).innerHTML} movies`;
console.log(output);


//reassigned the value on the HTML page below added "Animated Universe" to "DC" on the visible on the HTML page
accessTheDOM.innerHTML = " Animated Universe"

// //below reassigns the DC to Marvel on HTML
// accessTheDOM.innerHTML = marvel.innerHTML;
//
// ///from the css stylesheet attribute name/property ('class') and the value its set to ('hotpink') ==== to class="hotpink"::::t
// marvel.setAttribute('class', 'hotpink');
//
// ////will return a HTML collection/NODE aka an array like object
// let hotPinks = document.getElementsByClassName('hotpink')
// ////let hotPink is a reference and can = it to a new color.
// hotPinks[0].style.color = 'red';
// ///below is a for loop for arrays to change the pink to red
// for (let i = 0; i < hotPinks.length; i++){
//     hotPinks[i].style.color = 'red';
// }
// ///for loop to change the fontsize
// for (let i = 0; i < hotPinks.length; i++) {
//     hotPinks[i].style.fontSize = '2em';
// }



let submitButton = document.getElementById("colorSubmission");
submitButton.onclick = function () {
    let colorInput = document.getElementById("colorPreference");
    let paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++){
        paragraphs[i].style.color = colorInput.value;
    }
}


////HTML code::::
// <p id="hulk" data-state="hulk" data-strength="super" data-intelligence="low">The Hulk</p>
let theHulk = document.getElementById('hulk');

// let hulkState = theHulk.getAttribute('data-state');
         //above equal to below//
let hulkState = theHulk.dataset.state;

let hulkStrength = theHulk.dataset.strength;

let hulkIntelligence = theHulk.dataset.intelligence;

let hulkSummery = `The hulk is in ${hulkState} state. His strength is ${hulkStrength} and his intelligence is ${hulkIntelligence}.`
// theHulk.innerText = hulkSummery;

// theHulk.innerText += " is in " + hulkState + " state";
///=======above equal to below===========side note better understanding of +=


let transformButton = document.getElementById("transforHulk");
transformButton.onclick = function (){
    let theHulk = document.getElementById('hulk');
    let hulkState = theHulk.dataset.state;
    let hulkStrength = theHulk.dataset.strength;
    let hulkIntelligence = theHulk.dataset.intelligence;
    if (hulkState === 'hulk'){
        theHulk.dataset.state = "Bruce Banner";
    } else {
        theHulk.dataset.state = "hulk";
    }
    theHulk.innerText = `The Hulk is in ${hulkState} state.`;
}
