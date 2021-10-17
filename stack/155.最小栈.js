

/**
 * 最小栈
设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) —— 将元素 x 推入栈中。
pop() —— 删除栈顶的元素。
top() —— 获取栈顶元素。
getMin() —— 检索栈中的最小元素。


示例:

输入：
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

输出：
[null,null,null,null,-3,null,0,-2]

解释：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.

 */

/**
 * initialize your data structure here.
 */
 var MinStack = function() {
   //栈和最小栈
   this.stack = []
   this.min_stack = [ Infinity  ]
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    this.min_stack.push(Math.min(this.min_stack[this.min_stack.length-1],val) )
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
   this.stack.pop()
   this.min_stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[ this.stack.length - 1 ]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
   return this.min_stack[ this.min_stack.length - 1 ]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

 const minStack = new MinStack();
 minStack.push(-2);
 minStack.push(0);
 minStack.push(-3);
 console.log( minStack.getMin())
 minStack.pop();
 console.log( minStack.top())
 console.log( minStack.getMin()  )
