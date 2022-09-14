let sayHey = function(){
    let count = 0;
    function hey() {
        // if(count < 10){             commented out sections will not stop the...
            console.log('hey' + count);
            count++;
        // } else {                   // ...setInterval from executing continuously:::solution...
        //         clearInterval();    // ....below

    }

    setInterval(hey, 1000);
//number is in milliseconds, this allows the function to say hey every 1,000 milliseconds::: the function above is within a block statement so it not global
}


//how to stop a setInterval (a WINDOWS method anonymous function). the specified code will continue executing at the given interval until the method clearInterval() (a WIN method) is called
let count = 0;
function hey(){
    if (count < 10){
        console.log("hey " + count);
        count++
    } else {
        clearInterval(thisTimeItWillStop);
    }
}
let thisTimeItWillStop = setInterval(hey, 1000);

//javier has simpler solution(s) on weywot-web-exercises like below

// using an anon function

function tenHeys(){
    let count = 0;
    let thisWillStop = setInterval(function(){
        if (count < 10){
            console.log('hey ' + count);
            count++;
        } else {
            clearInterval(thisWillStop);
        }
    }, 1000);
}
//1000 milliseconds = 1 sec

setTimeout(wakeUpUser, 5000);

function wakeUpUser(){
    alert("WAKE UUUUUPPPPP!!!!");
}