/* 
    *** What is Promise? ***

    - An object that keeps track about whether an event has happened or not

    --> If the event has happened, Promise will determine what happens after
*/

/* -------------------------------------------------------------------------------------------------------------------

    *** Promise states ***

    1. Before the event has happened --> PENDING

    2. The event has happened --> RESOLVED / SETTLED

        + If the result is successful --> FULFILLED

        + If there was an error --> REJECTED

*/

const getPi =  new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(3.14);
        reject(3.14);
    }, 2000);
});

getPi
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
});