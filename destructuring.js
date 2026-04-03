//##destructuring object and array

const price=5000; // if the same named var exsists

const { name, price:phonePrice, brand,camera='12mp' } = {//changing var name
    name: 'iphone', price: 700, brand: 'apple',camera:'24mp'//we can also set default value
};
//name,price and brand will act like variable and we will get the values corresponding the key 
console.log(name);
console.log(phonePrice);
console.log(brand);
console.log(camera);


const [num,num2,num3=30]=[10,20];//destructuring array
console.log(num);
console.log(num2);
console.log(num3);

//**destructuring is process of storing values of object and array to var.


// const product={
//     name: 'iphone',
//     price: 700,
//     description: 'A smartphone by apple'
// }

// const newPrice=product.price +100;
// const phoneName=`this is ${product.name}`;