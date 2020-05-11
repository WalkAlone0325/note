# 栈

> 栈是一种遵从后进先出（LIFO）原则的有序集合。新添加或待删除的元素都保存在栈的同一端，称作栈顶，另一端就叫栈底。在栈里，新元素都靠近栈顶，旧元素都接近栈底。

在现实生活中也能发现很多栈的例子。例如，下图里的一摞书或者餐厅里叠放的盘子。
栈也被用在编程语言的编译器和内存中保存变量、方法调用等，也被用于浏览器历史记录（浏览器的返回按钮）。

## 创建一个基于数组的栈

创建一个类来表示栈。

```js
class Stack {
  constructor() {
    this.items = []
  }
}
```

数组允许我们在任何位置添加或删除元素。由于栈遵循 LIFO 原则，需要对元素的插入和删除功能进行限制。接下来，要为栈声明一些方法。

- `push(element(s))`：添加一个（或几个）新元素到栈顶
- `pop()`：移除栈顶的元素，同时返回被移除的元素。
- `peek()`：返回栈顶的元素，不对栈做任何修改（该方法不会移除栈顶的元素，仅仅返回它）。
- `isEmpty()`：如果栈里没有任何元素就返回 `true`，否则返回 `false`。
- `clear()`：移除栈里的所有元素。
- `size()`：返回栈里的元素个数。该方法和数组的 `length` 属性很类似。

```js
class Stack {
  constructor() {
    this.items = []
  }
  // 向栈添加元素的方法
  push(element) {
    this.items.push(element)
  }
  // 从栈移除元素
  pop() {
    return this.items.pop()
  }
  // 查看栈顶元素
  peek() {
    return this.items[this.items.length - 1]
  }
  // 检查栈是否为空
  isEmpty() {
    return this.items.length === 0
  }
  // 返回栈的长度
  size() {
    return this.items.length
  }
  // 清空栈元素,也可以多次调用pop方法，把数组中的元素全部移除。
  clear() {
    this.items = []
  }
}
const stack = new Stack()
```

## 创建一个基于 JavaScript 对象的 Stack 类

```js
class Stack {
  constructor() {
    // count属性记录栈的大小,也能从数据结构中添加和删除元素
    this.count = 0
    this.items = {}
  }
  // 向栈中插入元素
  push(element) {
    this.items[this.count] = element
    this.count++
  }
  // 验证一个栈是否为空和它的大小
  size() {
    return this.count
  }
  isEmpty() {
    return this.count === 0
  }
  // 从栈中弹出元素
  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const result = this.items[this.count] // 保存栈顶的值
    delete this.items[this.count]
    return result // 返回栈顶的值
  }
  // 查看栈顶的值并将栈清空
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }
  // 清空该栈
  clear() {
    this.items = {}
    this.count = 0
  }
  // 或者使用下面的方法
  // clear() {
  //   while (!this.isEmpty()) {
  //     this.pop()
  //   }
  // }
  // 创建toString方法
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    // 底部的第一个元素作为字符串的初始值
    let objString = `${this.items[0]}`
    // 迭代整个栈的键
    for (let i = 0; i < this.count; i++) {
      objString = `${objString}，${this.items[i]}`
    }
    return objString
  }
}
```

## 保护数据结构内部元素

> 在创建别的开发者也可以使用的数据结构或对象时，我们希望保护内部的元素，只有我们暴露出的方法才能修改内部结构。对于 `Stack` 类来说，要确保元素只会被添加到栈顶，而不是栈底或其他任意位置（比如栈的中间）。不幸的是，我们在 `Stack` 类中声明的 `items` 和 `count` 属性并没有得到保护，因为 JavaScript 的类就是这样工作的。

下面来看看其他使用 `JavaScript` 来实现私有属性的方法。

### 下划线命名约定

一部分开发者喜欢在 JavaScript 中使用下划线命名约定来标记一个属性为私有属性。

```js
class Stack {
  constructor() {
    this._count = 0
    this._items = {}
  }
}
```

下划线命名约定就是在属性名称之前加上一个下划线（\_）。不过这种方式只是一种约定，并不能保护数据，而且只能依赖于使用我们代码的开发者所具备的常识。

### 用 ES2015 的限定作用域 Symbol 实现类

`ES2015` 新增了一种叫作 `Symbol` 的基本类型，它是不可变的，可以用作对象的属性。看看怎么用它在 `Stack` 类中声明 `items` 属性（我们将使用数组来存储元素以简化代码）。

```js
const _items = Symbol('stackItems')
class Stack {
  constructor() {
    this.[_items] = []
  }
}
```

访问 `stack[objectSymbols[0]]`是可以得到`_items` 的。并且，`_items` 属性是一个数组，可以进行任意的数组操作，比如从中间删除或添加元素（使用对象进行存储也是一样的）。但我们操作的是栈，不应该出现这种行为

### 用 ES2015 的 WeakMap 实现类

有一种数据类型可以确保属性是私有的，这就是 `WeakMap`

```js
const items = new WeakMap()
class Stack {
  constructor() {
    items.set(this, [])
  }
  push(element) {
    const s = items.get(this)
    s.push(element)
  }
  pop() {
    const s = items.get(this)
    const r = s.pop()
    return r
  }
}
```

## 栈 算法实例

### 1. 从十进制到二进制

```js
function decimalToBinary(decNumber) {
  const remStack = new Stack()
  let number = decNumber
  let rem
  let binaryString = ''

  // 当除法的结果不为0时
  while (number > 0) {
    // 获得一个余数，并放到栈里
    rem = Math.floor(number % 2) // 使用Math.floor函数仅返回除法运算结果的整数部分
    remStack.push(rem)
    // 结果继续除以2
    number = Math.floor(number / 2)
  }

  // 用pop方法把栈中的元素都移除，把出栈的元素连接成字符串
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString()
  }
  return binaryString
}

console.log(decimalToBinary(233)) // 11101001
console.log(decimalToBinary(10)) // 1010
console.log(decimalToBinary(1000)) // 1111101000
```

### 2. 进制转换算法

```js
function baseConverter(decNumber, base) {
  const remStack = new Stack()
  const digits = '0123456789ABCDEFGHIJKMNOPQRSTUVWXYZ'
  let number = decNumber
  let rem
  let baseSting = ''

  if (!(base >= 2 && base <= 36)) {
    return ''
  }

  while (number > 0) {
    rem = Math.floor(number % base)
    remStack.push(rem)
    number = Math.floor(number / base)
  }

  while (!remStack.isEmpty()) {
    baseSting += digits[remStack.pop()]
  }
  return baseSting
}

console.log(baseConverter(100435, 2)) // 110001000010011
console.log(baseConverter(100435, 8)) // 304123
console.log(baseConverter(100435, 16)) // 18853
console.log(baseConverter(100435, 35)) // 2BZK
```

我们只需要改变一个地方。在将十进制转成二进制时，余数是 0 或 1；在将十进制转成八进制时，余数是 0 ～ 7；但是将十进制转成十六进制时，余数是 0 ～ 9 加上 A、B、C、D、E 和 F（对应 10、11、12、13、14 和 15）。因此，我们需要对栈中的数字做个转化才可以（行{6}和行{7}）。因此，从十一进制开始，字母表中的每个字母将表示相应的基数。字母 A 代表基数 11, B 代表基数 12，以此类推。
