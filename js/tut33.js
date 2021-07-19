// Button with id myBtn
let myBtn = document.getElementById('myBtn');

// div with id content
let content = document.getElementById('content');

// function getData() {
// 	console.log('Started getData');
// 	url = 'texts/Arpan.txt';
// 	fetch(url)
// 		.then((response) => {
// 			console.log('Inside first then');
// 			return response.text();
// 		})
// 		.then((data) => {
// 			console.log('Inside second then');
// 			console.log(data);
// 		});
// }
// console.log('Before running getData');
// getData();
// console.log('After running getData');

// function getData() {
// 	console.log('Started getData');
// 	url = 'https://api.github.com/users';
// 	fetch(url)
// 		.then((response) => {
// 			console.log('Inside first then');
// 			return response.json(); // this will return data in parsed form
// 		})
// 		.then((data) => {
// 			console.log('Inside second then');
// 			console.log(data);
// 		});
// }
// console.log('Before running getData');
// getData();
// console.log('After running getData');

function postData() {
	url = 'https://reqres.in/api/users';

	// har baar code ko execute karne ke baad name ko different value de deni hai
	data = '{"name":"harglry347485945","salary":"123","age":"23"}';
	params = {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: data
	};
	fetch(url, params).then((response) => response.json()).then((data) => console.log(data));
}
postData();
