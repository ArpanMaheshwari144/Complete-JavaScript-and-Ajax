// callback functions may be synchronous and asynchronous.

// Pretend that this response is coming from the server
const students = [ { name: 'Arpan', subject: 'JavaScript' }, { name: 'Adarsh', subject: 'Machine Learning' } ];

function enrollStudent(student, callback) {
	// setTimeout is a callback function
	setTimeout(function() {
		students.push(student);
		console.log('Student has been enrolled');
		callback();
	}, 1000); // 1000milliseconds
}

function getStudents() {
	setTimeout(function() {
		let str = '';
		students.forEach(function(student) {
			str += `<li>${student.name}</li>`;
		});
		document.getElementById('students').innerHTML = str;
		console.log('Students have been fetched');
	}, 5000);
}

let newStudent = { name: 'Verma', subject: 'Python' };
enrollStudent(newStudent, getStudents);
