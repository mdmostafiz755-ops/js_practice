/*
Callback Hell (in short) 😵‍💫

Callback Hell happens when many callbacks are nested inside each other, making the code hard to read and maintain.
*/


setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);

//solution=> promise &  Async/Await