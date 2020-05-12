# 队列

> 队列是遵循先进先出（FIFO，也称为先来先服务）原则的一组有序的项。队列在尾部添加新元素，并从顶部移除元素。最新添加的元素必须排在队列的末尾。在现实中，最常见的队列的例子就是排队。

## 创建队列

```js
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
```

## 双端队列数据结构

> 双端队列（deque，或称 double-ended queue）是一种允许我们同时从前端和后端添加和移除元素的特殊队列。双端队列在现实生活中的例子有电影院、餐厅中排队的队伍等。举个例子，一个刚买了票的人如果只是还需要再问一些简单的信息，就可以直接回到队伍的头部。另外，在队伍末尾的人如果赶时间，他可以直接离开队伍。在计算机科学中，双端队列的一个常见应用是存储一系列的撤销操作。每当用户在软件中进行了一个操作，该操作会被存在一个双端队列中（就像在一个栈里）。当用户点击撤销按钮时，该操作会被从双端队列中弹出，表示它被从后面移除了。在进行了预先定义的一定数量的操作后，最先进行的操作会被从双端队列的前端移除。由于双端队列同时遵守了先进先出和后进先出原则，可以说它是把队列和栈相结合的一种数据结构。

- ❑ addFront(element)：该方法在双端队列前端添加新的元素。
- ❑ addBack(element)：该方法在双端队列后端添加新的元素（实现方法和 Queue 类中的 enqueue 方法相同）。
- ❑ removeFront()：该方法会从双端队列前端移除第一个元素（实现方法和 Queue 类中的 dequeue 方法相同）。
- ❑ removeBack()：该方法会从双端队列后端移除第一个元素（实现方法和 Stack 类中的 pop 方法一样）。
- ❑ peekFront()：该方法返回双端队列前端的第一个元素（实现方法和 Queue 类中的 peek 方法一样）。
- ❑ peekBack()：该方法返回双端队列后端的第一个元素（实现方法和 Stack 类中的 peek 方法一样）。

```js
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
    } else if (this.lowestCount > 0) {
      // 一个元素已经被从双端队列的前端移除
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
  addBack() {}
}
```

## 使用队列和双端队列来解决问题

### 循环队列——击鼓传花游戏

由于队列经常被应用在计算机领域和我们的现实生活中，就出现了一些队列的修改版本，我们会在本章实现它们。这其中的一种叫作循环队列。循环队列的一个例子就是击鼓传花游戏（hot potato）。在这个游戏中，孩子们围成一个圆圈，把花尽快地传递给旁边的人。某一时刻传花停止，这个时候花在谁手里，谁就退出圆圈、结束游戏。重复这个过程，直到只剩一个孩子（胜者）

```js
// 模拟的击鼓传花游戏
function hotPotato(element, num) {
  const queue = new Queue()
  const elimitatedList = []

  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue = elementsList[i]
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    elimitatedList.push(queue.dequeue())
  }

  return {
    eliminated: elimitatedList,
    winner: queue.dequeue(),
  }
}
```

### 回文检查器

> 回文是正反都能读通的单词、词组、数或一系列字符的序列，例如 madam 或 racecar。

有不同的算法可以检查一个词组或字符串是否为回文。最简单的方式是将字符串反向排列并检查它和原字符串是否相同。如果两者相同，那么它就是一个回文。我们也可以用栈来完成，但是利用数据结构来解决这个问题的最简单方法是使用双端队列。

```js
// 回文检查器
function palindromeChecker(aString) {
  if (
    aString === undefined ||
    aString === null ||
    (aString !== null && aString.length === 0)
  ) {
    return false
  }
  const deque = new Deque()
  const lowString = aString.toLocaleLowerCase().split(' ').joon('')
  let isEqual = true
  let firstChar, lastChar

  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString[i])
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
```
