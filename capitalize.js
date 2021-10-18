const capitalize = (s) => {
	if (typeof s == 'string' && s.length > 0) {
		return s.slice(0, 1).toUpperCase() + s.slice(1);
	}
	return s;
}
module.exports = capitalize;
