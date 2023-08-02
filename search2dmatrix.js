const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

var searchMatrix = function (matrix, target) {
    debugger; 
  // loop through the matrix
  //
  let bool = false;
  for (let i = 0; i < matrix.length; i++) {
    let matrix_num = matrix[i];
    for (let j = 0; j < matrix_num.length; j++) {
      if (target === matrix_num[j]) {
        bool = true;
      } else {
        continue;
      }
    }
  }
  return bool;
};

console.log(searchMatrix(matrix, 3));
