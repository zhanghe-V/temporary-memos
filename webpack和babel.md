## webpack
- 基本配置
- 高级配置
- 优化打包效率
- 优化产出代码
- 构建流程概述
- babel

### 基本配置
- 拆分配置和 merge:webpack.common/env/prod.js
- entry/output
- loaders
- plugins
- mode: development/production
- loader执行顺序：从后往前

### 高级配置
- 多入口打包 entry中建2个
- 如何抽离压缩css
- 如何抽离公共模块
- 懒加载

### modules chunk bundle的区别
- modules-各个源码文件，webpack中一切皆模块
- chunk-多模块合并成的，如entry import() splitChunk
- bundle-最终输出的文件

对应官网首页图的左中右部分

### 优化打包效率-开发体验
- 优化babel-loader :开启缓存(cache)/明确范围(include/exclude)
- IngorePlugin忽略无用文件

### 优化产出代码

### 构建流程概述
### babel