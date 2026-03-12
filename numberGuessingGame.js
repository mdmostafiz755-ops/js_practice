//number guessing game
let max=parseInt(prompt("Enter a maximum value"));
while(!max || max<0){
     max=parseInt(prompt("Enter a valid number(Positive)"));
}
console.log(max);
const target=Math.floor(Math.random()*max)+1;
console.log(target);
let guess=prompt("Enter your first guess");
let attempts=1;
while(parseInt(guess)!==target){
    if(guess.toLowerCase()==='q') break;
    guess=parseInt(guess);
    if(guess<target){
        guess=prompt("Too low! Enter a new number");
        attempts++;
    }
    else if(guess>target){
        guess=prompt("Too High! Enter a new number");
        attempts++;
    }
    else{
        guess=prompt("Invalid guess.Please enter a number or q to quit");
    }
}

if(guess==='q'){
    console.log("You quit");
}
else{
    console.log("Congrats you got it");
    console.log("it took you",attempts,"attempts");
}