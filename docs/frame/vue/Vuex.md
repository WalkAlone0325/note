## 1. Vuex 底层原理

- `state`：提供一个响应式数据
- `getter`：借助 `Vue` 的计算属性 `computed` 来实现缓存
- `mutation`：更改 `state` 方法
- `action`：触发 `mutation` 方法
- `module`：`Vue.set` 动态添加 `state` 到响应式数据中

Vuex-mini 实现：

```js
import Vue from 'vuex'
const Store = function Store(options = {}) {
  const { state = {}, mutations = {} } = options
  this._vm = new Vue({
    data: {
      $$state: state,
    },
  })
  this._mutations = mutations
}
Store.prototype.commit = function (type, payload) {
  if (this._mutations[type]) {
    this._mutations[type](this.state, payload)
  }
}
Object.defineProperties(Store, prototype, {
  state: {
    get: function () {
      return this._vm._data.$$state
    },
  },
})
export default { Store }
```

## 2.
