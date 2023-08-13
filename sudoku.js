let board = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

// var isValidSudoku = function (board) {
//   debugger;
//   const row = new Object();
//   console.log("row:", row);
//   const column = new Object();
//   console.log("column:", column);
//   const box = new Object();
//   console.log("box:", box);
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board.length; j++) {
//       const value = board[i][j];
//       console.log(value);
//       if (value !== ".") {
//         const boxid = Math.floor(i / 3) * 3 + Math.floor(j / 3);
//         console.log(boxid);
//         if (
//           row[`${i}-${value}`] ||
//           column[`${j}-${value}`] ||
//           box[`${boxid}-${value}`]
//         ) {
//           return false;
//         }
//         row[`${i}-${value}`] = true;
//         column[`${j}-${value}`] = true;
//         box[`${boxid}-${value}`] = true;
//       }
//     }
//   }
//   return true;
// };

// console.log(isValidSudoku(board));

//     0,   1,   2,   3,   4,   5,   6,   7,   8
// 0 ["5", "3", ".", ".", "7", ".", ".", ".", "."],
// 1 ["6", ".", ".", "1", "9", "5", ".", ".", "."],
// 2 [".", "9", "8", ".", ".", ".", ".", "6", "."],
// 3 ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
// 4 ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
// 5 ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
// 6 [".", "6", ".", ".", ".", ".", "2", "8", "."],
// 7 [".", ".", ".", "4", "1", "9", ".", ".", "5"],
// 8 [".", ".", ".", ".", "8", ".", ".", "7", "9"]

// var isValidSudoku = function(board) {
//   let row = new Object()
//   let column = new Object()
//   let box = new Object()
//   for (let i = 0; i < board.length; i++){
//     for (let j = 0; j < board.length; j++){
//       const value = board[i][j]
//       if (value !== '.') {
//         const boxidx = Math.floor(i / 3) * 3 + Math.floor(j / 3)
//         if (row[`$ {i}-{value}`] || column[`$ {j}-{value}`] || box[`$ {boxidx}-{value}`]) {
//           return false
//         }
//         row[`$ {i}-{value}`] = true
//         column[`$ {j}-{value}`] = true
//         box[`$ {boxidx}-{value}`] = true
//       }
//     }
//   }
//   return true;
// };

// var isValidSudoku = function (board) {
//   let row = new Object();
//   let column = new Object();
//   let box = new Object();
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board.length; j++) {
//       const value = board[i][j];
//       if (value !== ".") {
//         const boxid = Math.floor(i / 3) * 3 + Math.floor(j / 3);
//         if (
//           row[`$ {i}-{value}`] ||
//           column[`$ {j} - {value}`] ||
//           box[`$ {boxid}-{value}`]
//         ) {
//           return false;
//         }
//         row[`$ {i}-{value}`] = true;
//         column[`$ {j} - {value}`] = true;
//         box[`$ {boxid}-{value}`] = true;
//       }
//     }
//   }
//   return true;
// };

// console.log(isValidSudoku(board));

var isValidSudoku = function (board) {
  let row = new Object();
  let column = new Object();
  let box = new Object();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const value = board[i][j];
      if (value !== ".") {
        let boxid = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (
          row[`${i}-${value}`] ||
          column[`${j}-${value}`] ||
          box[`${boxid}-${value}`]
        ) {
          return false;
        }
        row[`${i}-${value}`] = true;
        column[`${j}-${value}`] = true;
        box[`${boxid}-${value}`] = true;
      }
    }
  }
  return true;
};

console.log(isValidSudoku(board));
