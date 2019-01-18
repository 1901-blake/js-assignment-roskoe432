/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */

function fib(n) {
    let a = 0, b = 0, c = 1;
    if(n === 0) return 0;
    for(let i = 1; i < n; i++) {
        a = b;
        b = c;
        c = a + b;
    }
    return c;
}

for(let i = 0; i < 10; i++) {
    console.log(fib(i));
}