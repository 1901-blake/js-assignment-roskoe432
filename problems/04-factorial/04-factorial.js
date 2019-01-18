/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
    if (sumNum === 0) return 1;
    return sumNum * factorial(sumNum - 1);
}

for(let i = 0; i < 10; i++) {
    console.log(factorial((i+1)));
}