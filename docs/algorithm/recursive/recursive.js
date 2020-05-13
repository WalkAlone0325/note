function factorial(num) {
  if (num < 0) return undefined
  let total = 1
  for (let n = num; n > 1; n--) {
    total = total * n
  }
  return total
}
console.log(factorial(5))

function factorial(n) {
  if (n === 1 || n === 0) {
    return 1
  }
  return n * factorial(n - 1)
}
console.log(factorial(5));

// 用迭代的方法实现了fibonacci函数
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

// 递归求斐波那契数
function fibonacci(n) {
  if (n < 1) return 0
  if (n <= 2) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

// 记忆化斐波那契数
function fibonacciMemoization(n) {
  const memo = [0, 1]
  const fibonacci = n => {
    if (memo[n] != null) return memo[n]
    return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
  }
  return fibonacci
}