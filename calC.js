
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function calC(a,b,Op){
    if(Op==='add'){
        const result=add(a,b);
        return result;
    }
    else if(Op==='sub'){
        return sub(a,b);
    }
    else
        return " Only 'add' and 'sub'";
}

const final=calC(10,15,'add');
console.log(final);