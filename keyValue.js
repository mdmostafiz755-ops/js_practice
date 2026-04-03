const king={name:"fizz", age:24,kingdom:"bd"};
const keys=Object.keys(king);
const values=Object.values(king);
const entries=Object.entries(king);//gives values and keys in pair|| array of arrays
console.log(keys);
console.log(values);
console.log(entries);

//creating an object

const pencil= new Object();//method1
console.log(pencil);
const rubber=Object.create(king);//method2 *must enter a parameter in the method
console.log(rubber);