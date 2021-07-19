function delay(time) {
	return new Promise((resolve, reject) => {
		if (time <= 2000) {
			setTimeout(() => resolve('Resolve : ' + 'Time is less or equal to 2 sec'), time);
		} else {
			reject('Reject : ' + 'Time is more than 2 sec');
		}
	});
}

delay(2000).then((res) => console.log(res)).catch((err) => console.log(err));
