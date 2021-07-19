// async return promise

// async function arpan() {
// 	console.log('Inside arpan function');
// 	return 'arpan';
// }
// console.log('Before calling arpan');
// let a = arpan();
// console.log('After calling arpan');
// console.log(a);
// console.log('Last line of this js file');

async function arpan() {
	console.log('Inside arpan function');
	const response = await fetch('https://api.github.com/users');
	console.log('before response');
	const users = await response.json(); // response.json() returns a promise
	console.log('users resolved');
	return users;
}

console.log('Before calling arpan');
let a = arpan();
console.log('After calling arpan');
console.log(a);
a.then((data) => console.log(data));
console.log('Last line of this js file');
