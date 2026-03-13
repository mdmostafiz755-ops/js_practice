//task1
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
console.log(colors["golden rod"]);//done

//task2
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car[`passenger capacity`]=5;
console.log(car);//done

//TAsk3
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student.physics.marks);//done

//task4
let students = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
console.log(Object.values(students).length);//done

//task5
let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true

};
let Keys=Object.keys(myObject);
let value=Object.values(myObject);

    for(let b=0;b<Keys.length;b++){
        console.log(`key:${Keys[b]} | type:${typeof(value[b])}`);
}//done
