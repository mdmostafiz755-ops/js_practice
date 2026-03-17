const product=[
    {name:'shampoo',price:250},
    {name:'shirt',price:550},
    {name:'pant',price:750}
];


function cartCheckout(product){
    let sum=0;
    for(let i of product){
        sum=sum+i.price;
    }
    return sum;
}

const total=cartCheckout(product);
console.log(total);
