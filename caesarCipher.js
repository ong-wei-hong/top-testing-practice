const caesarCipher = (s, n) => {
	return s.split('').map((e) => {
		const charCode = e.charCodeAt(0)
		if(charCode >= 65 && charCode <= 90) { // uppercase letter
			return String.fromCharCode((charCode - 65  + n % 26 + 26) % 26 + 65)
		}
		if(charCode >= 97 && charCode <= 122) { //lowercase letter
			return String.fromCharCode((charCode - 97  + n % 26 + 26) % 26 + 97)
		}
		return e
	}).join('')
}

module.exports = caesarCipher;
