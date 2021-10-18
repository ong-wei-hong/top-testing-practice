const arrayAnalysis = require('./arrayAnalysis')

describe('arrayAnalysis returns object with average, min, max and length when called with valid array', () => {
	const analysis = arrayAnalysis([1, 8, 3, 4, 2, 6]);

	test('analysis.average == 4', () => {
		expect(analysis.average).toBe(4);
	});
	test('analysis.min == 1', () => {
		expect(analysis.min).toBe(1);
	});
	test('analysis.max == 8', () => {
		expect(analysis.max).toBe(8);
	});
	test('analysis.length == 6', () => {
		expect(analysis.length).toBe(6);
	});
});

test('arrayAnalysis returns empty object when input is not an array', () => {
	expect(Object.keys(arrayAnalysis(4)).length).toBe(0);
});

test('arrayAnalysis returns empty object when input is []', () => {
	expect(Object.keys(arrayAnalysis([])).length).toBe(0);
})
