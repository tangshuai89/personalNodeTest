function testObj(name) {
  setTimeout(function () {
    console.log('Hi! This is ' + name + '!');
    return this;
  }, 0);
  return this;
}

testObj.prototype = {
  sleep: function (num) {
    setTimeout(function () {
      var starttime = new Date().getTime();
      while (1) {
        var endtime = new Date().getTime();
        if (endtime - starttime > 3 * 1000) {
          console.log('Wake up after ' + num);
          return this;
        }
      }
    }, 0);
    return this;
  },
  sleepFirst: function (num) {
    var starttime = new Date().getTime();
    while (1) {
      var endtime = new Date().getTime();
      if (endtime - starttime > 3 * 1000) {
        console.log('Wake up after ' + num);
        return this;
      }
    }
  },
  eat: function (type) {
    setTimeout(function () {
      console.log('Eat ' + type + "~");
    }, 0);
    return this;
  }
};

function Codeman(name) {
  return new testObj(name);
}

console.log(Codeman('Peter').sleep(3).eat('dinner'));
console.log(Codeman('Peter').eat('dinner').eat('supper'));
console.log(Codeman('Peter').sleepFirst(5).eat('supper'));