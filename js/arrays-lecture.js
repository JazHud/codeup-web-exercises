
//declaring an array literal:
//each item in an array is called an element

let groceryList = ['bread', 'eggs', 'butter', 'milk'];

///vvvvv________________looping through an array_______________vvvvv
/////      used .length of whatever array to get total list but has to be < because .length starts at 0

for (let i = 0; i < groceryList.length; i++ ){
    if (i === groceryList.Array){
        console.log("I have to by " + groceryList[i] + ".");
    } else {
        console.log("I have to buy " + groceryList[i] + " and ")
    }
}