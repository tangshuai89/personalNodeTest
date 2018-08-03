const selectionSort = (args) => {
	let min = 0;
	let temp = 0;
	for (let i = 0; i < args.length; i++) {
		min = i;
		for (let j = i + 1; j < args.length; j++) {
			if (args[j] < args[min] ){
				min = j;
			}
		}
		temp = args[min];
		args[min] = args[i];
		args[i] = temp;
	}
	return args;
}
console.log(selectionSort([1, 2 ,3 ,4 ,55, 66, 77, 8]));
