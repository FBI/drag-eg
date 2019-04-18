// git config --list查看git 配置项 包括用户名和油箱
// git remote 查看远程仓库名
// git remote -v 查看远程仓库对应url
// git checkout commit-id <file> 恢复某个文件
// git reset HEAD <file> 撤消暂存
// git reset --hard commit-id 撤回到某个版本(本地源文件包括源码也会撤回)
// git reset --hard HEAD^ 回退操作 回到上一次commit提交，本地源码也会撤回
// git reset --hard HEAD~3 回退3个版本
// git checkout commit-id <file> 恢复工作区被删除的文件
// git diff 查看工作区与暂存区的区别
// git diff --cached 查看暂存区与本地版本库的区别
// git diff master 查看工作区与本地版本库的区别
// git log 查看提交日志
// git rm <file> 删除暂存区文件(前提是先把文件提交到暂存区，然后再删除工作区文件，再使用该命令)
// git rm -rf <file> 同时删除工作区和暂存区文件
// git rm --cached 删除暂存区文件，但是保留工作区文件，不让该文件被版本控制
// git commit -m "..." --amend 撤消上次提交并重新提交  撤消的是提交到本地版本库的操作回到暂存区然后重新提交
// git reflog 可以查看所有分支的操作记录 git log不能查看被删除的commit记录
// git branch 查看分支
// git branch branchName 创建分支
// git checkout branchName 切换分支
// git checkout -b branchName 创建并切换到新分支
function drag(id) {
    var obj = document.getElementById(id)
    var disX = 0
    var disY = 0
    obj.onmousedown = function(evt) {
        disX = evt.pageX - evt.offsetLeft
        disY = evt.pageY - evt.offsetTop
    }
}