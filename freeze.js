const king={name:"fizz", age:24,kingdom:"bd"};
Object.freeze(king);//no modification of the prev. object,no add,delete
Object.seal(king);//only value change,no add,delete
//to delete
delete king.age;
delete king.kingdom;
king.age=42;
king.queen='none';//adding element
king.status=true;//adding element
console.log(king);