// function summation(n) {
//     debugger;
//     let sum = 0
//     for (let i = 1; i <= n; i++) {
//         sum += i
//     }
//     return sum;
// }

// console.log(summation(4))

// function summ_ation(n) {
//     debugger;
//     return (n * (n + 1)) / 2;
// }

// console.log(summ_ation(4))

// const fibonacci_sequence = (n) => {
//     debugger;
//     //   first number is always 0
//     //  second number is always 1
//     // third number is the sum of that number
//     let fib = [0,1]
//     for (let i = 2; i < n; i++) {
//             fib[i] = fib[i - 1] + fib[i - 2]
//     }
//     return fib;
// }

// console.log(fibonacci_sequence(5))

// 5
// 2 < 5
// fib[2] = fib[2 - 1] + fib[2 - 2]
//  fib[1]
// fib[3] = fib[3 -1 ] + fib[3 - 2]
// fib[3]

// test cases
// fib(2) = [0,1]
// fib(3) = [0,1,1]
// fib(7) = [0,1,1,2,3,5,8]

// const factorial = (n) => {
//     let output = 0
//     if (n <= 1) {
//         return 1
//     } else {
//         output = n * factorial(n - 1)
//     }
//     return output
// };

// console.log(factorial(4));


const factorial = (n) => {
    debugger; 
    let output = 1
    for (let i = 2; i <= n; i++){
        output = output * i 
    }
    return output; 
}


console.log(factorial(4))