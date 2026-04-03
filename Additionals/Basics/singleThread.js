/*
Web APIs are features provided by the browser, not by JavaScript itself.
They handle tasks like:

setTimeout()
fetch()
DOM events (click, scroll)
geolocation

These tasks run outside the JavaScript call stack, so they don’t block the main code.
*/


console.log('hi');

setTimeout(() => {
    console.log('data from server....');
}, 3000);// will execute after 3s

console.log('Hello');