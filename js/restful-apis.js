//API -- Application Programming INterface
// a set of rules defining how applications and/or devices can connect to each other and communicate with one another

//REST -- Representational state transfer.
//A pattern of design principles for APIs
// REST APIs communicate via HTTP requests

//In a REST API, communication via HTTP requests is used to perform the standard set of actions called CRUD -- Create, Read, Update, Delete

//JSON -- JavaScrip Object Notation is not mandatory but is popular becase it is both hume- and machine-readable

//https://glitch.com/pouncing-bejewled-hunter

const booksURL = 'https://pouncing-bejewled-hunter.glitch.me/books'
const moviesURL = 'https://pouncing-bejewled-hunter.glitch.me/movies'

// The R in CRUD: Read
function getMovies(){
    fetch(moviesURL).then(resp => resp.json()).then(data=>console.log(data));
}
getMovies();

//The C in CRUD: Create

const bookToPost = {
    title: "A Court of Thorns and Roses",
    author: {
        firstName: "Sarah",
        lastName: "Maas"
    }
}
 const postOptions = {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
     },
    body: JSON.stringify(bookToPost)
}

function getBooks(){
    fetch(booksURL).then(resp => resp.json()).then(data=>console.log(data));
}
getBooks();

// fetch(booksURL, postOptions).then(getBooks);

//The U in CRUD: Updating with PUt and Patch request


//Patch to modify only part of the entry
const modification = {
    title: "A Court of Thorns and Roses: A Court of Thorns and Roses Series"
}

const patchOptions ={
    method: 'PATCH',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(modification)
}

// fetch(booksURL + "/1", patchOptions).then(getBooks);


// Put to replace the entire content
    ///modification needs to be renamed
let modificationtwo = {
    title: "A Throne Of Glass",
    author: {
        firstName: "Sarah",
        lastName: "Maas"
    }
}

const putOptions = {
    method: 'PUT',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(modificationtwo)
}

// fetch(booksURL + "/1", putOptions).then(getBooks);


// The D in Crud -- Delete
const deleteOptions = {
    method: 'DELETE',
    headers: {
        'Content-Type' : 'application/json'
    }
}

fetch(booksURL + "/1", deleteOptions).then(getBooks);