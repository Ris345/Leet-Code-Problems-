let parenthesis = {
  "(": ")",
  "{": "}",
  "[": "]",
};

// var isValid = function (s) {
//     debugger;
//     let stack = [];
//     for (let k of s) {
//         if (parenthesis[k]) {
//             stack.push(parenthesis[k])
//         } else if (stack.length >  0 && stack[stack.length - 1] === k) {
//             stack.pop()
//         }
//     }
//     return stack.length === 0; 
// }


// console.log(isValid('[}'))




var isValid = function(s) {
    let container = {
        '(': ')', 
        '[': ']', 
        '{':'}'
    }
    let stack = []
    for (const c in s){
        if(container[c]){
            stack.push(container[c])
        } else if (stack.length = 0 && stack[stack.length - 1] === c) {
            stack.pop()
        }
    }
     return stack.length === 0
};


console.log(isValid('[]'))




var isValid = function(s) {
    let container = {
        '(': ')', 
        '[': ']', 
        '{': '}'
    }
    const stack = []
    for (const  ck in s) {
        if (container[ck]) {
              stack.push(ck)
        } else if (stack.length === 0 && stack[stack.length - 1] === ck) {
            stack.pop()
          }
    }
    return stack.length === 0; 
 };

















