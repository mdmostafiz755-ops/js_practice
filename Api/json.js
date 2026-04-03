const person={
    name:"fizz",
    age:24,
    height:5.6,
    isRich: false,
    friend: ['asik','riaz'],
    money:10000
}
//to convert this object to json

const personJ=JSON.stringify(person);
console.log(personJ);

//converting json to object

const personObj=JSON.parse(personJ);
console.log(personObj);