
- 常用命令

  - git init
  	- 初始化，在本地git bash使用此命令后创建.git文件夹，使本地文件夹成为仓库，即每次版本的代码都会在里面
  - git clone <链接> 将所需要的东西下载到本地，且用此命令下载的是仓库，里面的每次修改也在里面，而直接download zip 只是最新版本
  - git add
  	- git add 后可跟文件名也可直接git add -A 表示将所有文件送入暂存区
  - git commit
  	- git commit -m “引号里面输入你对提交的信息的描述”    用于提交信息
  - git checkout <文件名>
  	- 在工作区中的更改给打回去
  - git reset HEAD^
  	- 提交后撤回
  - git push 推送当前分支的最新提交到远程
  - git pull   拉取远程分支最新的提交到本地
  - 本地远程双向更新先pull后push

  - git checkout -b  <分支名> 从当前节点新建分支 
  - git branch 列举所有分支
  - git checkout <分支名> 单纯切换到某个分支
  - git branch -D <分支名> 删掉特定的分支
  - git merge <分支名> 合并分支





![](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202209121456714.png)



- Git原理


![](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202209112251180.png)





Git的工作原理涉及三个主要概念：工作区（Working Directory）、暂存区（Staging Area/Index），以及仓库（Repository）。

1. 工作区（Working Directory）：
   - 工作区是你本地文件系统中的项目目录，其中包含项目的所有文件和子文件夹。
   - 这是你实际编辑和修改代码的地方。

2. 暂存区（Staging Area/Index）：
   - 暂存区是一个介于工作区和仓库之间的临时区域。
   - 在你对工作区的修改完成后，你可以选择性地将这些修改添加到暂存区。
   - 添加到暂存区的文件构成了一个即将提交的快照（commit），这使你能够控制哪些更改会包括在下一次提交中。

3. 仓库（Repository）：
   - 仓库是一个包含项目完整历史记录的地方，它存储了一系列的提交快照。
   - 每个提交都包含了工作区在提交时的文件状态，以及一个指向前一个提交的指针，这样就形成了提交的有向历史图。
   - 仓库通常分为本地仓库和远程仓库。本地仓库位于你的计算机上，用于保存你的项目版本历史。远程仓库通常位于网络上的服务器上，用于多个开发者之间的协作。



Git的基本工作流程如下：
1. 在工作区中修改文件，对项目进行编辑。
2. 使用`git add`命令将你想要提交的修改添加到暂存区。
3. 使用`git commit`命令将暂存区的快照提交到仓库，同时记录提交信息（例如，本次提交的目的）。
4. 可选地，将本地仓库的修改推送到远程仓库，以与其他开发者共享和协作。









