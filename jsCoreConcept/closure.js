

function outerFunction() {
    function innerfunction() {
        console.log('innerFunction');
    }
    return innerfunction; //function k retun kortesi
}
const output = outerFunction();
//output();
//console.log(output);

/*
###Closure in JS
closure is a function that can remember the variables of the outter function
even if the function has ended.

*/

function counter(owner){
    let count=0; //outter variable : which is being remembered
    function inc(){//closurer function
        count=count+1;
        console.log(`visitor Number:`,owner,count);
    }
    return inc;
}
const visitor=counter('fizz');
visitor();//called once
visitor();//called twice

const karimCounter=counter('karim'); //just passed a new argument and get the same ouput as before
karimCounter();
karimCounter();
