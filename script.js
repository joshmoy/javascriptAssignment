// First Function
function pow(x,n) {
	let result = x**n;
	return (result);
}

pow(2,5);

// Second Function
function pow() {
	let input = prompt('Enter Preferred number');
	let exp = prompt('Enter Preferred Exponent');

	if (isNaN(input) || isNaN(exp)) {
		alert('You have to input numbers');
	} else {
	let result = input**exp;
	alert (result);
	}

}

pow();