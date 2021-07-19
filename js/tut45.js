// Set stores unique values does not allow repetation
const mySet = new Set();  // Initialize an empty set
console.log('The set looks like :', mySet);

// Adding values to this set
mySet.add('this');
mySet.add('My name');
mySet.add('this');
mySet.add('that');
mySet.add(34);
mySet.add(true);
mySet.add(false);
mySet.add('that2');
console.log('The set looks like this now:', mySet);

// Use a constructor to initialize the set
// let mySet2 = new Set([1, 45, 'this', false, { a: 4, b: 8 }, 'this']);
// console.log('New set:', mySet2);


console.log(mySet.size); // Get the size of the set

console.log(mySet.has(346)); // Check whether set has 346 or not

console.log('Before removal', mySet.has('that2'));
mySet.delete('that2'); // Remove an element from the set
console.log('After removal', mySet.has('that2'));


// Iterating a set
// for(let item of mySet){
//     console.log('Item is  :', item );
// }

//OR

mySet.forEach((item) => {
    console.log('Item is  :', item);
})

// Set ko Array mei convert karne ke liye Array.from() ka use hoga

// Quiz: Can you use Array.from(mySet) to convert set into an array?

// Answer of Quiz -> Example of removing duplicate elements from an array using set : 
const array = [1, 2, 3, 3, 4, 5, 1, 2, 0, 7, 8, 7];

const mySet3 = new Set(array);
const pureArray = Array.from(mySet3);
console.log(pureArray);