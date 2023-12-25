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
    if(time <= 0) {
        return 0;
    }

let product = n; 

for (let i = 1; i < time; i++){
    product += n 
}
return product; 
}

// console.log(multiply(8, 4))


// make the times declarative 
const multiply_unlimited_times = (num, times) => {
    // I can multiply as many times as possible 
    let times = []; 
    
    

}


console.log(multiply_unlimited_times(2, 8, 5)); 