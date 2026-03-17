
function apple(a) {//also here we can give the value inside the function
    if (a % 2 == 0) {
        console.log('even');
    }
    else
        console.log('odd');
}
apple(5);//can put value over here also.

// with return keyword

function mangoPrice(number) {
    const total = number * 10;
    return total;
}
const x=12;
const gTotal = mangoPrice(x);
console.log(gTotal);
//
function doubleTriple(number2,doDouble){
    if(doDouble===true){
        const result=number2*2;
        return result;
    }
    else{
        const result=number2*3
        return result;
    }
}

console.log(doubleTriple(5,true));
console.log(doubleTriple(6,false));
