// Symbols always generate new primitive data typa
// Symbols is primitive data type
const sym1 = Symbol('My identifier');
const sym2 = Symbol('My identifier');
console.log('Symbol is ', sym1);
console.log('Type of Symbol is ', typeof sym1);
console.log(sym1 === sym2);

const a = "this is";
const b = "this is";

console.log(a === b);
console.log(null === null);
console.log(undefined === undefined);

// const k1 = Symbol('identifier for k1');
// const k2 = Symbol('identifier for k2');

// myObj = {};
// myObj[k1] = "Arpan";
// myObj[k2] = "Adarsh";

// console.log(myObj);
// console.log(myObj[k1]);
// console.log(myObj[k2]);

// OR

const k1 = Symbol('identifier for k1');
const k2 = Symbol('identifier for k2');

myObj = {};
myObj[k1] = "Arpan";
myObj[k2] = "Adarsh";
myObj["name"] = "Patra";
myObj[4] = "Good";


console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);
// console.log(myObj.k2); --> cannot do this because it is same as myObj[k2]


// Symbols are ignored in for in loop
for (key in myObj) {
    console.log(key, myObj[key])
}
console.log(JSON.stringify(myObj));
