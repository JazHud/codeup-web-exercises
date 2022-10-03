const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
// console.log(users);
let threeLangs = users.filter(function (users){
    return users.languages.length >= 3;
});
console.log(threeLangs);

//     Use .map to create an array of strings where each element is a user's email address
const email = users.map(function (emails) {
    return emails.email;
});
console.log(email);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const totalYears = users.reduce(function (yrsAdd, yrs) {
    return yrs.yearsOfExperience + yrsAdd;
},0);
let averageYears = totalYears/users.length;
console.log(averageYears);

//     Use .reduce to get the longest email from the list of users.
let longEmail = users.reduce(function (lngEmail, user) {
    if(lngEmail.length < user.email.length){
        return user.email;
    } else {
        return user;
    }
}); console.log(longEmail)
//     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let userNames = users.reduce(function (names){
    return `${users.name}`
},'');
console.log(userNames);
// Bonus
// Use .reduce to get the unique list of languages from the list of users.