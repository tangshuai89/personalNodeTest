function aa() {
  var timecounts = 0;
  setTimeout(function() {
    timecounts = 1;
  }, 1000);

  do {
    return "wwwwww";
  } while (timecounts > 0);
}

console.log(aa());
