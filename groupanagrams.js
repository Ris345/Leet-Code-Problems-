// let strs = ["eat","tea","tan","ate","nat","bat"]
// var groupAnagrams = function (strs) {
//     debugger;
//     //  iterate and find the group of anagrams
//     //  iterate through each item in an array
//     //  find the group of anagrams
//     // push it to a new arr
//     let sorted_arr = []
//     let outer_arr = []
//     let another_arr = []
//     for (let i = 0; i < strs.length; i++){
//         let sorted_str = strs[i].split("").sort().join('')
//         sorted_arr.push(sorted_str)
//     }
//     for (let k = 0; k < sorted_arr.length - 1; k++){
//         if (sorted_arr[k] === sorted_arr[k + 1]) {
//             outer_arr.push(sorted_arr)
//         } else {
//             another_arr.push(sorted_arr[k])
//         }
//         another_arr.push(strs[strs.length - 1]);
//     }
//     return outer_arr;
// }

// console.log(groupAnagrams(strs))

// var groupAnagrams = function(strs) {
//     debugger;
//     const obj = {}
//     for (const str of strs){
//         const sorted = str.split('').sort().join('');

//         if(!obj[sorted]){
//             obj[sorted] = [str]
//         } else {
//             obj[sorted].push(str);
//         }
//     }
//     return Object.values(obj);
// };

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

// var groupAnagrams = function(strs) {
//     let obj = {}
//     for (const str of strs) {
//         const sorted_str = str.split('').sort().join('')
//         if (!obj[sorted_str]) {
//             obj[sorted_str] = [str]
//         } else {
//             obj[sorted_str].push(str);
//         }
//     }
// return Object.values(obj)
// };

// console.log(groupAnagrams(strs))

// var groupAnagrams = function(strs) {
//     let obj = {}
//     for (const str of strs) {
//         let sorted_str = str.split('').sort().join('')
//         if (!obj[sorted_str]) {
//             obj[sorted_str] = [str]
//         } else {
//             obj[sorted_str].push(str)
//         }
//     }
//     return Object.values(obj)
// };

// console.log(groupAnagrams(strs))
// var groupAnagrams = function(strs) {
//     let obj = {}
//     for (const str of strs) {
//         let sorted_str = str.split('').sort().join('')
//         if (!obj[sorted_str]) {
//             obj[sorted_str] = [str]
//         } else {
//             obj[sorted_str].push(str)
//         }
//     }
//     return Object.values(obj)
// };

// console.log(groupAnagrams(strs))

var groupAnagrams = function (strs) {
  let obj = {};
  for (const str of strs) {
    let sorted_str = str.split("").sort().join();

    if (!obj[sorted_str]) {
      obj[sorted_str] = [str];
    } else {
      obj[sorted_str].push(str);
    }
  }
  return Object.values(obj);
};

console.log(groupAnagrams(strs));

var groupAnagrams = function (strs) {
  let obj = {};
  for (const str of strs) {
    let sorted = str.split("").sort().join("");
    if (!obj[sorted]) {
      obj[sorted] = [str];
    } else {
      obj[sorted].push(str);
    }
  }
  return Object.values(obj);
};

var groupAnagrams = function (strs) {
  let obj = {};
  for (const str of strs) {
    let sorted = str.split("").sort().join("");
    if (!obj[sorted]) {
      obj[sorted] = [str];
    } else {
      obj[sorted].push(str);
    }
  }
  return Object.values(obj);
};

var groupAnagrams = function (strs) {
  let obj = {};
  for (const str of strs) {
    let sorted = str.split("").sorted().join();
    if (!obj[sorted]) {
      obj[sorted] = [str];
    } else {
      obj[sorted].push(str);
    }
  }
  Object.values(obj);
};


// repracticing the problem 
var groupAnagrams = function(strs) {
  let obj = {}
  for (const str of strs) {
    let sorted = str.split('').sort().join(); 
    if (!obj[sorted]) {
       obj[sorted] = [str]
    } else{
        obj[sorted].push(str)
    }
  }
  return Object.values(obj)
};


var groupAnagrams = function(strs) {
  let obj = {}
  for (const str of strs) {
    let sorted = str.split('').sort().join()
    if (!obj[sorted]) {
      obj[sorted] = [str]
    } else {
        obj[sorted].push(str)
    }
  }
  return Object.values(obj); 
};




















