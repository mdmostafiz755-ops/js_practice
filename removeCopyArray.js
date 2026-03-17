//removing duplicate elements from an array
const name=['asik','riaz','sourov','asik','asik'];
const num=[1,2,3,2,3,1,4,5,5,6];
console.log(name);
function noduplicate(name){
    const unique=[];
    for(let i of name){
        if(unique.includes(i)=== false){
            unique.push(i);
        }
    }
    return unique;
}
const result=noduplicate(name);
console.log(result);
