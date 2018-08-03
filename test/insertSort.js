const insertSort = (args) => {
	let temp = 0;
  for (let i = 1; i < args.length; i++) {
	  for (let j = i; j > 0 && args[j] < args[j-1]; j--) {
		  temp = args[j-1];
		  args[j-1] = args[j];
		  args[j] = temp;
	}
}
return args;
};

console.log(insertSort([1, 2, 3, 44 ,55, 6, 7]));
