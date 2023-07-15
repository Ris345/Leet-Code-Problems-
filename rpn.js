// let validOperators = ["+", "-", "*", "/"];
// let tokens = ["2", "1", "+", "3", "*"];
// let stack = [];
// let num = 0;
// let operator = "";
// var evalRPN = function (tokens) {
//   debugger;
//   // given an array of strings tokens
//   // return the reverse polish notation
//   // if number push it in the stack nd continue that for number
//   //  if operator take the number out and calculate and then push the result to the stack
//   // iterate through tokens
//   for (let i = 0; i < tokens.length; i++) {
//     if (!isNaN(tokens[i])) {
//       stack.push(tokens[i]);
//     } else if (typeof tokens[i] == "string") {
//         stack.pop()
//         if (stack.length > 0) {
//             stack.pop()
//         }
//     }
//       console.log(stack)
//   }
// };

// console.log(evalRPN(tokens));



const num = [1, 2, 3, 4, 5]

for (let i = 0; i < num.length; i++){
    for (let j = 0; j < num.length; j++){
            console.log(i ,j )
    }
}