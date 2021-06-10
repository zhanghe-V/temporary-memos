### 登陆服务器
- ssh work@192.168.10.21

### 查看文件
- ls -a(查看所有)
- ll

### 清屏
- clear
### 新建/删除文件夹abc
- mkdir abc / rm -rf abc
- -rf递归强制删除，删文件夹必须
### 新建文件 a.js
- touch a.js (直接新建)
- vi a.js (新建并直接打开)

### 查看a.js内容
- cat a.js 查看所有 
- head a.js / tail查看前面几行/后面
### 进入文件夹abc
- cd abc
### 修改文件名index.html为index1.html
- mv index.html index1.html
- mv 移动文件
### 回到上级目录
- cd ../
### 拷贝文件a.js到a1.js
- cp a.js a1.js
### 在文件package.json中按关键字查找'babel'
grep "babel" package.json

### 在vim编辑器中的操作
- i键进入编辑模式
- esc退出编辑模式 
- :w保存文件
- q 退出 q!强制退出不保存
