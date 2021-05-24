## 组件之间如何通讯?
- 父子组件props
- 自定义事件
- Redux 和 Context

## JSX 本质是什么?
- createElement
- 执行返回vnode

## Context是什么,如何应用?
- 父组件，向其下所有子孙组件传递信息
- 如一些简单的公共信息：主题色，语言等
- 用 props 传递过于复杂， 用redux过度设计

### SCU用途?
- 性能优化
- 配合不可变值一起使用，否则可能出错

### Redux 单向数据流?
view --> action --> dispatch --> reducer --> state --> view

### 什么是纯函数?
- 返回一个新值，没有副作用(不会偷偷修改其他值)
- 重点-不可变值
- 输入输出一致如 arr = arr.slice

###  列表渲染，为何使用 key?
- 同Vue。必须用key，切不能是index和random
- diff算法中通过tag和key来判断，是否是sameNode
- 减少渲染次数，提升渲染性能

### 函数组件和class组件的区别?
- 纯函数，输入props输出jsx
- 没有实例，没有生命周期，没有state
- 不能扩展其他方法

### 什么是受控组件?
- 表单的值，受state控制
- 需要自行监听onChange，更新State
- 对比非受控组件

### 何时使用异步组件?
- 同Vue
- 加载大组件
- 路由懒加载

### 多个组件公共逻辑，如何抽离?
- 高阶组件HOC
- render props
- mixin 已被react废弃

### redux如何进行异步请求?
- 使用异步action
- 如redux-saga

### react-router如何配置懒加载?
```javascript
import { BrowerRouter as Router, Route, Switch } from 'react'
import React, { Suspense, lazy } from 'react'

const Home = lazy(() => import('./routers/Home'))
const About = lazy(() => import('./routers/About'))

const App = () => {
  <Router>
    <Suspense fallback={<div>loading</div>} >
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </Switch>
    </Suspense>
  </Router>
}
```
### PureComponent有何区别?
- 实现了浅比较的SCU
- 性能优化
- 但要结合不可变值使用

### React事件和DOM事件区别?
- 所有事件挂载到document上
- event不是原生，是SyntheticEvent合成事件对象
- dispatchEvent

### React性能优化?
- 列表使用key
- 自定义事件，DOM事件及时销毁
- 合理使用异步组件
- 减少函数bind this次数
- 合理使用SCU PureComponent 和memo
- 合理使用Immitable.js
- webpack层面
- 前端通用优化，懒加载
- SSR

### React和Vue区别?
`同`
- 都支持组件化
- 都是数据驱动视图
- 都使用vdom操作dom

`异`
- React使用JSX拥抱js，Vue使用模板拥抱html
- React是函数式编程，Vue是声明式编程
- React更多需要自力更生，Vue把想要的都给你
