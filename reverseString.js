const reverseString = (s) => {
	if(typeof s == 'string') {
		return s.split('').reverse().join('');
	}
	return s
}

module.exports = reverseString;
