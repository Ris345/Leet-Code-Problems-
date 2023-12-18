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



// check if the given string has all unique characters, return true if all characters are unique, if there are any repetitions return false.
// "cathy" -> true
// "catchy" -> false

let obj = {}
const unique_char = (str) => {
    debugger; 
    // push it in the obj somehow 
    for (let i = 0; i < str.length; i++){
        if (obj[str[i]]) {
            obj[str[i]] += 1
        } else {
            obj[str[i]] = 1
        }    
    }    
    //  now loop through the object to find the frequnecy of the obj 
    let frequnecy = Object.values(obj)
    for (let i = 0; i < frequnecy.length; i++) {
        if (frequnecy[i] > 1) {
            return false
        }
    }
    return true;
}

console.log(unique_char('catchy')); 





