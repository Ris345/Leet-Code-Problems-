let parenthesis = {
  "(": ")",
  "{": "}",
  "[": "]",
};

var isValid = function (s) {
    debugger;
    let stack = [];
    for (let k of s) {
        if (parenthesis[k]) {
            stack.push(parenthesis[k])
        } else if (stack.length >  0 && stack[stack.length - 1] === k) {
            stack.pop()
        }
    }
    return stack.length === 0; 
}


console.log(isValid('[}'))
