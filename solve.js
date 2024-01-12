// //  write a function that multiply's number without the multiplication sign.

// let arr = new Array()
// const multiply_number = (num, times) => {
//     if (times === 1) {
//         return num
//     } else if (times > 1) {
//         for (let i = 0; i < times; i++){
//             // or create an array on the length of the times and  find the sum of an array
//             if (times !== i) {
//                 arr.push(num)
//             }
//         }
//     }
//     var total = arr.reduce((x, y) => {
//         return x + y
//       },0);

//     return total;
// }

// console.log(multiply_number(8, 24));

// 8 X 2 = 16 ---> 8 + 8 = 16 or 8 X 3 = 24 ---> 24 8 + 8 + 8 = 24

//  optimize
// let arr = new Array()
// const multiply_number = (num, times) => {
//     if (times === 1) {
//         return num
//     } else if (times > 1) {
//         for (let i = 0; i < times; i++){
//             // or create an array on the length of the times and  find the sum of an array
//             if (times !== i) {
//                 arr.push(num)
//             }
//         }
//     }
//     var total = arr.reduce((x, y) => {
//         return x + y
//       },0);

//     return total;
// }

// console.log(multiply_number(8, 24));

// const optimize_multiply_number = (n, t) => {
//     if (t === 0) {
//         return 0
//     }
//     if (t === 1) {
//         return n;
//     } else {
//         let product = n
//         for (let i = 1; i < t; i++){
//            product += n
//     }
//     return product;
//     }

// }

// console.log(optimize_multiply_number(8,4,5,5))

// const multiply_number = (num, times) => {
//     debugger;
//     if (times <= 0) {
//         return 0; // If times is 0 or negative, the result should be 0
//     } else {
//         let result = num;
//         for (let i = 1; i < times; i++) {
//             result += num;
//         }
//         return result;
//     }
// }

// console.log(multiply_number(8,2));

// check if the given string has all unique characters, return true if all characters are unique, if there are any repetitions return false.
// "cathy" -> true
// "catchy" -> false

// let obj = {}
// const unique_char = (str) => {
//     debugger;
//     // push it in the obj somehow
//     for (let i = 0; i < str.length; i++){
//         if (obj[str[i]]) {
//             obj[str[i]] += 1
//         } else {
//             obj[str[i]] = 1
//         }
//     }
//     //  now loop through the object to find the frequnecy of the obj
//     let frequnecy = Object.values(obj)
//     for (let i = 0; i < frequnecy.length; i++) {
//         if (frequnecy[i] > 1) {
//             return false
//         }
//     }
//     return true;
// }

// console.log(unique_char('catchy'));

// now as a challenge tying multiplying more than 2 numbers
// const multiplication = (nums, time) => {
// if (time)

// }

// const mulltiply without the multiplication sign

// const multiplication = (n, t) => {
//     if (t <= 0) {
//     return 0
//     }
//     if (t === 1) {
//         return num
//     }
//     let product = n;
//     for (let i = 1; i < t; i++){
//         product += n
//     }
//     return product;

// }

// console.log(multiplication(8, 2))

//  the parameters need to be flexible -- instead of static the user should be able to add as many paremetrs as poossible

const multiply = (n, time) => {
  if (time <= 0) {
    return 0;
  }

  let product = n;

  for (let i = 1; i < time; i++) {
    product += n;
  }
  return product;
};

// console.log(multiply(8, 4))


//  
 
// make the times declarative
const multiply_unlimited_times = (num, times) => {
  debugger;
  // I can multiply as many times as possible
  // edge case
  if (num <= 0) {
    return num;
  }
  let product = num;
  // unpack the values from the array
  for (let i = 1; i < times; i++) {
    product += num;
  }
  return product;
  // goal is to multiply the num as many times as possible
  // so adding the times would not solve the problem
  // because 2 X 8 X 1 is not the same as 2 X 9
  // so that would not work
  // in the case of 2 X 8 X 1 ---> 16 X 1 = 16
};

// console.log(multiply_unlimited_times(2, [8, 2]));

// pretty close will work on it later


// 2 X * X 1 = 16 
// two loops 
// one inner 
// oner outer 
// arr.reduce()
// map 
// find 
// reverse 
// splice


// const multiply_without_multiply = (n, t) => {
//   debugger; 
//    // we need  to use the arr.reduce method to solve this problem 
//    // in this case t is an array
//    // output rg 16 -----> 8 X 2 = 16 challenege we are solving this problem without using a multiplicatio sign
//    // 
//   let product = n
//   let times_a_number_is_added = 0
//   // brute force approach 
//   // if the length of the arr > 1 run  the loop other wise just add the number 
//   if (t.length > 1) {
//     // run the loop thats nested
//     for (let i = 0; i < t.length; i++){
//       times_a_number_is_added += t[i]
//       console.log(times_a_number_is_added)
//       if (times_a_number_is_added <= 0) {
//         return 0 
//       } else if (times_a_number_is_added >= 1 ) {
//         for (let k = 1; k < times_a_number_is_added; k++){
//            product += n
//         }
//       } else 
//      // calculate the product here 
//         return 1 
//     }
    
//   } else {
//     // run the other loop 
//     for (let i = 0; i < t.length; i++){
//         product += n
//     }    
//   }
//   return product; 
// }

// console.log(multiply_without_multiply(2, [4, 4]))




/// step one 2 
// step two X 
// step 3 the code counts the number of times the number should be added


// 2 X 4 X 4 = 16 X 2 = 32 

// each number if it is not the end becomes a n the number after the n is always a times 


const multiply_without_multiply = (n, t) => {
  debugger; 
  // if there are multiple numbers to multiply 
  let product = n; 
  if (t.length > 1) {
    // check the array first if there are numbers with 0 or 1 
    // for (let i = 0; i < t.length; i++){
    //  // iterate over each item to see if there are zeros or 1 
    //   if (t[i] <= 0) {
    //     return 0
    //   } else if (t[i] === 1) {
    //     return 1 
    //   }
    // }
    let total_timess =  t.reduce((x, y) => {
      if (y <= 0) {
        return 0
      } else if (y === 1) {
        return 1 
      } else {
        return x + y
      }
    }) 
    for (let i = 1; i < total_timess; i++){
      product += n 
    }
   }
  return product; 
}

console.log(multiply_without_multiply(2, [4,4]))