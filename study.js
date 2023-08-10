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


// const factorial = (n) => {
//     debugger; 
//     let output = 1
//     for (let i = 2; i <= n; i++){
//         output = output * i 
//     }
//     return output; 
// }


// console.log(factorial(4))


// const is_Prime = (n) => {
//     // prime number is a unique number
//     // can only be divided by itself or 1
//     if (n < 2) return false; 
//     let bool = true
//     for (let i = 2; i < n; i++){
//         if (n % i !== 0) {
//            return bool 
//         }
//         bool = false 
        
//     }
//     return bool 
// }

// console.log(is_Prime(5))

// // optimal solution 
// const is_prime = (n) => {
//     // prime number is a unique number
//     // can only be divided by itself or 1
//     if (n < 2) return false; 
//     let bool = true
//     for (let i = 2; i <= Math.sqrt(n); i++){
//         if (n % i !== 0) {
//            return bool 
//         }
//         bool = false 
        
//     }
//     return bool 
// }

// console.log(is_prime(5))



// const power_of_two = (n) => {
//     debugger; 
//     let bool = true 
//     let num = 0
//     for (let i = 1; i < n; i++){
//         if (2 ** 0 === 1) {
//             num = 1
//         }

//         if (2 ** i === n) {
//             bool
//         } else {
//             bool = false 
//         }
        
//     }
//     return bool 
// }

// console.log(power_of_two(6))


// const is_power_of_two = (n) => {
//     debugger; 
//     let bool = false 
//     if (2 ** 0 === 1) return !bool
//     for (let i = 1; i < n; i++){
//         if (2 ** i === n) {
//             bool = true 
//         }
//         bool = false 
//     }  
//     return bool
// }


// console.log(is_power_of_two(5))

// const is_power_of_two = (n) => {
//     if (n < 1) return false 
    
//     while (n > 1) {
//         if (n % 2 !== 0) {
//             return false 
//         }
//         n = n / 2
//     }
//     return true 
// }

// console.log(is_power_of_two(2))
// console.log(is_power_of_two(4))
// console.log(is_power_of_two(6))
// console.log(is_power_of_two(5))


// const isPowerOfTwoBitWise = (n) => {
//     if (n < 1) {
//         return false 
//     }
//     return (n & (n - 1)) === 0
// }


// console.log(isPowerOfTwoBitWise(4))

// const recursive_fib = (n) => {
//     debugger; 
//     if (n < 2) {
//         return n
//     }
//     return recursive_fib(n - 1) + recursive_fib(n - 2)
// }


// console.log(recursive_fib(3))


// const fib_seq = (n) => {
//     let fib = [0,1]
//     if (n < 2) return n
//     for (let i = 2; i < n; i++){
//         fib[i] = fib[i - 1] + fib[i - 2]
//     }
// return fib
// }

// console.log(fib_seq(5))



// const factorial_recurs = (n) => {
//     debugger; 
//     let output = 0
//     if (n <= 1) {
//         return 1 
//     } 
//     output = n * factorial_recurs(n - 1)
//     return output; 
// }

// console.log(factorial_recurs(4))



const factorial = (n) => {
    let output = 0
    if (n < 1) return 1
    output = n * factorial(n - 1)
    return output
}

console.log(factorial(4))



