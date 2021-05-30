### typeOf能判断哪些类型?
- 值类型：存储在栈(通过key-value) (number, string, boolean, symbol, undefined)
- 引用类型：存储在堆(栈中存的是内存地址) (object, array, null, function )
- typeOf能判断 所有的值类型|函数|是否是引用类型

### 何时使用== / ===?
- ==会进行类型转换 100 == '100' √
- 除了 ==null 之外，其他一律使用 ===，例如
```javascript
const obj = {x:100}
if(obj.a == null) {} // 相当于 if(obj.a===null || obj.a===undefind)
```

### 原型和原型链?
`ES6 class继承`
- extends
- super
- 扩展或重写方法

`原型`
- 每个class都有显式原型 prototype
- 每个实例都有隐式原型__proto__
- 实例的隐式原型指向class的显式原型

`执行规则`
- 获取属性或执行方法时
- 现在自身属性和方法寻找
- 找不到就自动去隐式原型中找

### 作用域和闭包
`作用域`
- 全局作用域
- 函数作用域
- 块级作用域

`闭包`
作用域应用的特殊情况，有两种表现
- 函数作为参数被传递 
- 函数作为返回值被返回
```javascript
// 函数作为返回值
function create() {
  let a = 100
  return function() {
    console.log(a)
  }
}
let fn = create()
let a = 200
fn() // 100

// 函数作为参数
function print1(fn) {
  let a = 200
  fn()
}
let a = 100
function fn() {
  console.log(a)
}
print1(fn)

// 闭包：自由变量的查找，是在函数定义的地方，向上级作用域查找
// 不是在函数执行的地方!!!
```

`闭包应用场景`
- 外界访问函数内部变量

### this 不同场景取值
`this 的值是在函数执行时确定`
- 普通函数执行时 指向window
- 定时器中this， 指向window(特例：定时器中箭头函数)
- 使用call，apply，bind 改变this 指向改变者
- 箭头函数 this 指向父级this
- class中this(对象方法中) 指向构造函数本身


- 手写 bing 函数
```javascript
Function.prototype.selfBind = function() {
  // 将参数拆解为数组
  const args = Array.prototype.slice.call(arguments)

  // 获取this(数组第一项)
  const t = args.shift()

  // fn1.bind(...) 中的fn1
  const self = this

  // 返回函数
  return function() {
    return self.apply(t, args)
  }
}
```
### 异步和单线程?