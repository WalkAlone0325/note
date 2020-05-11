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

// 从十进制到二进制
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

console.log(decimalToBinary(233)); // 11101001
console.log(decimalToBinary(10)); // 1010
console.log(decimalToBinary(1000)); // 1111101000


// 进制转换算法
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

console.log(baseConverter(100435, 2)); // 110001000010011
console.log(baseConverter(100435, 8)); // 304123
console.log(baseConverter(100435, 16)); // 18853
console.log(baseConverter(100435, 35)); // 2BZK