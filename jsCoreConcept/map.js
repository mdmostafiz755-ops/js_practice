const num = [1, 2, 3, 4, 5];

// const double=num => num*2;// signle parameter arrow function
// const result=num.map(double); // map method
const result = num.map(num => num * 2); // 1 line shortcut

//console.log(result);

const name = ['asik', 'riaz', 'fizz'];

const friend = name.map(frd => frd[0]);
//console.log(friend);


const products = [
    {
        brand: "iphone",
        price: 12000,
    },
    {
        brand: 'samsung',
        price: 200000
    }
];
const cart=products.map(p => p.price);
//console.log(cart);
//  const names=products.map((pd, index, namesArray)=>{ //we can pass 3 values inside map
//     const upper=pd.brand.toUpperCase();
//     console.log(index, upper,namesArray);
//     return upper;
//  });

// console.log(names);

//forEach

const result2=products.forEach(pd=>console.log(pd));
console.log(result2); //  foreach return kore na kishu..



