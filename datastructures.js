// const arr1 = ['a','b','c','x']
// const arr2 = ['z,', 'y' , 'x']

// // function similarItem(){
// //    debugger;
// //   // loop for arr1
// //    for (let i = 0; i < arr1.length; i++){
// //      for (let j = 0; j < arr2.length; j++){
// //        if (arr1[i] == arr2[j]){
// //      return true;
// //        }
// //      }
// //    }
// //   return false
// // }

// // console.log(similarItem())

// // function similarItem(arr1, arr2){
// //   let map = {};
// //   for(let i = 0; i < arr1.length; i++){
// //     if(!map[arr1[i]]){
// //       const item = arr1[i]
// //       map[item] = true;
// //     }
// //   }
// //   for (let j = 0; j < arr2.length; j++){
// //     if (map[arr2[j]]){
// //        return true;
// //     }
// //   }
// //   return false;
// // }

// //  console.log(similarItem(arr1,arr2));

// // function similarItem (arr1,arr2){
// //   return arr1.some(item => arr1.includes(item))
// // }

// // class Player {
// //   constructor (name, type){
// //     console.log(this)
// //     this.name = name
// //     this.type = type
// //   }
// //   introduce (){
// //     console.log(`Hi ${this.name} I'm a ${this.type}`)
// //   }
// // }

// // class Wizard extends Player{
// //   constructor(name, type){
// //     super(name, type)
// //     console.log('wizard', this)
// //   }
// //   play (){
// //     console.log(`WEEEEEEEEEEEEEE ${this.type}`)
// //   }
// // }

// // // const wizard1 = new Wizard('Jinko', 'Darkness');
// // // const wizard2 = new Wizard('Minko', 'Culzad');

// // class MyArray{
// //   constructor(){
// //     this.length = 0
// //     this.data = {};
// //   }
// //   get(index){
// //     return this.data[index]
// //   }
// //   push(item){
// //     this.data[this.length] = item;
// //     this.length++
// //     return this.length;
// //   }
// //   pop(){
// //     const lastItem = this.data[this.length - 1]
// //     delete this.data[this.length - 1];
// //     this.length--
// //     return lastItem;
// //   }
// //   delete(index){
// //     const item = this.data[index];
// //     this.shiftItems(index);
// //   }
// //   shiftItems(index){
// //      for (let i = index; i < this.length - 1; i++){
// //        this.data[i] = this.data[i + 1];
// //      }
// //     delete this.data[this.length - 1];
// //     this.length--
// //   }
// // }

// // const newArray = new MyArray();
// // newArray.push('coolbeans');
// // newArray.push('jinkoCookie');
// // newArray.push('butterLife')
// // // newArray.pop();
// // // newArray.pop();
// // newArray.delete(0);
// // console.log(newArray);

// // one way  of doing it....
// function reverseStr (str){
//   //always think about the edge cases
//   return str.split('').reverse().join('');
// }
// //console.log(reverseStr('Hi my name is Rishav'))

// // another way of doing it
// function reverse (str){
//   let string = ''
//    for(let i = str.length - 1 ; i > 0; i--){
//         string += str[i]
//    }
//   return string;
// }

// //console.log(reverse('Hi my name is Rishav'))

// // modern way of approaching this problem
// const reverse1 = str => str.split('').reverse().join('');

// //console.log(reverse1('Hi my name is Rishav'))

// // even cooler approach

// const reverse2 = str => [...str].reverse().join('')

// console.log(reverse2('Hi my name is Rishav'))

//mergeSortedArrays([0,3,4,31], [4,6,30])
//[0,3,4,4,6,30,31]

// one way of doing it
function mergeSortedArrays(...arr) {
  if (!arr) return "Try Again with the correct data type!";
  const arrFlat = arr.flat();
  return arrFlat.sort((x, y) => x - y);
}

//console.log(mergeSortedArrays([0,3,4,31],[4,6,30]))

//another way
function mergeSortedArrays2(...arr) {
  // edge cases
  if (arr.length === 0) return arr;
  return arr.flat().sort((x, y) => x - y);
}

console.log(mergeSortedArrays2([0, 3, 4, 31], [4, 6, 30]));

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  set fruit(item) {
    return this.item;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      // console.log(hash)
    }
    return hash;
  }
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
console.log(myHashTable.set("grapes", 10000));
console.log(myHashTable.set("apples", 54));
console.log(myHashTable.set("oranges", 2));
console.log(myHashTable.get("apples"));
myHashTable.keys();

// time complexity O(n2) -- not good
let num = [2, 3, 4, 5];
function checkDuplicate(num) {
  debugger;
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length - 1; j++) {
      if (num[i] == num[j]) {
        return num[i];
      }
    }
  }
  return undefined;
}
// console.log(checkDuplicates(num))

// optimized solution using hashMap
function checkDuplicates(num) {
  let obj = {};
  for (let i = 0; i < num.length; i++) {
    if (obj[nums[i]] !== undefined) {
      return num[i];
    } else {
      obj[num[i]] = i;
    }
    console.log(obj);
  }
  return undefined;
}

// console.log(checkDuplicate(num))
// let arr = [2,1,1,2,3,5,1,2,4]

// function num(arr){
//   debugger; 
//   let newArr = []
//  let obj = {}
//  for(let i = 0; i < arr.length; i++){
//     if (obj.hasOwnProperty(arr[i])){
//       newArr.push(arr[i])
//     } 
//  }
//   return newArr[0]
// }

// O(n2)

// function num(arr){
//   let newArr = []
//   debugger; 
//   let obj = {}
  
//    for (let i = 0; i < arr.length; i++){
//      for(let j = i + 1; j < arr.length; j++){
//        if(arr[i] === arr[j]){
//            obj[arr[i]] = 1
//        } 
//      }
   
//    }
//    // return undefined
//   return obj
// }


// console.log(num(arr));



// 10 ---> 5 -----> 16

let mylinkedList = {
  head: {
    value: 10,
    next: {
     value: 5, 
     next: {
       value: 16,
       next:{
         value: null
       }
     }
  }
  }
}


class LinkedList {
  constructor(value){
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1
  }
  append(value){
//     code 
  }
}

let mylinkedlist = new  LinkedList(10);

console.log(mylinkedlist)
