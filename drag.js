// git checkout commit-id <file> 恢复某个文件
// git reset HEAD <file> 撤消暂存
// git diff 查看工作区与暂存区的区别
// git diff --cached 查看暂存区与本地版本库的区别
// git diff master 查看工作区与本地版本库的区别
// git log 查看提交日志
// git rm <file> 删除暂存区文件(前提是先把文件提交到暂存区，然后再删除工作区文件，再使用该命令)
// git rm -rf <file> 同时删除工作区和暂存区文件
// git rm --cached 删除暂存区文件，但是保留工作区文件，不让该文件被版本控制
function drag(id) {
    var obj = document.getElementById(id)
    var disX = 0
    var disY = 0
    obj.onmousedown = function() {
        console.log(222)
    }
}