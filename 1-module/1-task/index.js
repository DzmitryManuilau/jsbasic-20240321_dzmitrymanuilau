function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // Factorial of 0 and 1 is 1
}

let result = 1;
for (let i = 2; i <= n; i++) {
    result *= i;
}
return result;
}