


//arrow function
const add=(num1,num2)=> num1+num2;//return 
console.log(add(50,60));

//multiLine function
const op=(num3,num4)=> {
    const sum= num3+num4;
    const mul= num3*num4;
    const div= num3/num4;
    return div;
}
console.log(op(50,60));

//max from array using math function

const num=[1,2,10,45];
console.log(Math.max(...num));//spread operator

//copying an array same we can do  for the object
const digits=[4,5,7];
const digit2=[11,...digits,45];
console.log(digits);
console.log(digit2);