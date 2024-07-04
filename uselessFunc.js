
// challenge: write a  function that does the same thing as a === b but without the use of ==, === or !== 
const strictEquals = (a, b) => {
        if (Object.is(a, NaN) && Object.is(NaN, b)) {
                return false; 
        } else if (Object.is(a, 0) && Object.is(0, b) || Object.is(a, -0) && Object.is(-0, b)) {
            return true 
        } 
            return Object.is(a,b) 
        

}


console.log(strictEquals(2,3))