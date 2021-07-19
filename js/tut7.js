//Arrays
let marks=[34,23,24,73,25];
let fruits=['Orange','Apple','Banana'];
let mixed=['str',89,[3,5]];

let arr=new Array(23,123,21,'Orange');
console.log(arr);
console.log(marks);
console.log(arr);
console.log(mixed);

//Arrays mei indexing always 0 se start hoti hai
console.log(fruits[0]);
console.log(arr.length);
console.log(Array.isArray([1,2,3]));
console.log(Array.isArray('arpan'));

let arr1=new Array(23,123,21,'Orange');
arr1[0]='Arpan';
let arrelement=arr1[0];
console.log('Element is: ' + arrelement);
console.log(arr1);

let marks1=[34,23,24,73,25];
let value=marks1.indexOf(73);
console.log(value);

//Mutating or Modifying arrays
marks1.push(343);
console.log(marks1);

marks1.unshift(11);
console.log(marks1);

marks1.pop();
console.log(marks1);

marks1.shift();
console.log(marks1);

marks1.splice(1,2);
console.log(marks1);

marks1.reverse();
console.log(marks1);

let marks2=[1,2,3,4];
marks1=marks1.concat(marks2);
console.log(marks1);

//Object
let myObj={
    name:'harry',
    'last name':'chutiya',
    channel:'CWH',
    isActive:true,
    marks:[1,2,3,4]
}
console.log(myObj);
console.log(myObj.name);
console.log(myObj['last name']);
console.log(myObj.channel);
console.log(myObj['channel']);
console.log(myObj.isActive);
console.log(myObj.marks);






