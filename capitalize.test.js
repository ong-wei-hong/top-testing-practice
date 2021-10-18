const capitalize = require('./capitalize');

test('capitalize string', () => {
	expect(capitalize('test')).toBe('Test')
})

test('does not change already capitalized string', () => {
	expect(capitalize('Done')).toBe('Done')
})

test('does not affect strings starting with non alphabets', () => {
	expect(capitalize('9ae')).toBe('9ae')
})

test('returns empty string if input is empty', () => {
	expect(capitalize('')).toBe('')
})

test('does not affect non-strings', () => {
	expect(capitalize(90)).toBe(90)
})
