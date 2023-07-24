// output ---> ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// var letterCombinations = function (digits) {
//   debugger;
//   let arr = [];
//   let combination_arr = [];
//   let phone_number_data = {
//     2: "abc",
//     3: "def",
//     4: "ghi",
//     5: "jkl",
//     6: "mno",
//     7: "pqrs",
//     8: "tuv",
//     9: "wxyz",
//   };

//   for (let i = 0; i < digits.length; i++) {
//     for (let key in phone_number_data) {
//       if (digits[i] === key) {
//         arr.push(phone_number_data[key]);
//       }
//     }
//   }

//   let strings_combination = arr.toString().split("");
//   let clean_str = strings_combination.filter((x) => {
//     return x != ",";
//   });

//   if (digits.length === 1) {
//     return clean_str;
//   }
//   let k = 0
//   for ( k = 0; k < clean_str.length; k++) {
//     for (let j = 1; j < clean_str.length; j++) {
//       // each let,ter has 3 combinations
//       // it's better to have to different arrs
//       if (combination_arr.length - 1 < 10) {
//         combination_arr.push(clean_str[k] + clean_str[j]);
//       }
//     }
//   }
//   return combination_arr;
// };

// console.log(letterCombinations("23"));

// var letterCombinations = function (digits) {
//   debugger;
//       let phone_number_data = {
//     2: ["a","b","c"],
//     3: ["d","e","f"],
//     4: ["g","h","i"],
//     5: ["j","k","l"],
//     6: ["m","n","o"],
//     7: ["p","q","r","s"],
//     8: ["t","u","v"],
//     9: ["w","x","y","z"],
//   };
//     // two seperate arrays
//     // combine them toegether, to find possible pairs
//   let test = ''
//   let key = Object.keys(phone_number_data)
//   let value = Object.values(phone_number_data)
//   for (let i = 0; i < digits.length; i++){
//     for (let j = 0; j < key.length; j++){
//       if (digits[i] === key[j]) {
//         test +=  value[i]
//       }
//     }
//   }
// return test
// };

// console.log(letterCombinations("23"))

// var letterCombinations = function (digits) {
//   debugger;
//   if (digits.length === 0) return [];
//   const map = {
//       '2': 'abc',
//       '3': 'def',
//       '4':'ghi',
//       '5':'jkl',
//       '6':'mno',
//       '7':'pqrs',
//       '8':'tuv',
//       '9':'wxyz'
//   };
// const output = [];

// const backtrack = (curr, i) => {
//       if (i > digits.length - 1){
//           output.push(curr);
//           return;
//       }
//       const letters = map[digits[i]];
//       for (const l of letters){
//           backtrack(curr + 1, i + 1)
//       }
// }
// backtrack("", 0)
// return output;
// };

// console.log(letterCombinations("2"))

var letterCombinations = function (digits) {
  debugger;
  if (digits.length === 0) return [];
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let output = [];
  const backtrack = (i, curr) => {
    console.log("index", i);
    console.log("string", curr);
    if (curr.length === digits.length) {
      output.push(curr);
      return;
    }
    const letters = map[digits[i]];
    for (const l of letters) {
      backtrack(i + 1, curr + l);
    }
  };
  if (digits) {
    backtrack(0, "");
  }
  return output;
};

console.log(letterCombinations("23"));
