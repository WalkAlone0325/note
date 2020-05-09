## 1. 子组件修改父组件传递的 prop

Object.defineProperty()

## 2. this.\$emit 返回值是什么

this（如果需要返回值可以使用回调参数）

## 3. 相同名称的插槽是合并还是替换

- Vue2.5 版本，普通插槽合并
- Vue2.6 版本，都是替换

## 4. 为什么不能用 index 作为 key

- 更新 DOM 性能问题
- 会引入状态 BUG 问题

## 5. 数组有哪些方法支持响应式更新，如不支持如何处理，底层原理怎么实现

- 支持：`push()` `pop()` `shift()` `unshift()` `splice()` `sort()` `reserve()`
- 不支持：`filter()` `concat()` `slice()`
- 原理同样是使用 `Object.defineProperty` 对数组方法进行重写

## 6. 对 watch 改造，用户输入停止 500ms 后才更新

- setTimeout
- loadsh debounce

## 7. 设计秒杀倒计时组件
