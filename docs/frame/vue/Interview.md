## 1. 监听组件的生命周期

父组件`Parnet`和子组件`Child`，如果父组件监听到子组件挂载 `mounted` 就做一些逻辑处理，常规写法如下：

```js
// Parent.vue
<Child @mounted="doSomething" />

// Child.vue
mounted() { this.$emit("mounted"); }
```

此外，还有一种特别简单的方式，子组件不需要任何处理，只需要在父组件引用的时候通过`@hook` 来监听即可，代码如下：

```html
<Child @hook:mounted="doSomething" />
<Child @hook:updated="doSomething" />
```

当然这里不仅仅是可以监听 `mounted`，其它的生命周期事件，例如：` created``，updated ` 等都可以。

## 2. watch 的初始立即执行

观察和响应 `Vue` 实例上的数据变动，类似于某些数据的监听回调，每当监听的数据变化时都会执行回调进行后续操作。
但是当 `watch` 一个**变量**的时候，初始化时并不会执行，如下面的例子，你需要在 `created` 的时候手动调用一次。

```js
created() {
this.getList();
},
watch: {
keyWord: 'getList',
}
```

上面这样的做法可以使用，但很麻烦，我们可以添加 `immediate` 属性，这样初始化的时候就会自动触发(不用再写 `created` 去调用了)，然后上面的代码就能简化为：

```js
watch: {
  keyWord: {
    handler: 'getList',
    immediate: true
  }
}
```

watch 有三个参数：

- `handler`：其值是一个回调函数。即监听到变化时应该执行的函数
- `deep`：其值是 true 或 false；确认是否深入监听。
- `immediate`：其值是 true 或 false，确认是否以当前的初始值执行 handler 的函数

## 3. 路由参数变化组件不更新

同一`path`的页面跳转时路由参数变化，但是组件没有对应的更新。

原因：主要是因为获取参数写在了`created`或者`mounted`路由钩子函数中，路由参数变化的时候，这个生命周期不会重新执行。

解决方案 1：`watch`监听路由

```js
watch: {
// 方法1 //监听路由是否变化
  '$route' (to, from) {
  if(to.query.id !== from.query.id){
            this.id = to.query.id;
            this.init();//重新加载数据
        }
  }
}
//方法 2  设置路径变化时的处理函数
watch: {
'$route': {
    handler: 'init',
    immediate: true
  }
}
```

解决方案 2 ：为了实现这样的效果可以给`router-view`添加一个不同的`key`，这样即使是公用组件，只要 url 变化了，就一定会重新创建这个组件。

```html
<router-view :key="$route.fullpath"></router-view>
```

## 4. 路由的懒加载

Vue 项目中实现路由按需加载（路由懒加载）的 3 中方式：

```js
// 1、Vue异步组件技术：
{
    path: '/home',
    name: 'Home',
    component: resolve => reqire(['path路径'], resolve)
  }

// 2、es6提案的import()
  const Home = () => import('path路径')

// 3、webpack提供的require.ensure()
  {
    path: '/home',
    name: 'Home',
    component: r => require.ensure([],() =>  r(require('path路径')), 'demo')
   }
```

## 5. require.context()

`require.context(directory,useSubdirectories,regExp)`

- `directory`：说明需要检索的目录
- `useSubdirectories`：是否检索子目录
- `regExp`: 匹配文件的正则表达式,一般是文件名

场景:如页面需要导入多个组件,原始写法:

```js
import titleCom from '@/components/home/titleCom'
import bannerCom from '@/components/home/bannerCom'
import cellCom from '@/components/home/cellCom'
components: {
  titleCom, bannerCom, cellCom
}
```

这样就写了大量重复的代码,利用 `require.context` 可以写成

```js
const path = require('path')
const files = require.context('@/components/home', false, /\.vue$/)
const modules = {}
files.keys().forEach((key) => {
  const name = path.basename(key, '.vue')
  modules[name] = files(key).default || files(key)
})
components: modules
```

## 6. 递归组件

递归组件: 组件在它的模板内可以递归的调用自己，只要给组件设置 `name` 组件就可以了。

不过需要注意的是，必须给一个条件来限制数量，否则会抛出错误: `max stack size exceeded`

组件递归用来开发一些具体有未知层级关系的独立组件。比如：**联级选择器**和**树形控件**

```vue
<template>
  <div v-for="(item, index) in treeArr">
    {{ index }}
    <br />
    <tree :item="item.arr" v-if="item.flag"></tree>
  </div>
</template>
<script>
export default {
  // 必须定义name，组件内部才能递归调用
  name: 'tree',
  data() {
    return {}
  },
  // 接收外部传入的值
  props: {
    item: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
```

## 7. 清除定时器或者事件监听

由于项目中有些页面难免会碰到需要定时器或者事件监听。但是在离开当前页面的时候，定时器如果不及时合理地清除，会造成业务逻辑混乱甚至应用卡死的情况，这个时就需要清除定时器事件监听，即在页面卸载（关闭）的生命周期函数里，清除定时器。

```js
methods:{
  resizeFun () {
    this.tableHeight = window.innerHeight - document.getElementById('table').offsetTop - 128
  },
  setTimer() {
    this.timer = setInterval(() => { })
  },
  clearTimer() {//清除定时器
    clearInterval(this.timer)
    this.timer = null
  }
},
mounted() {
  this.setTimer()
  window.addEventListener('resize', this.resizeFun)
},
beforeDestroy() {
  window.removeEventListener('resize', this.resizeFun)
  this.clearTimer()
}
```

## 8. 自定义路径别名

我们也可以在基础配置文件中添加自己的路径别名

```js
resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'assets': resolve('src/assets'),
      'components': resolve('src/components')
    }
  }
```

然后我们导入组件的时候就可以这样写：

```js
// import YourComponent from '/src/components/YourComponent'
import YourComponent from 'components/YourComponent'
```

这样既解决了路径过长的麻烦，又解决了相对路径的烦恼。

## 9. 动态修改 dom 的样式

原因：因为我们在写`.vue` 文件中的样式都会追加 `scoped`。这样针对模板 `dom` 中的样式就可以生效，但其生效后的最终样式并不是我们写的样式名，而是编码后的。比如：

```vue
<template>
  <div class="box">dom</div>
</template>
<style lang="scss" scoped>
.box {
  background: red;
}
</style>
```

`vue` 将代码转译成如下，所以我们在`js`中拼接上的`dom`结构样式并不会生效。

```vue
.box[data-v-11c6864c]{ background:red; }
<template>
  <div class="box" data-v-11c6864c>dom</div>
</template>
```

解决方法：将要改变的样式写在 **非 scoped 样式标签** 中。

## 10. 长列表性能优化

我们应该都知道 vue 会通过 object.defineProperty 对数据进行劫持，来实现视图响应数据的变化，然而有些时候我们的组件就是纯粹的数据展示，不会有任何改变，我们就不需要 vue 来劫持我们的数据，在大量数据展示的情况下，这能够很明显的减少组件初始化的时间。

所以，我们可以通过 object.freeze 方法来冻结一个对象，这个对象一旦被冻结，vue 就不会对数据进行劫持了。

```js
export default {
  data: () => ({
    list: [],
  }),
  async created() {
    const list = await axios.get('xxxx')
    this.list = Object.freeze(list)
  },
  methods: {
    // 此处做的操作都不能改变list的值
  },
}
```

另外需要说明的是，这里只是冻结了 list 的值，引用不会被冻结，当我们需要 reactive 数据的时候，我们可以重新给 list 赋值。

## 11. 内容分发(slot)

插槽 slot，也是组件的一块 HTML 模板，这一块模板显示不显示、以及怎样显示由父组件来决定。实际上，一个 slot 最核心的两个问题在这里就点出来了，是显示不显示和怎样显示。

#### 默认插槽

又名单个插槽、匿名插槽，这类插槽没有具体名字，一个组件只能有一个该类插槽。

```vue
<!-- 父组件 parent.vue -->
<template>
  <div class="parent">
    <h1>父容器</h1>
    <child>
      <div class="tmpl">
        <span>菜单1</span>
      </div>
    </child>
  </div>
</template>

<!-- 子组件 child.vue -->
<template>
  <div class="child">
    <h1>子组件</h1>
    <slot></slot>
  </div>
</template>
```

#### 具名插槽

匿名插槽没有 name 属性，所以叫匿名插槽。那么，插槽加了 name 属性，就变成了具名插槽。具名插槽可以在一个组件中出现 N 次，出现在不同的位置，只需要使用不同的 name 属性区分即可。

```vue
<!-- 父组件 parent.vue -->
<template>
  <div class="parent">
    <h1>父容器</h1>
    <child>
      <div class="tmpl" slot="up">
        <span>菜单up-1</span>
      </div>
      <div class="tmpl" slot="down">
        <span>菜单down-1</span>
      </div>
      <div class="tmpl">
        <span>菜单->1</span>
      </div>
    </child>
  </div>
</template>

<!-- 子组件 child.vue -->
<template>
  <div class="child">
    <!-- 具名插槽 -->
    <slot name="up"></slot>
    <h3>这里是子组件</h3>
    <!-- 具名插槽 -->
    <slot name="down"></slot>
    <!-- 匿名插槽 -->
    <slot></slot>
  </div>
</template>
```

#### 作用域插槽

作用域插槽可以是默认插槽，也可以是具名插槽，不一样的地方是，作用域插槽可以为 slot 标签绑定数据，让其父组件可以获取到子组件的数据。

```vue
<!-- parent.vue -->
<template>
  <div class="parent">
    <h1>这是父组件</h1>
    <child
      >>
      <template slot="default" slot-scope="slotProps">
        {{ slotProps.user.name }}
      </template> </child
    >>
  </div>
</template>

<!-- 子组件 child.vue -->
<template>
  <div class="child">
    <h1>这是子组件</h1>
    <slot :user="user"></slot>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        user: {
          name: '小赵'
        }
      }
    }
  }
<script>
```
