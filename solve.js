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
let arr = new Array()
const multiply_number = (num, times) => {
    if (times === 1) {
        return num
    } else if (times > 1) {
        for (let i = 0; i < times; i++){
            // or create an array on the length of the times and  find the sum of an array 
            if (times !== i) {
                arr.push(num)
            } 
        }
    }
    var total = arr.reduce((x, y) => {
        return x + y
      },0);
      
    return total; 
}

console.log(multiply_number(8, 24)); 

