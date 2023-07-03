// // const arr1 = ['a','b','c','x']
// // const arr2 = ['z,', 'y' , 'x']

// // // function similarItem(){
// // //    debugger;
// // //   // loop for arr1
// // //    for (let i = 0; i < arr1.length; i++){
// // //      for (let j = 0; j < arr2.length; j++){
// // //        if (arr1[i] == arr2[j]){
// // //      return true;
// // //        }
// // //      }
// // //    }
// // //   return false
// // // }

// // // console.log(similarItem())

// // // function similarItem(arr1, arr2){
// // //   let map = {};
// // //   for(let i = 0; i < arr1.length; i++){
// // //     if(!map[arr1[i]]){
// // //       const item = arr1[i]
// // //       map[item] = true;
// // //     }
// // //   }
// // //   for (let j = 0; j < arr2.length; j++){
// // //     if (map[arr2[j]]){
// // //        return true;
// // //     }
// // //   }
// // //   return false;
// // // }

// // //  console.log(similarItem(arr1,arr2));

// // // function similarItem (arr1,arr2){
// // //   return arr1.some(item => arr1.includes(item))
// // // }

// // // class Player {
// // //   constructor (name, type){
// // //     console.log(this)
// // //     this.name = name
// // //     this.type = type
// // //   }
// // //   introduce (){
// // //     console.log(`Hi ${this.name} I'm a ${this.type}`)
// // //   }
// // // }

// // // class Wizard extends Player{
// // //   constructor(name, type){
// // //     super(name, type)
// // //     console.log('wizard', this)
// // //   }
// // //   play (){
// // //     console.log(`WEEEEEEEEEEEEEE ${this.type}`)
// // //   }
// // // }

// // // // const wizard1 = new Wizard('Jinko', 'Darkness');
// // // // const wizard2 = new Wizard('Minko', 'Culzad');

// // // class MyArray{
// // //   constructor(){
// // //     this.length = 0
// // //     this.data = {};
// // //   }
// // //   get(index){
// // //     return this.data[index]
// // //   }
// // //   push(item){
// // //     this.data[this.length] = item;
// // //     this.length++
// // //     return this.length;
// // //   }
// // //   pop(){
// // //     const lastItem = this.data[this.length - 1]
// // //     delete this.data[this.length - 1];
// // //     this.length--
// // //     return lastItem;
// // //   }
// // //   delete(index){
// // //     const item = this.data[index];
// // //     this.shiftItems(index);
// // //   }
// // //   shiftItems(index){
// // //      for (let i = index; i < this.length - 1; i++){
// // //        this.data[i] = this.data[i + 1];
// // //      }
// // //     delete this.data[this.length - 1];
// // //     this.length--
// // //   }
// // // }

// // // const newArray = new MyArray();
// // // newArray.push('coolbeans');
// // // newArray.push('jinkoCookie');
// // // newArray.push('butterLife')
// // // // newArray.pop();
// // // // newArray.pop();
// // // newArray.delete(0);
// // // console.log(newArray);

// // // one way  of doing it....
// // function reverseStr (str){
// //   //always think about the edge cases
// //   return str.split('').reverse().join('');
// // }
// // //console.log(reverseStr('Hi my name is Rishav'))

// // // another way of doing it
// // function reverse (str){
// //   let string = ''
// //    for(let i = str.length - 1 ; i > 0; i--){
// //         string += str[i]
// //    }
// //   return string;
// // }

// // //console.log(reverse('Hi my name is Rishav'))

// // // modern way of approaching this problem
// // const reverse1 = str => str.split('').reverse().join('');

// // //console.log(reverse1('Hi my name is Rishav'))

// // // even cooler approach

// // const reverse2 = str => [...str].reverse().join('')

// // console.log(reverse2('Hi my name is Rishav'))

// //mergeSortedArrays([0,3,4,31], [4,6,30])
// //[0,3,4,4,6,30,31]

// // one way of doing it
// function mergeSortedArrays(...arr) {
//   if (!arr) return "Try Again with the correct data type!";
//   const arrFlat = arr.flat();
//   return arrFlat.sort((x, y) => x - y);
// }

// //console.log(mergeSortedArrays([0,3,4,31],[4,6,30]))

// //another way
// function mergeSortedArrays2(...arr) {
//   // edge cases
//   if (arr.length === 0) return arr;
//   return arr.flat().sort((x, y) => x - y);
// }

// console.log(mergeSortedArrays2([0, 3, 4, 31], [4, 6, 30]));

// class HashTable {
//   constructor(size) {
//     this.data = new Array(size);
//   }
//   set fruit(item) {
//     return this.item;
//   }

//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash = (hash + key.charCodeAt(i) * i) % this.data.length;
//       // console.log(hash)
//     }
//     return hash;
//   }
//   set(key, value) {
//     let address = this._hash(key);
//     if (!this.data[address]) {
//       this.data[address] = [];
//     }
//     this.data[address].push([key, value]);
//     return this.data;
//   }
//   get(key) {
//     let address = this._hash(key);
//     const currentBucket = this.data[address];
//     if (currentBucket) {
//       for (let i = 0; i < currentBucket.length; i++) {
//         if (currentBucket[i][0] === key) {
//           return currentBucket[i][1];
//         }
//       }
//     }
//     return undefined;
//   }
//   keys() {
//     const keysArray = [];
//     for (let i = 0; i < this.data.length; i++) {
//       if (this.data[i]) {
//         keysArray.push(this.data[i][0][0][0]);
//       }
//     }
//     return keysArray;
//   }
// }

// const myHashTable = new HashTable(50);
// console.log(myHashTable.set("grapes", 10000));
// console.log(myHashTable.set("apples", 54));
// console.log(myHashTable.set("oranges", 2));
// console.log(myHashTable.get("apples"));
// myHashTable.keys();

// // time complexity O(n2) -- not good
// let num = [2, 3, 4, 5];
// function checkDuplicate(num) {
//   debugger;
//   for (let i = 0; i < num.length; i++) {
//     for (let j = i + 1; j < num.length - 1; j++) {
//       if (num[i] == num[j]) {
//         return num[i];
//       }
//     }
//   }
//   return undefined;
// }
// // console.log(checkDuplicates(num))

// // optimized solution using hashMap
// function checkDuplicates(num) {
//   let obj = {};
//   for (let i = 0; i < num.length; i++) {
//     if (obj[nums[i]] !== undefined) {
//       return num[i];
//     } else {
//       obj[num[i]] = i;
//     }
//     console.log(obj);
//   }
//   return undefined;
// }

// // console.log(checkDuplicate(num))
// // let arr = [2,1,1,2,3,5,1,2,4]

// // function num(arr){
// //   debugger;
// //   let newArr = []
// //  let obj = {}
// //  for(let i = 0; i < arr.length; i++){
// //     if (obj.hasOwnProperty(arr[i])){
// //       newArr.push(arr[i])
// //     }
// //  }
// //   return newArr[0]
// // }

// // O(n2)

// // function num(arr){
// //   let newArr = []
// //   debugger;
// //   let obj = {}

// //    for (let i = 0; i < arr.length; i++){
// //      for(let j = i + 1; j < arr.length; j++){
// //        if(arr[i] === arr[j]){
// //            obj[arr[i]] = 1
// //        }
// //      }

// //    }
// //    // return undefined
// //   return obj
// // }

// // console.log(num(arr));

// // 10 ---> 5 -----> 16

// // add a method prepend() to the linked list that adds a node to the beginning of the list

// // class Node {
// //   constructor(value) {
// //     this.value = value;
// //     this.next = null;
// //   }
// // }

// // class LinkedList {
// //   constructor(value) {
// //     this.head = {
// //       value: value,
// //       next: null,
// //     };
// //     this.tail = this.head;
// //     this.length = 1;
// //   }
// //   append(value) {
// //     const newNode = {
// //       value: value,
// //       next: null,
// //     };
// //     console.log(newNode);
// //     this.tail.next = newNode;
// //     this.tail = newNode;
// //     this.length++;
// //     return this;
// //   }
// //   prepend(value) {
// //     //Code here
// //     const newNode = {
// //       value: value,
// //       next: null,
// //     };
// //     newNode.next = this.head;
// //     this.head = newNode;
// //     this.length++;
// //     return this;
// //   }
// //   printList() {
// //     const array = [];
// //     let currentNode = this.head;
// //     while (currentNode != null) {
// //       array.push(currentNode.value);
// //       currentNode = currentNode.next;
// //     }
// //     return array;
// //   }
// //   printList() {
// //     const arry = [];
// //     let currentNode = this.head;
// //     while (currentNode != null) {
// //       arr.push(currentNode.value);
// //       currentNode = currentNode.next;
// //     }
// //     return array;
// //   }
// //   insert(index, value) {
// //     //  your code here
// //     if (index >= this.length) {
// //       return this.append(value);
// //     }
// //     const newNode = {
// //       value: value,
// //       next: null,
// //     };
// //     const leader = this.traverseToIndex(index - 1);
// //     const holdingPointer = leader.next;
// //     leader.next = newNode;
// //     newNode.next = holdingPointer;
// //     this.length++;
// //     return this.printList();
// //   }
// //   traverseToIndex(index) {
// //     // check params
// //     let counter = 0;
// //     let currentNode = this.head;
// //     while (counter !== index) {
// //       currentNode = currentNode.next;
// //       counter++;
// //     }
// //     return currentNode;
// //   }
// // }

// // let myLinkedList = new LinkedList(10);
// // myLinkedList.append(5);
// // myLinkedList.append(16);
// // myLinkedList.prepend(1);
// // myLinkedList.printList();
// // myLinkedList.insert(2, 99);
// // myLinkedList.printList();

let testerList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null,
      },
    },
  },
};

// console.log(testerList)

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(value) {
//     const newNode = new Node(value);
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }
//   prepend(value) {
//     const newNode = {
//       value: value,
//       next: null,
//     };
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }
//   printList() {
//     const array = [];
//     let currentNode = this.head;
//     while (currentNode !== null) {
//       array.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     return array;
//   }
//   insert(index, value) {
//     if (index >= this.length) {
//       return this.append(value);
//     }
//     const newNode = {
//       value: value,
//       next: null,
//     };
//     const leader = this.traverseToIndex(index - 1);
//     const holdingPointer = leader.next;
//     leader.next = newNode;
//     newNode.next = holdingPointer;
//     this.length++;
//     return this.printList();
//   }
//   traverseToIndex(index) {
//     let counter = 0;
//     let currentNode = this.head;
//     while (counter !== index) {
//       currentNode = currentNode.next;
//       counter++;
//     }
//     return currentNode;
//   }
//   remove(index) {
//     const leader = this.traverseToIndex(index - 1);
//     const unwantedNode = leader.next;
//     leader.next = unwantedNode.next;
//     this.length--;
//     return this.printList();
//   }
// }
// let myLinkedList = new LinkedList(10);

// console.log(myLinkedList.append(5));

// console.log(myLinkedList.append(16));

// console.log(myLinkedList.prepend(12));

// console.log(myLinkedList.prepend(22));

// console.log(myLinkedList.printList());

// console.log(myLinkedList.insert(3, 56));

// console.log(myLinkedList.remove(3));

//  linked lists practice

// singly linked list
// const testList = {
//   head: {
//     value: value,
//     next:head
//  }
// }

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class DoublyLinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//       prev: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(value) {
//     const newNode = {
//       value: value,
//       next: null,
//       prev: null,
//     };
//     newNode.prev = this.tail;
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }
//   prepend(value) {
//     const newNode = {
//       value: value,
//       next: null,
//       prev: null,
//     };

//     newNode.next = this.head;
//     this.head.prev = newNode;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }
//   printList() {
//     const array = [];
//     let currentNode = this.head;
//     while (currentNode !== null) {
//       array.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     return array;
//   }
//   insert(index, value) {
//     if (index >= this.length) {
//       return this.append(value);
//     }
//     const newNode = {
//       value: value,
//       next: null,
//       prev: null,
//     };

//     const leader = this.traverseToIndex(index - 1);
//     const follower = leader.next;
//     leader.next = newNode;
//     newNode.prev = leader;
//     newNode.next = follower;
//     follower.prev = newNode;
//     this.length++;
//     console.log(this);
//     return this.printList();
//   }
//   traverseToIndex(index) {
//     let counter = 0;
//     let currentNode = this.head;
//     while (counter !== index) {
//       currentNode = currentNode.next;
//       counter++;
//     }
//     return currentNode;
//   }
//   remove(index) {
//     const leader = this.traverseToIndex(index - 1);
//     const unwantedNode = leader.next;
//     leader.next = unwantedNode.next;
//     this.length--;
//     return this.printList();
//   }
//   reverse(index) {
//     if (!this.head.next) return this
//     let first = this.head
//     let tail = this.head
//     let second = first.next
//     while (second) {
//       const temp = second.next
//       second.next = first
//       first = second
//       second = temp
//     }
//     this.head.next = null
//     this.head = first
//     return this.printList()
//   }
// }
// let myLinkedList = new DoublyLinkedList(10);

// console.log(myLinkedList.append(5));

// console.log(myLinkedList.append(16));

// console.log(myLinkedList.prepend(1));

// console.log(myLinkedList.prepend(22));

// // console.log(myLinkedList.printList());

// console.log(myLinkedList.insert(1, 56));

// // console.log(myLinkedList.remove(3));

// console.log(myLinkedList.reverse())

// class Node {
//   constructor(value){
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor(){
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }
//   peek() {
//     return this.top
//   }
//   push(value) {
//     const newNode = new Node(value)
//     if (this.length === 0) {
//       this.top = newNode
//       this.bottom = newNode
//     } else {
//       const holdingPointer = this.top
//       this.top = newNode;
//       this.top.next = holdingPointer
//     }
//     this.length++
//     return this
//   }
//   pop() {
//     if (!this.top) return null
//     if (this.top === this.bottom) {
//       this.bottom = null
//     }
//     const holdingPointer = this.top
//     this.top = this.top.next
//     this.length--
//     return this
//   }
//   //isEmpty
// }

// const myStack = new Stack();
// console.log(myStack.push('google'))
// console.log(myStack.push('udemy'))
// console.log(myStack.push('youtube'))
// console.log(myStack.pop())
// console.log(myStack.pop())
// console.log(myStack.pop())
// console.log(myStack.peek())
// console.log(myStack.peek())

// class Node {
//   constructor(value){
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor(){
//    this.array = []
//   }
//   peek() {
//     return this.array[this.array.length - 1]
//   }
//   push(value) {
//     this.array.push(value)
//     return this;
//   }
//   pop() {
//     this.array.pop()
//     return this
//   }
//   //isEmpty
// }

// const myStack = new Stack();
// console.log(myStack.peek())
// console.log(myStack.push('google'))
// console.log(myStack.push('udemy'))
// console.log(myStack.push('youtube'))
// console.log(myStack.pop())
// console.log(myStack.pop())
// console.log(myStack.pop())

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek(value) {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    this.next = this.value;
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) return null;
    if (this.first === this.last) {
      this.last = null;
    }
    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    return this;
  }
  //isEmpty;
}

const myQueue = new Queue();
console.log(myQueue.enqueue("Rishav"));
console.log(myQueue.enqueue("Jinko"));
console.log(myQueue.enqueue("Samir"));
console.log(myQueue.enqueue("John"));
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());

//Joy
//Matt
//Pavel
//Samir

// trees

function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
