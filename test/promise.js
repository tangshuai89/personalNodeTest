function customPromiseAll(promises) {
    const params = Symbol.iterator;
    if (!promises[params]) {
        console.log('入参实例错误');
        return;
    } else {
        function getAdvanceMapCollection(originalMapCollection) {
            var finalResolvedPromised = [];
            var resolvedIndex = 0;
            for (resolvedIndex = 0; resolvedIndex < originalMapCollection.length; resolvedIndex++) {
                if (
                    Object.prototype.toString.call(originalMapCollection[resolvedIndex]) &&
                    Object.prototype.toString.call(originalMapCollection[resolvedIndex]) !== '[object Undefined]'
                ) {
                    finalResolvedPromised.push(originalMapCollection[resolvedIndex]);
                }
            }
            return finalResolvedPromised
        }
        var i = 0;
        return new Promise((resolve, reject) => {
            var resolvedPromised = [];
            var rejectedPromises = [];
            let count = 0;
            for (i = 0; i < promises.length; i++) {
                if (Object.prototype.toString.call(promises[i]) === '[object Promise]') {
                    promises[i].then(function(index, res) {
                        resolvedPromised[index] = res;
                        count++;
                        if (count === promises.length) {
                            resolve(getAdvanceMapCollection(resolvedPromised))
                        }
                    }.bind(null, i)).catch(e => reject(e))
                }
            }
        })
    }
}

const a = new Promise((resolve) => resolve(0))
const b = new Promise((resolve) => resolve(1))
const c = new Promise((resolve) => { setTimeout(() => resolve(2), 2800) })
const d = new Promise((resolve) => { setTimeout(() => resolve(3), 1400) })
// const d = Promise.reject(new Error('fail'))
customPromiseAll([a, b, c, d]).then(res => console.log(res))
// Promise.all([a, b, c, d]).then(res => console.log(res, 2))

function fibonacci(n) {
    if (n === 1 || n === 2) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// console.log(fibonacci(1), fibonacci(2), fibonacci(3), fibonacci(4), fibonacci(5), fibonacci(6))