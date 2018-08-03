const bubbleSort = (args) => {
  for (let i = 0; i < args.length; i++) {
     for (let j = 1; j < args.length; j++) {
        if (args[j-1] - args[j] > 0) {
	    temp = args[j-1];
		args[j-1] = args[j];
		args[j] = temp;
	}
     }
  }
	return args;
}

console.log(bubbleSort([1, 2, 3, 44, 5, 6, 7]));
