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
        return new Promise((resolve, reject) => {
            var resolvedPromised = [];
            var rejectedPromises = [];
            let count = 0;
            for (var i = 0; i < promises.length; i++) {
                var tempIndex = i;
                if (Object.prototype.toString.call(promises[i]) === '[object Promise]') {
                    (function(tempIndex) {
                        promises[tempIndex].then(res => {
                            resolvedPromised[tempIndex] = res;
                            count++;
                            if (count === promises.length) {
                                resolve(getAdvanceMapCollection(resolvedPromised));
                            }
                        }).catch(e => reject(e))
                    })(tempIndex)
                }
            }
        })
    }
}

const a = new Promise((resolve) => resolve(0))
const b = new Promise((resolve) => resolve(2))
const c = new Promise((resolve) => resolve(1))
const d = new Promise((resolve) => resolve(4))
customPromiseAll([a, b, c, d]).then(res => console.log(res))
Promise.all([a,b,c,d]).then(res => console.log(res))

function fibonacci(n) {
    if (n === 1 || n === 2) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// console.log(fibonacci(1), fibonacci(2), fibonacci(3), fibonacci(4), fibonacci(5), fibonacci(6))