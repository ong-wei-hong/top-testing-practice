const _calculator = require('./calculator');

const calculator = _calculator();

describe('calculator works for numbers', () => {
	const a = 1, b = 2;

	test('calculator.add(a, b) == 3', () => {
		expect(calculator.add(a, b)).toBe(3);
	});

	test('calculator.subtract(a, b) == -1', () => {
		expect(calculator.subtract(a, b)).toBe(-1);
	});

	test('calculator.divide(a, b) == 0.5', () => {
		expect(calculator.divide(a, b)).toBe(0.5);
	});

	test('calculator.multiply(a, b) == 2', () => {
		expect(calculator.multiply(a, b)).toBe(2);
	});
});

describe('calculator works for numbers with decimals', () => {
	const a = 1.1, b = 2.2;

	test('calculator.add(a, b) == 3.3', () => {
		expect(calculator.add(a, b).toFixed(1)).toBe('3.3');
	});

	test('calculator.subtract(a, b) == -1.1', () => {
		expect(calculator.subtract(a, b).toFixed(1)).toBe('-1.1');
	});

	test('calculator.divide(a, b) == 0.5', () => {
		expect(calculator.divide(a, b).toFixed(1)).toBe('0.5');
	});

	test('calculator.multiply(a, b) == 2.42', () => {
		expect(calculator.multiply(a, b).toFixed(2)).toBe('2.42');
	});
});

describe('calculator returns undefined after non-number or missing input', () => {
	const a = 1, b = '2';

	test('returns undefined', () => {
		expect(calculator.add(a, b)).toBe(undefined)
	});

	test('returns undefined', () => {
		expect(calculator.subtract(a)).toBe(undefined)
	});

	test('returns undefined', () => {
		expect(calculator.divide()).toBe(undefined)
	});
});

test('calculator returns undefined when trying to divide by 0', () => {
	expect(calculator.divide(1, 0)).toBe(undefined);
});
