
const factorial = (n) => {
    let check = 0
    debugger; 
    if (n <= 1) {
        return 1
    } else {
        check =  n *  factorial(n - 1)
    }
    return check 
}


console.log(factorial(4))