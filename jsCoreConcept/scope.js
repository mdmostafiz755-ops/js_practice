let pi=3.14; //global fuction


const add=(a,b)=>{
    const factor=0.5;//function scope(can only be used inside a function)
    const result=(a+b)*factor;
    return result;
}
add(4,5);
//block scope(can be used only inside {})
if(pi<5){
    pi++;
    console.log(pi);
}
//console.log(factor);//err
//console.log(pi);//error