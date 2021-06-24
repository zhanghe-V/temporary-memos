// 触发视图更新
function updateView() {
  console.log('视图更新')
}


// 重新定义数组原型
const oldArrayProperty = Array.prototype;
// 创建新对象，原型指向 oldArrayProperty， 在扩展新方法不会影响原型
const arrProto = Object.create(oldArrayProperty);
['push', 'pop', 'unshift', 'shift'].forEach(methodName => {
  arrProto[methodName] = function () {
    updateView() // 触发试图更新
    oldArrayProperty[methodName].call(this, arguments)
  }
})



// 重新定义属性，监听起来
function defineReactive(target, key, value) {
  // 深度监听
  observe(value)


  // 核心API
  Object.defineProperty(target, key, {
      get() {
          return value
      },
      set(newVal) {
          if (newVal !== value) {
              // 深度监听
              observe(newVal)
              value = newVal
              // 触发更新视图
              updateView()
          }
      }
  })
}


// 监听对象属性
function observe(target) {
  if (typeof target !== 'object' || target === null) {
      // 不是对象或数组
      return target
  }

  if (Array.isArray(target)) {
    target.__proto__ = arrProto
  }

  // 重新定义各个属性
  for (let key in target) {
      defineReactive(target, key, target[key])
  }
}


const data = {
  name: 'zhangsan',
  age: 20,
  info: {
      address: 'heijing'
  },
  nums: [10, 20, 30]
}


observe(data)


// data.name = 'lisi'
// data.age = 22
// data.info.address =  'hangz'
// data.x = '22'
data.nums.push(4)