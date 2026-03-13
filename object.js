let student = {
    id: '22702007',
    name: 'mostafiz',
    dept: 'eee'
}
console.log(Object.values(student));
console.log(Object.keys(student));
//nested
let college = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['scienceFair', '21stFeb'],
    students: {
        id: '22702007',
        name: 'mostafiz',
        discipline: 'science'
    }
}
console.log(Object.values(college.students));
for (let i in college.events) {
    console.log(college.events[i]);
}
console.log(college.events);
delete college.class;//to delete any key+value of a object
console.log(college);

const pen={
    brand: 'mi',
    price:100,
    color:'black',
}
//creating objects
const pencil= new Object();
console.log(pencil);
const rubber=Object.create(pen);
console.log(rubber);
console.log(pen['brand']);//
console.log(pen[prop]);// used for dynamic cases