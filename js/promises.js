/// how to alter the fetch was found on this url https://docs.github.com/en/rest/activity/events#list-public-events-for-a-user
        ////cleaner solution on javiar' web-exercises
function getCommits(username) {
   return fetch(`https://api.github.com/users/${username}/events/public`, {
        headers: {
            'Authorization': GITHUB_API_TOKEN
        }
    }).then(response => response.json())
        .then(events => {
            console.log(events)
            const dateofLastPush = new Date(events[0].created_at).toDateString();
            return dateofLastPush;
        })
        .catch(error => console.error(error));

}
const lastCommit = getCommits('jazhud');
//console.log(lastCommit)// cant do this have to do below vvv
lastCommit.then(value => console.log(value)).catch(error=>console.log(error))
//Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.

//////jason's solution///
async function getUserLastCommitAsync(username) {
    try {
        let response = await fetch(`https://api.github.com/users/${username}`);
        let events = await response.json();
        console.log(events);
    }
    catch(err) {
        console.log(err);
    }
}
console.log(getUserLastCommitAsync('jazhud'));