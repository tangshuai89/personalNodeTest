/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var result = new ListNode(0);
  result = loopPushResult(result, l1, l2, 0);
  return result;
};

var loopPushResult = function(result, l1, l2, plusAdvanceStep) {
  if (l1 === null) l1 = new ListNode(0);
  if (l2 === null) l2 = new ListNode(0);
  var thirdPlusLastPosition = (l1.val + l2.val + plusAdvanceStep) % 10,
    thirdPlusAdvanceStep = Math.floor((l1.val + l2.val + plusAdvanceStep) / 10);
  result = new ListNode(thirdPlusLastPosition);
  if (
    (thirdPlusAdvanceStep !== 0) ||
    (thirdPlusAdvanceStep === 0 && (l1.next !== null || l2.next !== null))
  ) {
    result.next = loopPushResult(result.next, l1.next, l2.next, thirdPlusAdvanceStep);
  }
  return result;
}
