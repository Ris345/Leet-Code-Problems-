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

// const factorial = (n) => {
//     let output = 0
//     if (n < 1) return 1
//     output = n * factorial(n - 1)
//     return output
// }

// console.log(factorial(4))

// let arr = [-5, 2, 10, 4, 6]
// let t = 10

// const find_item = (arr, t) => {
//     let tot = 0
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] === t) {
//             return i
//         }
//     }
//     return - 1
// }

// console.log(find_item(arr,t))

// let arr = [-5, 2, 4, 6, 10];
// let t = 6;

// const binary_search = (arr, t) => {
//     let left = 0
//     let right = arr.length - 1

//     if (arr.length < 1) {
//         return - 1
//     }
//     let middle_element = Math.floor(arr.length / 2)
//     if (t === arr[middle_element]) {
//         return middle_element
//     }
//     if (t < middle_element) {
//         for (let i = 0; i < arr.length; i++){
//             if (arr[i] >= middle_element) {
//                 return
//             }
//         }
//     }
//     if (t > middle_element) {
//         for (let i = arr.length - 1; i >= 0; i--){
//             if (arr[i] === t) {
//                 return i
//             }
//         }
//     }
// }

// const binary_search = (arr, t) => {
//   let left = 0;
//   let right = arr.length - 1;
//     console.log('right', right)
//     console.log('left', left)

//   while (left <= right) {
//       let middleIdx = Math.floor((left + right) / 2);
//       console.log('middle:', middleIdx)
//       console.log('target:',  t)
//     if (t === arr[middleIdx]) {
//       return middleIdx;
//     }
//     if (t < arr[middleIdx]) {
//       right = middleIdx - 1;
//     } else {
//       left = middleIdx + 1;
//     }
//   }
//   return -1;
// };

// console.log(binary_search(arr, t));

// const binary_search_recurs = (arr, t) => {
//   return search(arr, t, 0, arr.length - 1);
// };

// const search = (arr, t, left, right) => {
//   if (left > right) return -1;
//   let middle = Math.floor((left + right) / 2);
//   if (t === arr[middle]) {
//     return middle;
//   }

//   if (t < arr[middle]) {
//     return search(arr, t, left, middle - 1);
//   } else {
//     return search(arr, t, middle + 1, right);
//   }
// };

// console.log(binary_search_recurs(arr, t));

// need to finish tracing how the code runs in a piece of paper

// let arr = [-5, 2, 4, 6, 10]
// let target = 6
// const recurs_binary_search = (arr, target) => {
//   debugger;
//   return search(arr, target, 0 , arr.length - 1)
// }

// const search = (arr,target, left, right) => {
//   if (left > right) return -1

//   let middle = Math.floor((left + right) / 2)
//   console.log('middle:', middle  )
//   if (target === arr[middle]) {
//     return middle
//   }

//   if (target < arr[middle]) {
//     return search (arr,target, left, middle - 1)
//   } else {
//     return search (arr, target, middle + 1, right)
//   }
// }
// console.log(recurs_binary_search(arr, target))

// let arr = [-6, 20, 8, -2, 4];

const bubble_sort = (arr) => {
  let swapped = true 
  do {
    for (let i = 0; i < arr.length - 1; i--){
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp 
      }
    }
  } while (swapped)
}







// const bubble_sort = (arr) => {
//   for (let i = 0; i < arr.length; i++){
//     for (let j = i + 1; j < arr.length; j++){
//       if (arr[i] > arr[j]) {

//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp

//       }
//     }
//   }
//   return arr; 
// };

// console.log(bubble_sort(arr));
// const insertion_sort = (arr) => {
//   let NYS = 0
//   let SE = 0
//   for (let i = 0; i < arr.length; i++){
//     for (let j = i + 1; i < arr.length - 1; j++){
//       if (arr[i] > arr[j]) {
//         SE = arr[i]
//         NYS = arr[j]
//       } 
//     }
//   }
//   console.log('SE:', SE)
//   console.log('NYS:', NYS)
// }


// console.log(insertion_sort(arr))




// const insertion_sort = (arr) => {
//   debugger; 
//   for (let i = 1; i < arr.length; i++){
//     let number_to_insert = arr[i]
//     console.log('number_to_insert:', number_to_insert)
//     let j = i - 1
//     console.log('j', j)
//     while (j >= 0 && arr[j] > number_to_insert) {
//       arr[j + 1] = arr[j]
//       j = j - 1
//       console.log('j in while loop:', j)
//     }
//     arr[j + 1] = number_to_insert
//   }
//   return arr; 
// }

// console.log(insertion_sort(arr))

let arr = [8,20,-2,4,-6]
const quick_sort = (arr) => {
  debugger; 
  if (arr.length < 2) {
    return arr; 
  }
  let pivot = arr[arr.length - 1]
  let left = []
  let right = []
  for (let i = 0; i < arr.length - 1; i++){
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quick_sort(left), pivot ,...quick_sort(right)]
}

// console.log(quick_sort(arr))



const merge_sort = (arr) => {
  // push each item of the array into a new array
  // then I compare left and right
  // find the smallest number and move it to the right
  // keep moving it to the right unless and until left is completely empty
  if (arr.length < 2) {
    return arr; 
  }
  const mid = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, mid); 
  const rightArr = arr.slice(mid)
  return merge(merge_sort(leftArr), merge_sort(rightArr)); 
}


const merge = (leftArr, rightArr) => {
  const sorted_arr = []
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sorted_arr.push(leftArr.shift())
    } else {
      sorted_arr.push(rightArr.shift())
    }
  }
  return [...sorted_arr, ...leftArr, ...rightArr]; 
}






console.log(merge_sort([-6,20, -2, 4, 8]))