//For Loop in JavaScript
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//While Loop in JavaScript
let j = 0;
while (j < 10) {
    console.log(j);
    // j++;
    j += 1;
}

// Do While Loop in JavaScript
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 10);

//Continue Statement
let l = 0;
do {
    if (l == 5) {
        l++;
        continue;
    }
    console.log(l);
    l++;
} while (l < 10);
console.log("done");

// Break Statement
let m = 0;
do {
    console.log(m);
    if (m == 5) {
        break;
    }
    m++;
} while (m < 10);
console.log("done");

let arr=[1,2,3,4,5];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}
        // or
arr.forEach(function(element){
    console.log(element); 
});

arr.forEach(function(element,index,array){
    console.log(element,index,array); 
});

let obj={
    name:"arpan",
    age:12,
    type:"male",
    os:"mac"
}
for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`);
}


