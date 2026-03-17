const num = [1, 2, 3, 4, 5];
console.log(num);
const numDouble = num.map(function double(num) {
    result = num * 2;
    return result;
});
console.log(numDouble);