/**
 *
 *
 **/

const originArray = [
  {
    id: 'food',
    parent: null
  }, {
    id: 'hongfushi',
    parent: 'apple'
  }, {
    id: 'fruits',
    parent: 'food',
  }, {
    id: 'apple',
    parent: 'fruits'
  }, {
    id: 'banana',
    parent: 'fruits'
  }, {
    id: 'orange',
    parent: 'fruits'
  }, {
    id: 'vegetables',
    parent: 'food'
  }, {
    id: 'tomato',
    parent: 'vegetables'
  }, {
    id: 'egg',
    parent: 'vegetables'
  }
];

const excuteArray = (originArray) => {
  let obj = {};
  let originTreeId = '';
  let tempArray = originArray.map(item => {
    if (item.parent !== null) {
      let objI = deepFind(obj, item);
      if (!objI) {
        obj[item.parent] = {[item.id]: {}};
      }
    } else {
    obj[item.id] = {};
    }
  }, this);

  console.log(obj);
  return obj;
};

const deepFind = (objArgs, key) => {
  if(objArgs) {
  for (var i in objArgs) {
    if (objArgs[i]) {
      if (i === key["parent"]) {
        objArgs[key.parent] = Object.assign(objArgs[key.parent], {[key.id]: {}});
        return objArgs[key["parent"]];
      } else {
        deepFind(objArgs[i], key);
      }
    } else {
      // obj[key] = {};
      return;
    }
  }
  } else {
    return;

  }
};
excuteArray(originArray);


