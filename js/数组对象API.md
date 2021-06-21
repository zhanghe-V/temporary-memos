### 数组常用方法

`非纯函数`
- 数组纯函数： 1.不改变原有数组(无副作用)； 2. 返回一个数组
- push/pop/shift/unshift
- foreach
- some
- every
- reduce
- splice(剪切)
`纯函数`
- concat
- map
- filter
- slice(切片)

### new Object() 和 Object.create() 区别?
- const obj2 = new Object(obj1) // obj1 === obj2 true
- Object.create 创建的对象没有原型，原型指向参数对象
