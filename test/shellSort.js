const shellSort = (args) => {
	// 设置步长为3
	let h = 1;
	let temp = 0;
	while (h < args.length / 3) {
		h = 3 * h + 1;
	}

	while (h >= 1) {
		for (let i = h; i < args.length; i++) {
			for (let j = i; j >= h && args[j] < args[j - h]; j -= h) {
				temp = args[j];
				args[j] = args[j-h];
				args[j-h] = temp;
			}
		}
		h = parseInt(h/3);
	}
	return args;
}

console.log(shellSort([1, 2, 3, 44, 5, 66, 7, 8]));
