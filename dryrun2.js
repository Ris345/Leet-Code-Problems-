// function selectionSort(array) {
//     for(var i = 0; i < array.length; i++) {
//     var lowestNumberIndex = i;
//     for(var j = i + 1; j < array.length; j++) {
//     if(array[j] < array[lowestNumberIndex]) {
//     lowestNumberIndex = j;
//     }
//     }
//     if(lowestNumberIndex != i) {
//     var temp = array[i];
//     array[i] = array[lowestNumberIndex];
//     array[lowestNumberIndex] = temp;
//     }
//     }
//     return array;
//     }
// array = [4,2,7,1,3]

// iteration = 0 outer
// iteration = 1  inner
// function selectionSort(array) {
//     for(var i = 0; i < array.length; i++) { (0, 0 < 5; 0++)
//     var lowestNumberIndex = i; 0 
//     for(var j = i + 1; j < array.length; j++) { (1, 1 < 5; 1++)
//     if(array[j] < array[lowestNumberIndex]) { 2 < 4
//     lowestNumberIndex = j; // 1 
//     }
//     }
//     if(lowestNumberIndex != i) {  1 != 0 
//     var temp = array[i]; 4 
//     array[i] = array[lowestNumberIndex]; 4 = 1
//     array[lowestNumberIndex] = temp; 2 = 4 
//     }
//     }
//     return array;
//     }
// array = [4,2,7,1,3]


// iteration = 0 outer
// iteration = 2 inner
// function selectionSort(array) {
//     for(var i = 0; i < array.length; i++) { (0, 0 < 5; 0++)
//     var lowestNumberIndex = i; 1
//     for(var j = i + 1; j < array.length; j++) { (2; 2 < 5; 2++)
//     if(array[j] < array[lowestNumberIndex]) { 7 < 2 (not going to execute)
//     lowestNumberIndex = j; // 2
//     }
//     }
//     if(lowestNumberIndex != i) {  1 != 0 
//     var temp = array[i]; 4 
//     array[i] = array[lowestNumberIndex]; 4 = 1
//     array[lowestNumberIndex] = temp; 2 = 4 
//     }
//     }
//     return array;
//     }
// array = [4,2,7,1,3]



// iteration = 0 outer
// iteration = 3 inner
// function selectionSort(array) {
//     for(var i = 0; i < array.length; i++) { (0, 0 < 5; 0++)
//     var lowestNumberIndex = i; 1
//     for(var j = i + 1; j < array.length; j++) { (3; 3 < 5; 3++)
//     if(array[j] < array[lowestNumberIndex]) { 1 < 7
//     lowestNumberIndex = j; // 3 
//     }
//     }
//     if(lowestNumberIndex != i) {  1 != 0 
//     var temp = array[i]; 4 
//     array[i] = array[lowestNumberIndex]; 4 = 1
//     array[lowestNumberIndex] = temp; 2 = 4 
//     }
//     }
//     return array;
//     }
// array = [4,2,7,1,3]


// iteration = 0 outer
// iteration = 4 inner
// function selectionSort(array) {
//     for(var i = 0; i < array.length; i++) { (0, 0 < 5; 0++)
//     var lowestNumberIndex = i; 3
//     for(var j = i + 1; j < array.length; j++) { (4; 4 < 5; 4++)
//     if(array[j] < array[lowestNumberIndex]) { 3 < 1 (will not execute)
//     lowestNumberIndex = j; 
//     }
//     }
//     if(lowestNumberIndex != i) {  1 != 0 
//     var temp = array[i]; 4 
//     array[i] = array[lowestNumberIndex]; 4 = 1
//     array[lowestNumberIndex] = temp; 2 = 4 
//     }
//     }
//     return array;
//     }
// array = [4,2,7,1,3]


// iteration = 0 outer
// iteration = 5 inner
// function selectionSort(array) {
//     for(var i = 0; i < array.length; i++) { (0, 0 < 5; 0++)
//     var lowestNumberIndex = i; 3
//     for(var j = i + 1; j < array.length; j++) { (5; 5 < 5; 5++) will not execute 
//     if(array[j] < array[lowestNumberIndex]) { 3 < 1 (will not execute)
//     lowestNumberIndex = j; 
//     }
//     }
//     if(lowestNumberIndex != i) {  1 != 0 
//     var temp = array[i]; 4 
//     array[i] = array[lowestNumberIndex]; 4 = 1
//     array[lowestNumberIndex] = temp; 2 = 4 
//     }
//     }
//     return array;
//     }
// array = [4,2,7,1,3]



// def every_other(array):
//     new_array = []
//     for index, element in enumerate(array):
//         if index % 2 == 0:
//             new_array.append(element)
//     return new_array


// def every_other(array):
//     new_array = []
//     index = 0
//     while index < len(array):
//         new_array.append(array[index])
//         index += 2
//     return new_array



// iteration 0 
// array = [4,2,7,1,3]
// def insertion_sort(array):
//     for index in range(1, len(array)): //  (1, 5)
//         position = index // 1
//         temp_value = array[index]  // 2 
//         while position > 0 and array[position - 1] > temp_value: // 1 > 0 and 0 > 2 // condition is falsy 
//             array[position] = array[position - 1] // 
//             position = position - 1
//         array[position] = temp_value


// iteration 1 
// array = [4,2,7,1,3]
// def insertion_sort(array):
//     for index in range(1, len(array)): //  (1, 5)
//         position = index // 2
//         temp_value = array[index]  // 7 
//         while position > 0 and array[position - 1] > temp_value: // 2 > 0 and 2 > 7 // will not execute 
//             array[position] = array[position - 1]
//             position = position - 1
//         array[position] = temp_value


// iteration 2
// array = [4,2,7,1,3]
// def insertion_sort(array):
//     for index in range(1, len(array)): //  (1, 5)
//         position = index // 3 
//         temp_value = array[index]  // 1
//         while position > 0 and array[position - 1] > temp_value: // 3 > 0 and 7 > 1 // this condition executes 
//             array[position] = array[position - 1] // array[3] = array[3 - 1] // 1 = 7 //  one becomes 7 [4,2,7,7,3]
//             position = position - 1 // 3 - 1 = 2 // new position is 2 
//         array[position] = temp_value // array[2] // 7 = 1 








