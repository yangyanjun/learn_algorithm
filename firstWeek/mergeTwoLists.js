/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let head = new ListNode(0)
    let p = head;
    let l1 = list1;
    let l2 = list2;
    // 先处理正常情况
    while(l1 !== null && l2 !== null) {
        if(l1.val <= l2.val) {
            p.next = l1;
            l1 = l1.next;
        } else {
            p.next = l2;
            l2 = l2.next;
        }
        p = p.next;
    }
    // 处理特殊情况
    if(l1 === null) p.next = l2;
    if(l2 === null) p.next = l1;
    return head.next;
};

// 题解：
// 先定义一个保护头节点。声明一个指针指向该节点，只要两个链表不为空，循环遍历，指针指向数值小的那个，同时右移。如果一方先为空，则指针直接指向另一个链表即可。题目说明了是升序链表，不用担心链表的排序问题。
// 时间复杂度：O(m + n).两个链表的长度之和。
// 空间复杂度: O(1).
