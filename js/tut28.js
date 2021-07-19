// for (let index = 0; index < 45; index++) {
// 	const element = index;
// 	console.log(element);
// }
// console.log('done printing');

setTimeout(() => {
	for (let index = 0; index < 45; index++) {
		const element = index;
		console.log(element);
	}
}, 100); // 100milliseconds
console.log('done printing');
