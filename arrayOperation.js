
function adder(num){
    let result=0;
    for(let i of num){
        result=result+i;
    }
    return result;
}
const num=[1,2,3,4,5,6,7];
const final=adder(num);
console.log(final);