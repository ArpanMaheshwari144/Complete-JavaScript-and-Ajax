let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
	console.log('You have clicked the fetchBtn');

	// Instantiate an xhr object
	const xhr = new XMLHttpRequest();

	// Open the object
	// xhr.open('GET', 'texts/Arpan.txt', true); // for asynchronous -> true

	// OR

	// for asynchronous -> true (code is not blocked)
	//xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

	// OR

	// USE THIS FOR POST REQUEST
	xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
	xhr.getResponseHeader('Content-type', 'application/json');

	// What to do on progress (optional)
	xhr.onprogress = function() {
		console.log('On progress');
	};

	// ready states
	// Value	State	             Description
	// 0	    UNSENT	             Client has been created. open() not called yet.
	// 1	    OPENED	             open() has been called.
	// 2	    HEADERS_RECEIVED	 send() has been called, and headers and status are available.
	// 3	    LOADING	Downloading; responseText holds partial data.
	// 4	    DONE	             The operation is complete.

	// xhr.onreadystatechange = function() {
	// 	console.log('ready state is ', xhr.readyState);
	// };

	// OR

	// What to do when response is ready
	// 200 means response code it means response ok
	xhr.onload = function() {
		if (this.status === 200) {
			console.log(this.responseText);
		} else {
			console.log('Some error occured');
		}
	};

	// send the request
	params = `{"name":"test34sad545","salary":"123","age":"23"}`;
	xhr.send(params);

	console.log('We are done!');
}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
	console.log('You have clicked the pop handler');

	// Instantiate an xhr object
	const xhr = new XMLHttpRequest();

	// Open the object
	xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);

	// What to do when response is ready
	xhr.onload = function() {
		if (this.status === 200) {
			let obj = JSON.parse(this.responseText);
			console.log(obj);
			let list = document.getElementById('list');
			str = '';
			for (key in obj.data) {
				str += `<li>${obj.data[key].employee_name}</li>`;
			}
			list.innerHTML = str;
		} else {
			console.log('Some error occured');
		}
	};

	// send the request
	xhr.send();
	console.log('We are done fetching employees!');
}
