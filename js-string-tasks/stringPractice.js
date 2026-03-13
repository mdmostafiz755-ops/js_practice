//task1
let fruit = 'aaaple';
let count = 0;
for (let i of fruit) {
    if (i === 'a')
        count++;
    //console.log(i);
}
console.log(count);//done

//task2
let fruit2 = 'AaApleaaa';
let counta = 0;
let countA = 0;
for (let i of fruit2) {
    if (i === 'a')
        counta++;
    if (i === 'A')
        countA++;
    //console.log(i);
}
console.log(`countA:${countA} and counta:${counta}`);//done

//task3
let word = 'aiourad';

for (let j=0;j<word.length;j++) {
    if (word.includes('a') && word.includes('e') && word.includes('i') && word.includes('o') && word.includes('u')) {
        console.log('contains all vowel');
        break;
    }
    else {
        console.log('doesnot contain all');
        break;
    }

}//done

//task5
let sentence='i love bangladesh';
let words=sentence.split(' ');
    for(let z=0;z<words.length;z++){
        words[z]=words[z][0].toUpperCase()+words[z].slice(1);
    }
    let result=words.join(' ');
console.log(result);

//task4

let str='mixx';
let newStr=str.replace('x','y');
console.log(newStr);

let str2='mixx';
let newStr2=str.replaceAll('x','y');
console.log(newStr2);

