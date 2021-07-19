//Functions in JavaScript
function greet1(name) {
    console.log(`How are you ${name} what are you doing`);
}
let name1 = "arpan";
greet1(name1);

function greet2(name, message) {
    console.log(`How are you ${name} what are you doing and this is a message from me ${message}`);
}
let name2 = "adarsh";
let message = "Good Morning"
greet2(name2, message);

function greet3(name, message = "Good Morning") {
    console.log(`How are you ${name} what are you doing and this is a message from me ${message}`);
}
let name3 = "aditya";
greet3(name3);

function greet4(name) {
    console.log(`How are you ${name} what are you doing and this is a message from me`);
    return 10;
}
let name4 = "akbar";
let val = greet4(name4);
console.log(val);

function greet5(name) {
    let msg = `How are you ${name} what are you doing and this is a message from me`;
    return msg;
}
let name5 = "mehdi";
let val1 = greet5(name5);
console.log(val1);

const myGreet = function (name) {
    let msg = `How are you ${name} what are you doing and this is a message from me`;
    return msg;
}
let name6 = "rai";
let val2 = myGreet(name6);
console.log(val2);

const myObj={
    name:"jeet",
    game:function(){
        return "GTA";
    }
}
console.log(myObj.name);
console.log(myObj.game());

arr=['Fruits','Vegetables','Home'];
arr.forEach(function(element,index,array){
    console.log(element,array,index);
    console.log(element,index);
});

//Scope in JavaScript
// let/const has block level scope and var has global scope

{
    let i=1;
    console.log(i);
}
//console.log(i); ye apne block se bahar call nhi ho sakta hai

{
    const i=3;
    console.log(i);
}
//console.log(i); ye apne block se bahar call nhi ho sakta hai


{
    var i=2;
    console.log(i);
}
console.log(i); // ye aap khi bhi call kar sakte ho




