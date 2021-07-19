console.log('hi');

// Variables in JS
// var(global),let(block) and const
var name='arpan';
var channel;
channel='arpan1';
var marks=34;
console.log(name, channel, marks);

// Rules for creating JS variables
// 1.Cannot start with numbers
// 2.Can start with letter, numbers, _ or $ 
// 3.Are case sensitive

var city="Delhi";
console.log(city);

const ownersname='hari';
// ownersname='harii'; // cannot do this(error)
console.log(ownersname);

{
    let city='rampur';
    console.log(city);
}
console.log(city);

const arr=[1,2,3,4];
// arr=[1,2,3]; // cannot do this(error)
arr.push(5);
console.log(arr);

/* Most common programming case types:
1.camelCase
2.kebab-case
3.snake_case
4.PascalCase
*/ 





