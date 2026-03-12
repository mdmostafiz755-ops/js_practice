//hello
console.log("Hello World");
console.log(44);
var x=15;
let y=16;
console.log(x);
console.log(y);
const car=1;
var name="Mostafiz";
console.log(name);
var w=["apple","orange"];

for(var i=0;i<w.length;i++){
console.log(w[i]);
}

var passed= true;
console.log(passed);
console.log(typeof passed);


var x=Math.sqrt(2);
console.log(x);
console.log(Math.round(x));
console.log(Math.ceil(x));
console.log(Math.floor(x));
var y=Math.pow(2,3);
console.log(y);
var w=Math.random();
w=w*456787;
console.log(Math.floor(w));
var num='20';
num=parseInt(num);
console.log(num+20);
var first=0.0001;
var second=0.022;
var total=first+second;
console.log(parseFloat(total.toFixed(5))); // how many digit to show after the decimal point(makes the o/p string)


//Coditionals operators
var x=3;
var y=3;
if(x>y){
    console.log("Bigger"+ x);
    console.log("Smaller"+ y);
}
else if(x==y){
    console.log("Equal");
}
else{
    console.log("Bigger"+ y);
    console.log("Smaller"+ x);
}
console.log(5>10);


//array
var name=["atik","asik","rakin"];
for( var i=0;i<name.length;i++){
    console.log(name[i]);
}
//push pop array
var grade=[20,30,40,50,60,70];
console.log(grade);
grade.push(44,99,11);
console.log(grade);
grade.pop();
console.log(grade);
grade.shift();
console.log(grade);
grade.unshift(755);
console.log(grade);


var name=["atik","asik","rakin"];
var w= name.includes("Asik"); /// searches the given name inside of the includes function
console.log(w);
console.log(name.indexOf("atik"));
console.log("hello world");

//concat array
let cat=['blue','kitty'];
let dog=['rusty','wyatt'];
console.log(cat.concat(dog));
let firstName="Aminul";
let space=" ";
let finalName= firstName.concat(space);
let lastName="Islam";
console.log(finalName.concat(lastName));
console.log(dog.reverse());

//slice splice

let color=['r','g','b'];
console.log(color);
let color2=color.slice(1);// makes a copy with index start and end
console.log(color2);
let color3= color.splice(2,1) //removes element(from where to start,how many to remove)
console.log(color3);
console.log(color);
//we can also insert element using splice

color.splice(2,0,'hello','hi','oi'); //insert values betn that index
console.log(color);
