## 布局
### 盒模型的宽度计算?
### margin纵向重叠?
### margin负值问题?
### BFC(block format context)块级格式上下文?
- 一块独立渲染区域，内部元素渲染不会影响边界以外元素
`形成条件`
- float不是none
- position 不是absolute或fixed
- overflow不是visible
- display 是flex 或 inline-block等
- 常见应用: clearfix
### float布局，以及clearfix?
`圣杯布局`
```css
.wrap{
  padding-left: 200px;
  padding-right: 150px;
  overflow: hidden;
}
.colm {
  float: left;
}
.center {
  background: lightcoral;
  width: 100%;
}
.left {
  background: aqua;
  width: 200px;
  margin-left: -200px;
  right: 100%;
  position: relative;
}
.right {
  background: blueviolet;
  width: 150px;
  margin-right: -150px;
}
```

`双飞翼布局`
- 区别：圣杯布局pa dding实现留白 / 双飞翼布局 margin 实现

- align-self：元素侧轴对齐方式
## 定位
### absolute和relative定位依据?
- relative:自身 / absolute:最近一层的不为none的父元素
`水平居中`
- inline: text-align:center
- block: margin: auto
- absolute元素: left:50% + margin-left负值

`垂直居中`
- inline: line-height:height
- absolute: top:50% + margin-top负值
- absolute元素: transform(-50%, -50%)
- absolute元素: top,left,bottom,right=0 + margin: auto

## 图文样式
`line-height继承`
- 写具体数值，如 30px, 则继承该值
- 写比例，如2/1.5, 则继承该比例
- 写百分比，如200%，则继承计算出来的值

## 响应式
`rem是什么`
- rem是一个长度单位
- px绝对长度单位，最常用
- em，相对长度单位，相对于父元素，不常用
- rem，相对长度单位，相对于根元素（html），常用响应式布局

`vw/vh`
- rem弊端: 阶梯性
- 网页视口尺寸
- window.screen.height //屏幕高度
- window.innerHeight //网页视口高度
- document.body.clientHeight //body高度
- vw网页视口宽度的1/100
- vmax和vmin:取vw/vh中的大/小者

`响应式布局的常见方案`
- media-query(C3媒体查询), 根据不同的屏幕宽度设置根元素的font-size
- rem基于根元素的相对单位

## CSS3