 let name=['asik','zamal','kamal','rahim','karim'];

//  for(let i of name){
//     console.log(i);
//  }

 let names=[
    ['asik','zamal','kamal','rahim','karim'],
    ['asik','zamal','kamal','rahim','karim'],
    ['asik','zamal','kamal','rahim','karim']
 ];
//  for(let i=0;i<names.length;i++){
//     const row=names[i];
//     for(let j=0;i<row.length;j++){
//     console.log(row[j]);
//  }
//  }

const testScore={
    asik:80,
    rahim:10,
    karim:20,
}// in case of object we need to use for in loop

for(let j in testScore){
    console.log(`${j} scored ${testScore[j]}`);
}
