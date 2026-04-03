// CallStack

/*
The call stack is a mechanism that JavaScript uses to keep track of function execution. It works like a stack of plates 🍽️.

How it works
When a function is called, it is pushed onto the stack.
JavaScript executes the function.
When the function finishes, it is removed (popped) from the stack.
*/

const mul = (x, y) => x * y;

const sq = x => mul(x, x);

const isRightTriangle = (a, b, c) => {
    return sq(a) + sq(b) === sq(c);
};

const result = isRightTriangle(3, 4, 5);

console.log(result);