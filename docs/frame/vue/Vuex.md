## 1. Vuex 底层原理

- `state`：提供一个响应式数据
- `getter`：借助 `Vue` 的计算属性 `computed` 来实现缓存
- `mutation`：更改 `state` 方法
- `action`：触发 `mutation` 方法
- `module`：`Vue.set` 动态添加 `state` 到响应式数据中

Vuex-mini 实现：

```js
let Vue
function install(_Vue) {
  Vue = _Vue
  function vuexInit() {
    var options = this.$options
    // store injection
    if (options.store) {
      this.$store =
        typeof options.store === 'function' ? options.store() : options.store
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store
    }
  }
  Vue.mixin({ beforeCreate: vuexInit })
}

const Store = function Store(options = {}) {
  const { state = {}, mutations = {}, getter = {} } = options
  const computed = {}
  const store = this
  store.getter = {}
  // getters 缓存
  for (let [key, fn] of Object.defineProperties(getters)) {
    computed[key] = function () {
      return fn(store.state, store.getters)
    }
    Object.defineProperty(store.getters, key, {
      get: function () {
        return store._vm[key]
      },
    })
  }

  this._vm = new Vue({
    data: {
      $$state: state,
    },
    computed,
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
export default { Store, install }
```
