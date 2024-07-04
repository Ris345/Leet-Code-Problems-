let arr1 = [1,2,3,4]
let arr2 = [5, 6, 7, 9]


function merge_sort(arr1, arr2) {
   // two pointers i --> 0 , j ---> o
   // compare both values
//    arr[0] = arr2[0] 
    //
    //
    // edge case 
    
    let i = 0
    let j = 0
    const result = []
    while (i < arr1.length && j < arr2.length ) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }


    }
    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }
    return result; 
}


let arr_1 = [0, 1, 5, 9]
let arr_2 = [1, 2, 10]

console.log(merge_sort(arr_1, arr_2)); 



