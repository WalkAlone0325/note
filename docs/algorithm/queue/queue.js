class Queue {
  constructor() {
    // 控制队列的大小
    this.count = 0
    // 追踪第一个元素
    this.lowestCount = 0
    // 对象来存储元素
    this.items = {}
  }
  // 向队列添加元素
  enqueue(element) {
    this.items[this.count] = element
    this.count++
  }
  // 从队列移除元素
  dequeue() {
    if (this.isEmpty()) {
      return undefined
    }
    // 暂存队列头部的值
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }
  // 查看队列头元素
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }
  // 检查队列是否为空并获取它的长度
  isEmpty() {
    return this.count - this.lowestCount === 0
  }
  size() {
    return this.count - this.lowestCount
  }
  // 清空队列
  clear() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }
  // 创建toString方法
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}，${this.items[i]}`
    }
    return objString
  }
}

// 创建Deque类
class Deque {
  constructor() {
    // 控制队列的大小
    this.count = 0
    // 追踪第一个元素
    this.lowestCount = 0
    // 对象来存储元素
    this.items = {}
  }
  addFront(element) {
    // 双端队列是空的
    if (this.isEmpty()) {
      // 元素会被添加到双端队列的后端，在本例中也是双端队列的前端
      this.addBack(element)
    } else if (this.lowestCount > 0) { // 一个元素已经被从双端队列的前端移除
      this.lowestCount--
      this.items[this.lowestCount] = element
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1]
      }
      this.count++
      this.lowestCount = 0
      this.items[o] = element
    }
  }
  addBack() { }
}

// 模拟的击鼓传花游戏
function hotPotato(element, num) {
  const queue = new Queue()
  const elimitatedList = []

  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue = elementsList[i];
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    elimitatedList.push(queue.dequeue())
  }

  return {
    eliminated: elimitatedList,
    winner: queue.dequeue()
  }
}

// 回文检查器
function palindromeChecker(aString) {
  if (aString === undefined || aString === null || (aString !== null && aString.length === 0)) {
    return false
  }
  const deque = new Deque()
  const lowString = aString.toLocaleLowerCase().split(' ').joon('')
  let isEqual = true
  let firstChar, lastChar

  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString[i]);
  }

  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront()
    lastChar = deque.removeBack()
    if (firstChar !== lastChar) {
      isEqual = false
    }
  }

  return isEqual
}