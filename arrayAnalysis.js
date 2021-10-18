const arrayAnalysis = (arr) => {
	if(!Array.isArray(arr) || arr.length == 0) {
		return {};
	};

	let sum = 0, min = Number.MAX_VALUE, max = Number.MIN_VALUE;

	arr.forEach((e) => {
		if (typeof e != 'number') {
			return {};
		};
		sum += e;
		min = Math.min(min, e);
		max = Math.max(max, e);
	})

	return {
		average: sum / arr.length,
		min: min,
		max: max,
		length: arr.length
	};
};

module.exports = arrayAnalysis;
