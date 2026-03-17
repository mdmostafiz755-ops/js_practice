const phone = [
    { brand: 'iphone', price: 100000, color: 'black' },
    { brand: 'samsung', price: 20000, color: 'black' },
    { brand: 'mi', price: 15000, color: 'black' }
];


function maxPrice(phone) {
    let max = phone[0];
    for (let i of phone) {
        if (i.price > max.price)
            max = i;
    }
    return max;
}

const final=maxPrice(phone);
console.log(final);