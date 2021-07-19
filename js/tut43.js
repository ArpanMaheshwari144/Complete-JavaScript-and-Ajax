// let people1 = ["Arpan", "Adarsh", "Verma", "Patra", "Aditya"];

// Traditional for loop:
// for (let index = 0; index < people1.length; index++) {
//     const element = people1[index];
//     console.log(element);
// }


// 1. ITERATING AN OBJECT
// let obj = {
//     name: "Arpan",
//     language: "JavaScript",
//     hobbies: "Android app development"
// }
// console.log(obj);

// 1.1 Iterating an object using Traditional for loop:
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);
// }

// 1.2 Iterating an object using for-in loop -> iterates over all enumerable property keys of an object.
// for (let key in obj) {
//     console.log(obj[key]);
// }

// 2. ITERATING A STRING
// We can use for in with strings to loop through all the characters
// let myString1 = "This is my string";
// for (let char in myString1) {
//     console.log(myString1[char]);
// }


// For of loop -> iterates over the values of an iterable object.
let people2 = ["Arpan", "Adarsh", "Verma", "Patra", "Aditya"];

let myString2 = "This is my string";

for (let name of people2) {
    console.log(name);
}

for (let name of myString2) {
    console.log(name);
}
