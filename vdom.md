1. 虚拟Dom 和 diff
- DOM 操作非常耗费性能， JS运行速度快
- jq 可以自行控制操作时机，手动调整
- Vue 和 React 是数据驱动视图， 如何让有效控制Dom -- vdom

通过 snabbdom 学习 vdom

树 diff 的时间复杂的 O(n^3)
- 第一，遍历 tree1； 第二， 遍历tree2
- 第三，排序
- 1000 个节点，要计算1亿次，算法不可用

优化时间复杂度到 O(n)
- 之比较同一层级，不跨级比较
- tag 不同，则直接删除，不在深度比较
- tag 和 key，两者都相同，则认为相同节点，不再深度比较

patchVnode 函数核心函数：
- updateChildren (key 的重要性)
- addVnodes
- removeVnodes
- setTextContent

vnode 核心概念(h, vnode, patch, diff, key)

2. 模板编译 - 组件渲染和更新过程
vue-templete-complier 将模板编译为 render 函数
执行render 函数生成 vnode 

- 模板编译为render函数，执行render函数返回vnode
- 基于vnode在执行 patch 和diff
- 使用 webpack vue-loader，会在开发环境下编译模板

#### Vue 原理 -总结
- 响应式：监听data 属性getter setter 包括数组
- 模板编译：模板到render函数(with 语法)，再到vnode，再到渲染和更新
- vnode： patch(elem, vnode) 和 patch(vnode, newVnode)

组件渲染/更新过程
渲染：
- 模板解析为 render 函数（或在开发环境完成， vue-loader）
- 触发响应式监听，监听data 的getter 和setter
- 执行render函数，生成vnode，生成vnode，patch（elem，vnode）

更新：
- 修改data，触发setter（此前在getter中已被监听）
- 重新执行render函数，生成newVnode
- patch（vnode，newVnode）

异步渲染：
- $nextTick每次修改只触发一次
- 汇总data的修改，一次性修改视图
- 减少dom操作次数，提高性能

小结：
- 渲染和响应式的关系
- 渲染和模板编译的关系
- 渲染和vdom的关系

### 前端路由原理

hash特点：
- hash变化会触发网页跳转，及浏览器前进、后退
- hash变化不会刷新页面，SPA必须的特点
- hash永远不会提交到server端
- window.onHashChange

H5 history：
- 用url规范的路由，但跳转时不刷新页面
- hostory.pushState // 跳转
- window.onpopstate // 前进后退

二者选择：
- to B系统推荐用hash，简单易用，对url规范不敏感
- to C可以考虑 H5 history，但需要服务端支持
- 能简则简，考虑成本和收益

### Vue 常见性能优化
- 合理使用 v-show 和 v-if
- 合理使用 computed
- v-for 时加 key，以及避免和 v-if 同时使用
- 自定义时间，DOM事件及时销毁
- 合理使用异步组件
- 合理使用 keep-alive
- data 层级不要太深

#### Reflect
- Reflect 的能力和 proxy 一一对应
- 规范化，标准化，函数式
- 代替Object上的工具函数

### Proxy实现响应式
- 深度监听性能更好
- 可监听新增/删除属性
- 可监听数组变化

### 总结
- Proxy能规避 Object.defineProperty的问题
- Proxy无法兼容所有浏览器（IE11），无法profill
