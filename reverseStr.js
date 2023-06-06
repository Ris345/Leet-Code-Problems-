let arr = ["t", "h", "e", "s", "k", "y", "i", "s", "b", "l", "u", "e"];
let container = [];
function reverseStr(arr) {
  debugger;
  // loop back wards
  for (let i = arr.length - 1; i >= 0; i--) {
    container.push(arr[i]);
  }
  return container;
}

console.log(reverseStr(arr));

function reverseIntialStr() {}
