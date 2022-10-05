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
/////////jason's solution's below/////
let threeLangOld = [];
for (let i = 0; i < users.length; i++) {
    if (users[i].languages.length > 2) {
        threeLangOld.push(users[i]);
    }
}
console.log(threeLangOld);

let threeLangFilter = users.filter(function(user) {
    return user.languages.length > 2;
});
console.log(threeLangFilter)

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
/////////jason's solution's below/////

let totalExp = users.reduce((total, user) => {
    return total +user.yearsOfExperience
}, 0);
console.log(`The users have a total of ${totalExp} years of experience.`);
let avgerageExp = totalExp / users.length;
console.log(`The users have an average of ${avgerageExp} years of experience`)


//     Use .reduce to get the longest email from the list of users.
let longEmail = users.reduce(function (lngEmail, user) {
    if(lngEmail.length < user.email.length){
        return user.email;
    } else {
        return user;
    }
}); console.log(longEmail)
/////////jason's solution's below/////
// let longestEmail = users.reduce((currentLongestEmail, user) => {
//     if(currentLongestEmail.length > user.email.length){
//         return currentLongestEmail;
//     } else {
//         return user.email
//     }
// });
///same as above
let longestEmail = users.reduce((currentLongestEmail, user) => {
    return currentLongestEmail.length > user.email.length ? currentLongestEmail: user.email;
})


//     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let usersNames = users.reduce((names, user) => {
    names.push((user.name).toString());
    return names;
},[]);
console.log(usersNames);
/////////jason's solution's below/////
// let userNames = users.reduce((list, user) => {
//    return list += (user.name + ', ')
// } "Your instructors are: ");
// console.log(userNames);
// //or///
let userNamesBetter = users.reduce((pre, user, index, usersArray) => {
    let beginning;
    let end;
    if (pre){
        beginning = ", ";
    }
    else {
        beginning = 'You instructors are: '
    }
    if (index == (users.usersArray - 1))
        end = '.'
    return pre +`${beginning},`
}, "");
console.log(userNamesBetter);

//     return pre + `${pre ? ', ' : "Your instructors are: )"}${user.name}${ (index == {usersArray.length -1)) ? '.': ''  }`
// }, "");

// Bonus
// Use .reduce to get the unique list of languages from the list of users.

let uniqueLang = users.reduce((lang, currentLang) => {
    lang.push(currentLang.languages).toString()
        return lang;
//     console.log(lang)
},[])//.reduce((lang, uniLang) => {
//     if ((users.languages) !== lang){
//         return uniLang
//     }
// });
//     // if (users.languages !== lang){
//     //     return currentLang;
//     // }


console.log(uniqueLang)

////jason's solution///
// let uniqueLanguages = users.reduce((accumulator, user) => {
//     user.languages.forEach(function(language){
//         if (!accumulator.includes(language)){
//             accumulator.push(language);
//         }
//         return accumulator
//     })
// }, []);
// console.log(uniqueLanguages);
