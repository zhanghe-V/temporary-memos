
## Vue原理
`Vue原理`
- 组件化 和 MVVM
- 响应式
- vdom 和 diff
- 模板编译
- 渲染过程
- 前端路由


### 1. 组件化 - MVVM 数据驱动视图
View --- ViewModel --- Model
视图     click和事件    data中的数据


### 2. Vue 响应式
组件data 数据一旦变化，立刻出发视图的更新
实现数据驱动的第一步


核心API： Object.defineProperty 的 get 和 set 函数
- 监听对象， 监听数组
- 复杂对象， 深度监听
- 几个缺点
    - 深度监听，需要递归到底，一次性计算量大
    - 无法监听新增属性/删除属性(Vue.set/Vue.delete)


3.x 版本采用 proxy（兼容性不好，且无法 polyfill，IE11不支持）

### 3. 虚拟Dom 和 diff
- DOM 操作非常耗费性能， JS运行速度快
- jq 可以自行控制操作时机，手动调整
- Vue 和 React 是数据驱动视图， 如何让有效控制Dom -- vdom

通过 snabbdom 学习 vdom

`树 diff 的时间复杂的 O(n^3)`
- 第一，遍历 tree1； 第二， 遍历tree2
- 第三，排序
- 1000 个节点，要计算1亿次，算法不可用

`优化时间复杂度到 O(n)`
- 之比较同一层级，不跨级比较
- tag 不同，则直接删除，不在深度比较
- tag 和 key，两者都相同，则认为相同节点，不再深度比较

`patchVnode 函数核心函数：`
- updateChildren (key 的重要性)
- addVnodes
- removeVnodes
- setTextContent

vnode 核心概念(h, vnode, patch, diff, key)

### 4. 模板编译 - 组件渲染和更新过程
vue-templete-complier 将模板编译为 render 函数
执行render 函数生成 vnode 

- 模板编译为render函数，执行render函数返回vnode
- 基于vnode在执行 patch 和diff
- 使用 webpack vue-loader，会在开发环境下编译模板

组件渲染/更新过程
`渲染：`
- 模板解析为 render 函数（或在开发环境完成， vue-loader）
- 触发响应式监听，监听data 的getter 和setter
- 执行render函数，生成vnode，生成vnode，patch（elem，vnode）

`更新：`
- 修改data，触发setter（此前在getter中已被监听）
- 重新执行render函数，生成newVnode
- patch（vnode，newVnode）

### 5. 前端路由原理/vue-router 的使用

`路由模式： hash，H5 history`
- 框架一般默认采用 hash 模式
- hash 路由带 # 标志， history没有
- hash 请求时只会把 # 前的链接发送给服务器，不需要后端特殊处理, 且刷新页面不会出现404
- history 请求服务器时发送一整条url, 服务器不认识会报404
- hash原理： 通过监听浏览器的 window.onhashchange 事件变化，查找匹配对应路由规则
- history原理： 利用H5 history中新增的两个API: pushState() 和 replaceState() 和一个事件 onpopstate 监听url变化

`hash特点：`
- hash变化会触发网页跳转，及浏览器前进、后退
- hash变化不会刷新页面，SPA必须的特点
- hash永远不会提交到server端
- window.onHashChange

`H5 history：`
- 用url规范的路由，但跳转时不刷新页面
- hostory.pushState // 跳转
- window.onpopstate // 前进后退

二者选择：
- to B系统推荐用hash，简单易用，对url规范不敏感
- to C可以考虑 H5 history，但需要服务端支持
- 能简则简，考虑成本和收益

#hash
路由配置： 动态路由， 懒加载
- 动态路由，{ path: 'user/:id', component: AAA }
- component: () => import('') 与组件导入懒加载一致



### vue高级特性
- v-model
- $nextTick
- slot
- 动态组件，异步组件
- keep-alive
- mixin

### 异步组件


直接import + 在component中注册的是同步加载组件
异步方式：
components： {
    TestDemo: () => import('../TestDemo')
}

### 缓存组件-频繁切换，不需要重复渲染
用 keep-alive 标签把需要缓存的子组件包起来即可


### mixin混入- 多个组件有相同逻辑，抽离出来
minxin问题: 
- / 变量来源不明确，不便于阅读。
- / 多 mixin 可能会引起命名冲突的问题。 
- / 可能会出现多对多的关系，复杂度较高。（剪不断理还乱的问题）


Vue3 Composition API 解决这些问题。
本质是一段与vue文件类似的js代码。

### Vuex的使用
- state   -   mapStete
- getters  - mapGetters
- mutations - mapMutations - commit
- actions  - mapActions- dispatch - 异步操作/整合mutations
- moduels - 模块化


`流程: `
- vue Component -
- dispatch -Actions - 
- commit - Mutations - 
- mutate - State - 
- render - VueComponent
