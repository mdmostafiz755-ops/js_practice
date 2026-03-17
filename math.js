const num1=[1,2,3,4];
const minValue=Math.min(...num1);

console.log(minValue);

// without math function
const num=[1,2,3,4];
 function max(num){
    let max=num[0];
    for(const i of num){
        if(i>max)
            max=i;
    }
    return max;
 }
 const final=max(num);
 console.log(final);