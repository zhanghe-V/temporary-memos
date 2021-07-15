### HTML5新增API

#### 1 网络状态
我们可以通过window.navigator.onLine来检测，用户当前的网络状况，返回一个布尔值， 但是不同浏览器会存在差异
所以HTML5 给我们提供了2个事件 online 和 offline
- online用户网络连接时被调用
- offline用户网络断开时被调用
他们监听的对象都是window

#### 2 全屏
HTML5规范允许用户自定义网页上任一元素全屏显示。
1、Node.requestFullScreen() 开启全屏显示
2、Node.cancelFullScreen() 关闭全屏显示

由于其兼容性原因，不同浏览器需要添加前缀如：
webkit内核浏览器：webkitRequestFullScreen、webkitCancelFullScreen，如chrom e浏览器。
Gecko内核浏览器：mozRequestFullScreen、mozCancelFullScreen，如火狐浏览器
3、document.fullScreen检测当前是否处于全屏

#### 3 文件读取
把上传的文件内容显示到页面或者 上传完毕图片显示缩略图到页面上。

通过FileReader对象我们可以读取本地存储的文件，使用 File 对象来指定所要读取的文件或数据。其中File对象可以是来自用户在一个 元素上选择文件后返回的FileList 对象，也可以来自由拖放操作生成的 DataTransfer
3.1 Files对象
由于HTML5中我们可以通过为表单元素添加multiple属性，因此我们通过<input>上传文件后得到的是一个Files对象（伪数组形式）。
3.2FileReader对象
HTML5新增内建对象，可以读取本地文件内容。
var reader = new FileReader; 可以实例化一个对象
实例方法
1、readAsDataURL() 以DataURL形式读取文件
事件监听
onload 当文读取完成时调用
属性
result 文件读取结果

参考资料
https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader

#### 4 地理定位
在HTML规范中，增加了获取用户地理信息的API，这样使得我们可以基于用户位置开发互联网应用，即基于位置服务 (Location Base Service)

#### 5 拖拽
在 HTML5 中，拖放是标准的一部分，任何元素都能够拖放。

#### 6 Web存储
随着互联网的快速发展，基于网页的应用越来越普遍，同时也变的越来越复杂，为了满足各种各样的需求，会经常性在本地存储大量的数据，HTML5规范提出了相关解决方案。