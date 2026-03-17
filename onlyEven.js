let evens=[];
function even(num){
 for(let i of num){
    if(i%2===0){
        //console.log(i);
        evens.push(i);
    }
 }
 return evens;
}

let num=[11,21,35,4,5,6,7,8];
let result=even(num);
console.log(result);

function add(x){//parameter any name
    let sum=0;
    for(j of result){
        sum=sum+j;
    }
    return sum;
}

let total=add(result);// call er somoi same name of the value i need to pass through
console.log(`sum=${total}`);