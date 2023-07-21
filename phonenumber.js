// output ---> ["ad","ae","af","bd","be","bf","cd","ce","cf"]
var letterCombinations = function (digits) {
  debugger;
  let arr = [];
  let combination_arr = [];
  let phone_number_data = {
    1: null,
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let number_to_check = "";
  for (let i = 0; i < digits.length; i++) {
    for (let key in phone_number_data) {
      if (digits[i] === key) {
        arr.push(phone_number_data[key]);
      }
    }
  }

  let strings_combination = arr.toString().split("");
  let clean_str = strings_combination.filter((x) => {
    return x != ",";
  });

  for (let i = 0; i < clean_str.length; i++) {
    for (let j = 3; j < clean_str.length; j++) {
      combination_arr.push(clean_str[i] + clean_str[j]);
    }
  }
  return combination_arr;
};

console.log(letterCombinations("23"));
