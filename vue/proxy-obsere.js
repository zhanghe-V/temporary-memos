// 创建响应式
function reactive(target = {}) {
  // 不是对象或数组, 则返回
  if (typeof target !== 'object' || target === null) {
      return target
  }

  // 代理配置
  const proxyConf = {
    get(target, key, receiver) {
      // 只处理本身（非原型）的属性
      const ownKeys = Reflect.ownKeys(target)
      if (ownKeys.includes(key)) {
        console.log('proxy get', key)
      }
  
      const result = Reflect.get(target, key, receiver)

      // 深度监听
      // 性能提升? 何时用，何时代理
      return reactive(result)
    },
    set(target, key, val, receiver) {
      // 重复数据不处理
      if (target[key] === val) {
        return true
      }
      
      const ownKeys = Reflect.ownKeys(target)
      if (ownKeys.includes(key)) {
        console.log('已有的key')
      } else {
        console.log('新增的key')
      }

      const result = Reflect.set(target, key, val, receiver)
      console.log('proxy set', key, val)
      return result // 是否设置成功
    },
    deleteProperty(target, key) {
      const result = Reflect.deleteProperty(target, key)
      console.log('proxy delete property', key)
      return result // 是否设置成功
    }
  }

  // 生成代理对象
  const observed = new Proxy(target, proxyConf)
  return observed
}

const data = {
  name: 'zhangsan',
  age: 20,
  info: {
      address: 'heijing'
  },
  nums: [10, 20, 30]
}

const proxyData = reactive(data)