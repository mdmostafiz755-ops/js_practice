/*
##Callback
one function asks another function to run after it completes something
- mainly passing a function as a parameter..
*/

function greet(name,Callback){
    console.log('hello'+name);
    Callback();
}

function bye(){
    console.log("goodbye");
}


greet('sourov',bye);