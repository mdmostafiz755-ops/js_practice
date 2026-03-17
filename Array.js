 let num=[1,2,3,4,5,6,7];
 //reservsal techniques
// num.push(8,2);
// num.pop();
// num.shift();
// num.unshift(2);
console.log(num);
let num2=[];
 for(let i of num){
    num2.unshift(i);
 }
 console.log(num2);
let rev=[];
 for(let j=num.length;j>0;j--){
   rev.push(j);
 }
 console.log(rev);