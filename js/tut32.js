// ARROW FUNCTIONS

// Creating a regular function
// function arpan() {
// 	console.log('This is me');
// }
// arpan();

// Creating a regular function
// const arpan = function() {
// 	console.log('This is me');
// };
// arpan();

// Converting it to an arrow function
// const arpan = () => {
// 	console.log('This is me');
// };
// arpan();

// function returning something
// const greet = function() {
// 	return 'Good Morning';
// };
// console.log(greet());

// convertion it to an arrow function
// const greet = () => {
// 	return 'Good Morning';
// };
// console.log(greet());

// One liners do not require braces/return
// one line will automatically return
// const greet = () => 'Good Morning';
// console.log(greet());

// Single parameters do not need parenthesis
// but you will have to put parenthesis if there are multiple paramteres
// const greet = () => ({ name: 'arpan' });
// console.log(greet());

// const greet = (name) => 'Good Morning ' + name;
// console.log(greet('Arpan'));

const greet = (name, ending) => 'Good Morning ' + name + ending;
console.log(greet('Arpan ', 'Have a nice day'));
