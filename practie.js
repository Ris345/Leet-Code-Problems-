// const removeItem = (arr1, x) => {
//     let arr = []
//   for (let i = 0; i < arr1.length; i++) {
//     if (i === x) {
//       arr1.splice(i, 1);
//     }
//   }
//     arr.push(...arr1)
//     console.log(arr1.length)
//     return arr
// };

// const removeItem = (arr1, n) => {
//     console.log(arr1.length)
//    return  arr1.filter((x,y) => {
//         if (n !== y) return x
//     })
// }

// // Test 1
// let arr1 = ["a", "b", "c"];
// console.log(removeItem(arr1, 1)); // ['a', 'c']
// console.log(arr1 !== removeItem(arr1, 1)); // true
// console.log(arr1.length)


// repracticing old problems  

// // test case hello  ---> Hello
// so far this function capitalizes one word only
function capitalize(str) {
  debugger;
  // split the string
  // iterate through the items in the array
  // instantiate a new variable  item = ' '
  // add it to the new variable
  let breakStr = str.split("");
  let i = 0;
  let item = "";
  for (i; i < breakStr.length; i++) {
    item += str[i];
  }
  let upperCaseWrd = item.charAt(0).toUpperCase();
  let lowerCaseItems = item.slice(1, i);
  return upperCaseWrd + lowerCaseItems;
}

// console.log(capitalize("k"))

// test case hello world --> Hello World
function capitalizemoreWords(str) {
  let capLetter = "";
  let splitStr = str.split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    capLetter += splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  let test = new Array(capLetter);
  return test.join(",");
}

// console.log(capitalizemoreWords("give me coding job"));


const strs = ["eat","tea","tan","ate","nat","bat"] 
 
var groupAnagrams = function(strs) {
    // if anagramas are similar group them and push them into a new array
    // make a nested array 
    // to check if a word is anagram sort it then compare with the word 
    const words = strs.sort() 
    const arr = []
    let i = 0
    let len = words.length 
    for ( i;  i < len; i++){
            arr.push(words[i])
            console.log(arr)

    }
};