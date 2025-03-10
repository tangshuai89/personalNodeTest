/**
 * 判断一个链表有没有环
 */
function Node(x) {
    this.val = x;
    this.next = null;
}

var a = new Node(1);
var b = new Node(2);
var c = new Node(3);
a.next = b;
b.next = c;

function hasCycle(head) {
    if (head === null || head.next === null) {
        return false;
    }

    let slow = head;
    let fast = head.next;

    while (fast !== null && fast.next !== null) {
        if (slow === fast) {
            return true;
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    return false;
}


/**
 * 工具方法，找到一个数组内第k大的数字
 * 1. 考虑异常等因素
 * 2. 所有库都可用
 * 3. 运行在浏览器上，浏览器场景下考虑性能问题
 * 4. 假如不是运行在浏览器，运行在node下，实现会有什么区别
 */

function findSpecifiedIndexFromArray(arr, index) {
    if (Object.prototype.toString.call(arr) !== '[object Array]') {
        return 'Error array dataType'
    }
    if (Object.prototype.toString.call(index) !== '[object Number]') {
        return 'Error Index.'
    }
    if (arr.length === 0) {
        return 'Empty array'
    }
    let arrSorted = _.unique(arr).sort((a, b) => b - a)));
    if (arrSorted.length < index || index - 1 < 0) {
        return 'Error Range.'
    }
    return arrSorted[index - 1];
}


