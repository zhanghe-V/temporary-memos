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
`同步和异步区别`
同步会导致代码阻塞，异步不会

`异步应用场景`
- 网络请求
- 定时任务
- 资源加载

`关键字`
- Call Stack
- Web APIs
- Callback Queue
- Event Loop

`Event loop过程`
- 同步代码，一步一步放在call stack(调用栈)执行
- 遇到异步，会先记录下(Web API或micro task queue)，等待时机(定时，网络请求等)
- 时机到了，就移动到callback queue(队列)
- 如 call stack为空(即同步代码执行完毕) Event Loop开始工作
- 轮循查找callback queue，如果有则移动到call stack
- 继续轮循查找

- ☆ 如 call stack为空, 先尝试进行DOM渲染, 后触发event loop

`DOM 事件和event loop`
- JS是单线程的
- 异步(settimeout, ajax)使用回调，基于event loop
- DOM事件也使用回调，基于event loop

`DOM渲染和event loop`
- 每次call stack清空(即每次轮循结束),即同步任务执行完毕
- 执行当前微任务(从micro task queue中)
- 都是DOM重新渲染的机会,DOM结构如有改变则重新渲染
- 然后再去触发下一次 event loop

### Promise
`then 和 catch 改变状态`
- then正常返回resolve，里面有报错返回reject
- catch正常返回resolve，里面有报错返回reject

```javascript
// 三道经典题目
Promise.resolve().then(() => {
  console.log(1) // 1
}).catch(() => {
  console.log(2)
}).then(() => {
  console.log(3) // 3
})

Promise.resolve().then(() => {
  console.log(1) // 1
  throw new Error('error1')
}).catch(() => { // 2
  console.log(2)
}).then(() => {
  console.log(3) // 3
})

Promise.resolve().then(() => {
  console.log(1) // 1
  throw new Error('error1')
}).catch(() => { // 2
  console.log(2)
}).catch(() => { // 上一步没有报错，返回resolve
  console.log(3)
})
```

### async/await
- 彻底消灭异步回调
- 但和Promise并不互斥
- 两者相辅相成

`async/await与Promise关联`
- 执行async，返回的是Promise对象
- await 相当于Promise 的then
- try...catch可捕获异常，相当于Promise的catch
 
 `for...of`
 不同于forEach和forin，forof是拥有异步的，即forof中的异步会依次执行完毕。

### 宏任务(macroTask)和微任务 (microTask) 
- 宏任务: setTimeout, setInterval, Ajax, DOM事件
- 微任务：Promise async/await

- 微任务的执行时机比宏任务要早
- 宏任务: DOM渲染后触发
- 微任务: DOM渲染前触发

为什么?
- 宏任务是浏览器规定的 (放在web apis中等待执行)
- 微任务是ES6规定的 (放在 micro task queue 中等待执行)

### drag 拖拽事件整理
- dragstart 拖动开始，只触发一次，鼠标变成禁止
- drag 拖动时连续触发
- dragenter 拖动进入目标元素时触发，阻止默认事件，可使鼠标变回move
- dragover 在目标元素内移动触发
- dragleave 离开目标元素触发
- dragend 拖动结束触发
- drop 拖动至目标元素松开鼠标触发

### XMLHttpRequest
```javascript
// 手写 ajax
const xhr = new XMLHttpRequest
xhr.open('GET', '/api', true) // true:异步 false同步
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText)
  }
}
xhr.send(null) // 参数
```
`xhr status`
- 2xx：成功了
- 3xx：需要重定向，浏览器直接跳转 301 302 304(缓存)
- 4xx：客户端请求错误 403 404
- 5xx：服务器端错误

`同源策略`
- 浏览器最基本策略: ajax请求时，浏览器要求当前网页和server必须同源(安全)
- 同源：协议，域名，端口三者必须一致

- 加载图片，css，js 可无视同源策略
- <img/>可用于统计打点，可使用第三方统计服务
- <link/><script/>可使用CDN
- <script/>实现JSONP

`跨域`
- 所有的跨域，都必须经过server端允许
- JSONP - 利用script不受同源策略限制
- CORS - 服务器设置http header

```javascript
// axios 手写 jsonp
axios.jsonp = (url) => {
    if (!url) {
        console.error('Axios.JSONP 至少需要一个url参数!')
        return
    }
    return new Promise((resolve, reject) => {
        window.jsonCallBack = (result) => {
            resolve(result)
        }
        var JSONP = document.createElement('script')
        JSONP.type = 'text/javascript'
        JSONP.src = `${url}&callback=jsonCallBack`
        document.getElementsByTagName('head')[0].appendChild(JSONP)
        setTimeout(() => {
            document.getElementsByTagName('head')[0].removeChild(JSONP)
        }, 500)
    })
}
// CORS
// 第二个参数填写允许跨域的域名城，不建议写'*'
response.setHeader("Access-Control-Allow-Origin","http://localhost:8080")
response.setHeader("Access-Control-Allow-Headers","x-requested-with,Content-Type")
response.setHeader("Access-Control-Allow-Methods","POST,OPTIONS,GET")
// 接收跨域的cookie
response.setHeader("Access-Control-Allow-Credentials","true")
response.setHeader("Access-Control-Max-Age","3600")
```
### 存储 - cookie，localStorage，sessionStorage
`cookie`
- 本身用来浏览器和server通讯
- 被'借用'来做本地存储(h5出现)
- 可用document.cookie='' 来修改(获取)
缺点：
- 存储大小，最大4kb
- http请求时需要发送到服务端，增加请求数据量
- 只能用document.cookie=''来修改，太过简陋
`localStorage 和 sessionStorage`
- HTML5 专门为存储设计，最大5M
- API 简单易用 setItem getItem(key-value(字符串)形式)
- 不会随着http发送
区别：
- localStorage 数据会永久存储，除非代码或手动删除
- sessionStorage 数据只存在于当前会话，浏览器关闭则清空
- 一般用localStorage 多一些

### http
`http状态码`
- 1xx：服务器收到请求
- 2xx：成功了 
- - 200(成功)
- 3xx：需要重定向，浏览器直接跳转   304(缓存)
- - 301 永久重定向(配合location, 浏览器自动处理) -场景：换域名
- - 302 临时重定向(配合location, 浏览器自动处理) -场景：网站外链
- - 304 资源未被修改
- 4xx：客户端请求错误 403 404
- - 403 资源无权限
- - 404 资源未找到
- 5xx：服务器端错误
- - 500 服务器错误
- - 504 网关超时

`http methods`
- get 获取数据
- post 新建数据
- patch/put 更新数据
- delete 删除数据

`Restful API`
- 一种API设计方法
- 传统API设计：把每个url当做一个功能(/api/list?page=2)
- Restful API设计：把每个url当做一个唯一的资源(/api/page/2)
 
- 尽量不用url参数
- 用method作为api类型 

`http headers`
request headers
- Accept 浏览器可接受的数据格式
- Accept-Encodeing 浏览器可接受的压缩算法如gzip
- Accept-Language 接收语言zh-CN
- Connection: Keep-alive 一次TCP连接重复使用
- Cookie
- User-Agent(UA)浏览器信息
- Content-type 发送数据格式如application/json
response headers
- Content-type 返回数据格式
- Content-length 返回数据大小(字节)
- Content-Encoding 返回数据的压缩算法如gzip
缓存相关的headers
- Cache-Control 

`http 缓存`
