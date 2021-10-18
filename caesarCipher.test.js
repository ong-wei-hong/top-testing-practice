const caesarCipher = require('./caesarCipher');

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

test('caesarCipher shifts each letter', () => {
	expect(caesarCipher('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
});

test('caesarCipher preserves non alphabetic characters', () => {
	expect(caesarCipher('123 !@#')).toBe('123 !@#');
});

test('caesarCipher works with negative numbers', () => {
	expect(caesarCipher(alphabet, -5)).toBe('vwxyzabcdefghijklmnopqrstuVWXYZABCDEFGHIJKLMNOPQRSTU');
});

test('caesarCipher works with positive numbers above 26', () => {
	expect(caesarCipher(alphabet, 43)).toBe('rstuvwxyzabcdefghijklmnopqRSTUVWXYZABCDEFGHIJKLMNOPQ');
});

test('caesarCipher works with negative numbers below -26', () => {
	expect(caesarCipher(alphabet, -47)).toBe('fghijklmnopqrstuvwxyzabcdeFGHIJKLMNOPQRSTUVWXYZABCDE');
});

