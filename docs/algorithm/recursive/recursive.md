# 递归

> 递归是一种解决问题的方法，它从解决问题的各个小部分开始，直到解决最初的大问题。递归通常涉及函数调用自身。

## 计算一个数的阶乘

如何计算一个数的阶乘。数 n 的阶乘，定义为 n!，表示从 1 到 n 的整数的乘积。5 的阶乘表示为 5!，和 5×4×3×2×1 相等，结果是 120。

### 迭代阶乘

如果尝试表示计算任意数 n 的阶乘的步骤，可以将步骤定义如下：(n) _ (n -1) _ (n -2) _ (n -3) _... \* 1。

```js
function factorial(num) {
  if (num < 0) return undefined
  let total = 1
  for (let n = num; n > 1; n--) {
    total = total * n
  }
  return total
}
console.log(factorial(5))
```

### 递归阶乘

现在我们试着用递归来重写 factorialIterative 函数，但是首先使用递归的定义来定义所有的步骤。
5 的阶乘用 5×4×3×2×1 来计算。4(n -1)的阶乘用 4×3×2×1 来计算。计算 n -1 的阶乘是我们计算原始问题 n！的一个子问题，因此可以像下面这样定义 5 的阶乘。

- (1) factorial(5) = 5 \_ factorial(4)：我们可以用 5×4！来计算 5!。
- (2) factorial(5) = 5 _ (4 _ factorial(3))：我们需要计算子问题 4!，它可以用 4×3!来计算。- - (3) factorial(5) = 5 _ 4 _ (3 \_ factorial(2))：我们需要计算子问题 3!，它可以用 3×2！来计算。
- (4) factorial(5) = 5 _ 4 _ 3 _ (2 _ factorial(1))：我们需要计算子问题 2!，它可以用 2×1！来计算。
- (5) factorial(5) = 5 _ 4 _ 3 _ 2 _ (1)：我们需要计算子问题 1!。
- (6) factorial(1)或 factorial(0)返回 1。1！等于 1。我们也可以说 1! = 1×0! ,0！也等于 1。使用递归的 factorial 函数定义如下。

```js
function factorial(n) {
  if (n === 1 || n === 0) {
    return 1
  }
  return n * factorial(n - 1)
}
console.log(factorial(5))
```

## 斐波那契数列

斐波那契数列是另一个可以用递归解决的问题。它是一个由 0、1、1、2、3、5、8、13、21、34 等数组成的序列。数 2 由 1+1 得到，数 3 由 1+2 得到，数 5 由 2+3 得到，以此类推。斐波那契数列的定义如下。

- ❑ 位置 0 的斐波那契数是零。
- ❑ 1 和 2 的斐波那契数是 1。
- ❑ n（此处 n > 2）的斐波那契数是（n -1）的斐波那契数加上（n -2）的斐波那契数。

### 迭代求斐波那契数

```js
function fibonacci(n) {
  if (n < 1) return 0
  if (n <= 2) return 1

  let fibNMinus2 = 0
  let fibNMinus1 = 1
  let fibN = n
  for (let i = 0; i <= n; i++) {
    fibN = fibNMinus1 + fibNMinus2 // f(n-1)+f(n-2)
    fibNMinus2 = fibNMinus1
    fibNMinus1 = fibN
  }
  return fibN
}
```

### 递归求斐波那契数

```js
function fibonacci(n) {
  if (n < 1) return 0
  if (n <= 2) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}
```

### 记忆化斐波那契数

还有第三种写 fibonacci 函数的方法，叫作记忆化。记忆化是一种保存前一个结果的值的优化技术，类似于缓存。如果我们分析在计算 fibonacci(5)时的调用，会发现 fibonacci(3)被计算了两次，因此可以将它的结果存储下来，这样当需要再次计算它的时候，我们就已经有它的结果了。

```js
function fibonacciMemoization(n) {
  const memo = [0, 1]
  const fibonacci = (n) => {
    if (memo[n] != null) return memo[n]
    return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo))
  }
  return fibonacci
}
```

迭代的版本比递归的版本快很多，所以这表示递归更慢。但是，再看看三个不同版本的代码。递归版本更容易理解，需要的代码通常也更少。另外，对一些算法来说，迭代的解法可能不可用，而且有了尾调用优化，递归的多余消耗甚至可能被消除。
