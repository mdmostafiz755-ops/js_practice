function sum(arr1,arr2){
    arr1[0]=100;
    arr2[0]=200;
    const first=arr1[0];
    const second=arr2[0];
    return first+second;
}

const num1=[1,2,3];
const num2=[10,20,30];

console.log('beforecall:',num1,num2);

const result=sum(num1,num2);

console.log('aftercall:',num1,num2);

/*
kono array or object jodi function a send kori function e value modify korle jekhan theke send korsi oikhaneo
cng hoiye jabe.

*/