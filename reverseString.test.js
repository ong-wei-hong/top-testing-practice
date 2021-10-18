const reverseString = require('./reverseString');

test('reverses string', () => {
	expect(reverseString('test12 3$')).toBe('$3 21tset');
})

test('reverses empty string', () => {
	expect(reverseString('')).toBe('');
})

test('does not affect non-strings', () => {
	expect(reverseString(90)).toBe(90);
})
