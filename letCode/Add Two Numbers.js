// 两数相加
/*
给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807

*/

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

// 解法1
var addTwoNumbers = function(l1, l2) {
  let result = sumBigNumber(getNum(l1), getNum(l2));
  let r = null
  for(let i= 0 ;i<result.length;i++) {
      let b = new ListNode(result[i])
      b.next = r
      r = b
  }
  return r
};

var getNum = function(l) {
  return l || l === 0 ? getNum(l.next) + '' + l.val : ''
}

function sumBigNumber(a, b) {
  if(a == 0 && b == 0) {
      return '0'
  }
  var res = '',
  temp = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || temp) {
    temp += ~~a.pop() + ~~b.pop();
    res = (temp % 10) + res;
    temp = temp > 9;
  }
  return res.replace(/^0+/, '');
}

// 解法2 通过链式操作
var addTwoNumbers = function(l1, l2) {
  let current = result = new ListNode(0), current1 = l1, current2 = l2, carry = 0, ad = 0;
  while(current1 !== null || current2 !== null) {
      ad = (current1 ? current1.val : 0) + (current2 ? current2.val : 0) + carry;
      if (ad >= 10) {
        current.val = ad -10;
        carry = 1;
      } 
      else {
        current.val = ad;
        carry = 0;
      }
      current1 = current1 ? current1.next : null;
      current2 = current2 ? current2.next : null;
      if (current1 !== null || current2 !== null || carry !== 0) current.next = new ListNode(carry);
      current = current.next;
  }
  return result
};
