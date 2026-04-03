/*
Promises in JavaScript (short & easy) 🤝

A Promise is an object used to handle asynchronous operations (like API calls or timers).
It represents a value that will be available now, later, or never.

resolve() → success → handled by .then()
reject() → error → handled by .catch()
*/

const promise= new Promise((resolve,reject)=>{
    let success=false;
    if(success)
        resolve(console.log('Task completed'));
    else
        reject(console.log('Task Failed'));
});

promise
.then(result => console.log(result))
.catch(error=>console.log(error));