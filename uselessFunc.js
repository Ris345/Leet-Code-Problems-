const strictEquals = (a, b) => {
    if (Object.is(a, NaN) && Object.is(NaN, b)) {
        return false;
    } else if (Object.is(a, 0) && Object.is(a, -0)) {
        return true
    } else if (Object.is(a, -0) && Object.is(b, 0)) {
        return true
    }
    return Object.is(a, b)
}