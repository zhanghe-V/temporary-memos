### git常用命令
- git status(改动文件)/git diff(改动内容)
- git add . 保存所有修改
- git commit -m "修改日志" / git log -提交/查看提交
- git checkout . 撤销所有修改
- git push origin master -提交到远端
- 每次提之前先拉取 git pull origin master
- 切换分支 git checkout -b branch-name

`将login分支代码合并到master`
- 获取所有分支 git fetch
- 切换到login分支 git checkout login 
- 拉取login分支最新代码 git pull origin login 
- 切回master分支 git checkout master
- 合并代码 git merge login
- 将合并的代码提交到远端 git push origin master

- git stash：将当前修改暂存起来(用于代码在错误的版本上开发解决方案)
- git checkout 到正确的分支
- git stash pop 将暂存的修改放到正确的分支
- git add git commit