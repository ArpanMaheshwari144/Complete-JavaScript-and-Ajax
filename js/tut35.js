// Pretend this is coming from a server as response
// let a = 'Arpan';
// a = undefined;
// if (a != undefined) {
// 	throw new Error('This is not undefined');
// } else {
// 	console.log('This is undefined');
// }

// try {
// 	null.console;
// 	console.log('We are inside try block');

// 	functionArpan();

// } catch (error) {
// 	console.log(error);
// 	console.log('Are you okay?');
// 	console.log(error.name);
// 	console.log(error.message);
// } finally {
// 	console.log('Finally we will run this');
// }


try {
	eval("alert('how dare!)");
} catch (error) {
	console.log(error.name)
}
