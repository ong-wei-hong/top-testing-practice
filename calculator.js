const calculator = () => {
	const numsCheck = (a, b) => typeof a == 'number' && typeof b == 'number';

	const add = (a, b) => {
		if(numsCheck(a, b)) {
			return a + b;
		}
		return undefined;
	};

	const subtract = (a, b) => {
		if(numsCheck(a, b)) {
			return a - b;
		}
		return undefined;
	};

	const divide = (a, b) => {
		if(b == 0) {
			return undefined;
		}
		if(numsCheck(a, b)) {
			return a / b;
		}
		return undefined;
	};

	const multiply = (a, b) => {
		if(numsCheck(a, b)) {
			return a * b;
		}
		return undefined;
	};

	return {
		add,
		subtract,
		multiply,
		divide
	}
}

module.exports = calculator;
