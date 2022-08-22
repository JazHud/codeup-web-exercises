(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

let person = {
        firstName: "Jazmine",
        lastName: "Hudson",
        sayHello: function() {
            return `Hello from ${person.firstName} ${person.lastName}`
        }
    }

        console.log(person.firstName)
        console.log(person.lastName)
        /**
         * TODO:
         * Add a sayHello method to the person object that returns a greeting using
         * the firstName and lastName properties.
         * console.log the returned message to check your work
         *
         * Example
         * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
         */
        console.log(person.sayHello());
        /** TODO:
         * HEB has an offer for the shoppers that buy products amounting to
         * more than $200. If a shopper spends more than $200, they get a 12%
         * discount. Write a JS program, using conditionals, that logs to the
         * browser, how much Ryan, Cameron and George need to pay. We know that
         * Cameron bought $180, Ryan $250 and George $320. Your program will have to
         * display a line with the name of the person, the amount before the
         * discount, the discount, if any, and the amount after the discount.
         *
         * Uncomment the lines below to create an array of objects where each object
         * represents one shopper. Use a foreach loop to iterate through the array,
         * and console.log the relevant messages for each person
         */

        var shoppers = [
            {name: 'Cameron', amount: 180},
            {name: 'Ryan', amount: 250},
            {name: 'George', amount: 320}
        ];

    shoppers.forEach(function(discount) {   ///<--- discount is an ELEMENT
        let discountOff = (discount.amount > 200 ? discount.amount * .12 : 0).toFixed(2);
        let total = discount.amount - discount;
        console.log(`${discount.name} -- total: $${discount.amount}, discount, $${discountOff}, final amount:$${total}`);
    });

        // console.log(discount.name);
        // if (discount.amount > 200){
        // console.log(Number(discount.amount) - Number(discount.amount % 12));
        // } else {
        // }});



        /** TODO:
         * Create an array of objects that represent books and store it in a
         * variable named `books`. Each object should have a title and an author
         * property. The author property should be an object with properties
         * `firstName` and `lastName`. Be creative and add at least 5 books to the
         * array
         *
         * Example:
         * > console.log(books[0].title) // "The Salmon of Doubt"
         * > console.log(books[0].author.firstName) // "Douglas"
         * > console.log(books[0].author.lastName) // "Adams"
         */
    let books = [
            {
                title: "Daughter of the Mood Goddess",
                author: {
                    firstName: "Sue",
                    lastName: "Tan"
                }
            },
            {
                title: "Book of Night",
                author: {
                    firstName: "Holly",
                    lastName: "Black",
                }
            },
            {
                title: "The Candy House",
                author: {
                    firstName: "Jennifer",
                    lastName: "Egan",
                }
            },
            {
                title: "Book Lovers",
                author: {
                    firstName: "Emily",
                    lastName: "Henry",
                }
            },
            {
                title: "The Hacienda",
                author: {
                    firstName: "Isabel",
                    lastName: "Canas",
                }
            },
            {
                title: "I will Die in a Foreign Land",
                author: {
                    firstName: "Kalani",
                    lastName: "Pickhart"
                }
            }
        ]

    console.log(books[0].title);
    console.log(books[0].author.firstName);
    console.log(books[0].author.lastName);



        /**
         * TODO:
         * Loop through the books array and output the following information about
         * each book:
         * - the book number (use the index of the book in the array)
         * - the book title
         * - author's full name (first name + last name)
         *
         * Example Console Output:
         *
         *      Book # 1
         *      Title: The Salmon of Doubt
         *      Author: Douglas Adams
         *      ---
         *      Book # 2
         *      Title: Walkaway
         *      Author: Cory Doctorow
         *      ---
         *      Book # 3
         *      Title: A Brief History of Time
         *      Author: Stephen Hawking
         *      ---
         *      ...
         */

        books.forEach(function(book, index){
            console.log("Book # " + (index + 1));
            console.log("Title: " + book.title);
            console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
            console.log("---")
         });
    //     ///// or a for loop verison
    // for (let i = 0; i <= books.length; i++)
    //     console.log("Book #" + (i + 1));
    //


        /**
         * Bonus:
         * - Create a function named `createBook` that accepts a title and author
         *   name and returns a book object with the properties described
         *   previously. Refactor your code that creates the books array to instead
         *   use your function.
         * - Create a function named `showBookInfo` that accepts a book object and
         *   outputs the information described above. Refactor your loop to use your
         *   `showBookInfo` function.
         */

        function createBook(title, firstName, lastName){
            return {
                title: title,
                author: {
                    firstName: firstName,
                    lastName: lastName,
                }
            }
        }

        books.push(createBook("the Great Gatsby", "F. Scott", "Fitzgerald"));

        // function Book(title, firstName, lastName){
        //     this.title = title;
        //     this.author = {
        //         firstName: firstName,
        //         lastName: lastName
        //     }
        // }
        //
        // let nineteenEightyFour = new Book("1984", "George", "Orwell");
        // books.push(nineteenEightyFour.title);



})();
