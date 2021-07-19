console.log("hi");

//Primitive Data Types
// String
let name="harry";
console.log("My name is " + name);
console.log("Data Typer is " + (typeof name));

//Numbers
let marks=34;
console.log("Data type is " + (typeof marks));

let marks1=34.44;
console.log("Data type is " + (typeof marks1));

//Boolean
let isDriver=true;
console.log("Data type is " + (typeof isDriver));

//Null return bogus i.e object
let nullVar=null;
console.log("Data type is " + (typeof nullVar));

//Undefined
let unDef=undefined;
console.log("Data type is " + (typeof unDef));

//Reference Data Types
//Arrays
let myarr=[1,2,3,4];
console.log("Data type is " + (typeof myarr));

let myarr1=[1,2,3,4,false];
console.log("Data type is " + (typeof myarr1));

let myarr2=[1,2,3,4,false,"string"];
console.log("Data type is " + (typeof myarr2));

//Object literals
let studentsMarks={
    Harry:21,
    Rohan:23,
    Shivam:24
}
console.log("Data type is " + (typeof studentsMarks));
console.log(studentsMarks);

//Fuctions
function findName(){
    
}
console.log("Data type is " + (typeof findName));

//Dates
let date=new Date();
console.log("Data type is " + (typeof date));













