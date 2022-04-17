# 版本控制
    使用版本控制思想管理代码的版本迭代。
## 版本控制工具应该具备的功能
-- 协同修改
    1. 多人并行不悖的修改服务器端的同一个文件

-- 数据备份
    1. 不仅保存目录和文件的当前状态，还能够保存每一个提交过的历史状态。

-- 版本管理
    1. 在保存每一个版本的文件信息的时候要做到不保存重复数据，以节约存储
    空间，提高运行效率。这方面SVN采用的是增量式管理方式，而Git采取了文件
    系统快照的方式。

-- 权限控制
    1. 对团队中参与开发的人员进行权限控制。
    2. 对团队外开发者贡献的代码进行审核--Git独有。

-- 历史记录
    1. 查看修改人、修改时间、修改内容、日志信息。
    2. 将本地文件恢复到某一个历史状态。

-- 分支管理
    允许开发团队在工作过程中多条生产线同时推进任务，进一步提高效率。


# Git简介
    1、版本控制工具
    思想：版本控制
    实现：版本控制工具

    2、集中式版本控制工具
        CVS、SVN、VSS...

        有单点故障问题！！

    3、分布式版本控制工具
        Git、Mercurial、Bazaar、Darcs...

        避免单点故障，每个人都有历史

    4、Git 官网：https://git-scm.com

    5. Git的优势
        1、大部分操作在本地完成，不需要联网；
        2、完整性保证；
        3、尽可能添加数据而不是删除或修改数据；
        4、分支操作非常快捷流畅；(即创建、移动指针操作)
        5、与Linux命令全面兼容。

    6、安装
        1. 环境变量选第一项，不修改环境变量

        2. 本地和远程库连接方式选第一种

        3. 行末换行符风格选 默认。

        4. 选终端  默认

    7、Git的结构

    工作区 -- 写代码

    暂存区 -- 临时存储  可以提交到本地库也可以撤回

    本地库 -- 历史版本

    流程：

    工作区新建 - git add --> 暂存区 - git commit --> 本地库


    8、Git和代码托管中心
        代码托管中心的任务：维护远程库
        1、局域网环境下
            GitLab 服务器

        2、外网环境下
            GitHub
            码云

    
    9、 本地库和远程库
        1、团队内部协作

        1.创建远程库
        2.创建本地库，将本地库 push 到远程库
        3、其他人要使用，就 clone 远程库，实现个人的本地库初始化
        4、！！需要加入团队才有权限，个人修改后又可以将本地库 push 到远程库
        5、已有本地库，需要从远程库 pull 拉取更新本地库

        2、跨团队协作

            1、从别人的远程库 fork 复制一份自己的远程库；
            2、就 clone 远程库，实现个人的本地库初始化；
            3、改后又可以将本地库 push 到远程库；
            4、发起 pull request 请求；
            5、目标审核；
            6、目标 merge 合并操作。
            7、从远程库 pull 拉取更新本地库

# Git命令操作
## 本地库操作
    1、本地库初始化
        1、命令：git add

        2、效果： 创建 .git 目录
        
        3、注意：.git 目录中存放的是本地库相关的子目录和文件，不要删除，
        也不要胡乱修改

        4、 设置签名
            - 形式
                用户名：git config user.name 用户名

                Email地址：git config user.email 邮箱

            - 作用：区分不同开发人员身份

            - 辨析：签名和登录远程库(代码托管中心)的账号密码没有任何关系

            - 命令
                项目级别/仓库级别：仅在当前本地库范围内有效 _pro
                —— git config user.name 用户名
                —— git config user.email 邮箱

                —— 信息保存位置：./.git/config

                系统用户级别：登录当前操作系统的用户范围 _glb
                —— git config --global

                —— 信息保存位置：~/.gitconfig


                级别优先级：
                    1.就近原则：项目级别优先于系统用户级别，二者都有时采用项目级别的签名

                    2.如果只有系统用户级别的签名，就以系统用户级别的签名为准

                    3.二者都没有不允许

    2、基本操作
        2.1、状态查看操作
            git status
            查看工作区、暂存区状态

        2.2、添加操作
            git add [filename]
            将工作区的“新建/修改”添加到暂存区

        2.3、提交操作
            git commit -m "commit message" [filename] 
            将暂存区的内容提交到本地库

        2.4、 查看历史记录操作
            git log：查看版本记录/历史 （完整）
                多屏显示控制的方式：
                    空格向下翻页
                    b 向上翻页
                    q 退出

            git log --pretty=oneline : 以漂亮的一行格式显示记录（简洁）

            git log --oneline : 以哈希值简写一行格式显示记录 （更简洁）

            git reflog : 以指针回退次数的方式显示记录 
                HEAD@{移动到当前版本需要多少步}

        2.5、前进后退
            本质：HEAD 指针的移动
            1、基于索引值操作[推荐]
                git reset --hard 局部索引值

            2、使用^(异或)符号：只能后退
                git reset --hard HEAD^
                注：一个^表示后退一步，n个表示后退n步

            3、使用~(波浪)符号：只能后退
                git reset --hard HEAD~n
                注：表示后退n 步

        2.6、reset 命令的三个参数对比
            1、--soft 参数
                仅仅在本地库移动 HEAD 指针

            2、--mixed 参数
                在本地库移动 HEAD 指针
                重置暂存区

            3、--hard 参数(常用)
                在本地库移动 HEAD 指针
                重置暂存区
                重置工作区

        2.7、删除文件并找回
            1、本地库删除
                也要从工作添加到暂存区，再从暂存区commit 到本地库，
                才能完成操作

            2、从暂存区删除


            前提：删除前，文件存在时的状态提交到了本地库。
            操作：git reset --hard 指针位置
                删除操作已经提交到本地库：指针位置指向历史记录
                删除操作尚未提交到本地库：指针位置使用HEAD


        2.6 比较文件差异
            git diff 文件名

            1、在工作区的时
                git diff 文件名 将工作区的文件和暂存区进行比较

            2、在暂存区时，
                git diff HEAD 文件名  将工作区的文件和本地库的历史版本比较

                git diff HEAD^ 文件名 将工作区的文件和本地库的上一个历史版本比较

            3、不带文件名比较多个文件

    3、分支管理
        3.1 什么是分支？
            在版本控制过程中，使用多条线同时推进多个任务。

            master 主干

            feature_blue 皮肤分支

            feature_game 游戏分支

            hot_fix 热修复

        3.2 分支的好处？
            3.2.1 同时必行推进多个功能开发，提高开发效率。

            3.2.2 各个分支在开发过程中，如果某一个分支开发失败，不会对其他
            分支有任何影响。失败的分支删除重新开始即可。

        3.3 分支操作
            3.3.1 创建分支
                git branch 分支名

            3.3.2 查看分支
                git branch -v

            3.3.3 切换分支
                git checkout 分支名

            3.3.4 合并分支
                第一步：切换到接受修改的分支（被合并，增加新内容）上
                    git checkout 被合并的分支名
                第二步：执行 merge 命令
                    git merge 有新内容的分支名

            3.3.5 解决冲突
                第一步：编辑文件，删除特殊符号

                第二步：把文件修改到满意的程度，保存退出。

                第三步：git add 文件名

                第四步：git commit -m "日志信息"
                    注意：此时 commit 一定不能带具体文件名

            3.3.6 删除分支
                git branch -d 分支名 删除本地分支
                    在删除本地分支之前，请确保使用以下git checkout命令切换到您不想删除的另一个分支

                git branch -D 分支名 强行删除本地分支

                git push remote_name -d  远程分支名

## 远程库操作
    1、 创建远程地址
        git remote -v 查看当前所有远程地址别名
        git remote add 别名 远程地址

    2、推送
        git push 别名 分支名

    3、克隆
        命令：
            git clone 远程地址(origin)

        效果：
            1、完整的把远程库下载到本地

            2、创建 origin 远程地址别名

            3、初始化本地库

    4、邀请别人加入团队
        该项目的 Settings -> Collaborators -> Add people -> 填入usename\
        full name\email -> 复制邀请链接给邀请的人 -> 邀请的人通过链接同意
        邀请 -> 就能推送项目

        为什么第二次推送不用输入密码？？
        windows -> 控制面板 -> 用户账户 -> 凭据管理器 -> windows 凭据 -> 删除凭据

    5、拉取操作- pull
        pull = fetch + merge

        第一步： git fetch origin master 
            把远程内容下载到本地，并没有修改本地工作区文件

        第二步： get merge origin/master 把远程的master合并到本地的master


        简单的直接 git pull origin master

    6、解决冲突
        要点：
            1、如果不是基于 GitHub 远程库的最新版所做的修改，不能推送，必须先拉取。

            2、拉取下来后如果进入冲突状态，则按照“分支冲突解决”操作解决即可。

    7、跨团队协作
        1、外人点项目地址进入后点击 Fork

        2、拉取后本地修改，然后推送到远程

        3、点 Pull request

        4、点 New pull request

        5、点 Create pull request

        6、Open a pull request  点 Create pull request

        7、项目所有人点 Pull request

        8、点发来的内容查看

        9、对话

        10、审核代码点 Commits 或 Files changed

        11、没问题点 Merge pull request 

        12、合并代码，填写本次操作日志信息，点击 Confirm merge

        13、将远程库修改拉取到本地，更新本地库，结束跨团队协作

    8、SSH 免密登录
        1、cd ~ 进入用户文件夹目录

        2、rm -r .ssh/ 删除以前的免密登录

        3、ssh-keygen -t rsa -C 邮箱地址   之后默认就行
        生成 ssh 目录

        4、ll 查看 ssh 目录下的文件

        5、cat id_rsa.pub 查看 id_rsa.pub 文件具体内容
            并复制

        6、到用户 GitHub 的 Personal setting 下的 SSH and GPG keys里

        7、点击 New SSH key 黏贴 + 随便Title

        8、点击 Add SSH key

        9、新建远程地址的别名
            git remote add origin_ssh ssh地址

        10、git push origin_ssh master
            输入 yes 确认。 
            结束。



# Git图形化界面操作

# Gitlab服务器环境搭建


# Linus 命令：
ll : 列出当前目录下的资源

ls -lA : 列出当前目录下的资源,包含隐藏资源的

ls -l|less  管道操作，分屏去查看

mkdir 文件名：创建文件夹

rm 文件名： 删除文件

cd 文件名： 进入指定文件夹


pwd: 查看当前所在目录

ll .git/ ： 查看.git 里面的东西

cat .git/config： 查看 config 中的具体内容
查看的是工作区实时修改的内容

git config --list  查看 config 中的具体内容,列表形式

cd ~ : 进入用户文件夹目录

# Vim 命令
vim good.txt : 用 vim 编辑器编辑 good.txt 文件

esc: 退出操作

:set nu : 显示行号

:q : 退出

:wq ：保存并退出

a: 输入模式

多屏显示控制的方式：
    空格向下翻页
    b 向上翻页
    q 退出

tail -n 3 文件：指定显示行数

# Git 命令
git init: 本地仓库初始化

git status: 查看工作区/暂存区状态

git add 文件名： 向暂存区提交文件

git add -A ： 向暂存区提交所有文件

git rm --cached 文件名：将文件从暂存区撤回到工作区(假删除)

git rm --f 文件名: 将文件强制从暂存区删除掉(真删除操作)

将暂存区文件退回工作区：
git reset HEAD 文件名
git restore --staged 文件名


git checkout -- 文件名：取消工作区的修改
git restore 文件名：取消工作区的修改


git commit 文件名：将文件从暂存区提交到本地库
git commit -m "备注" a.html (常用提交方式)将文件从暂存区提交到本地库
备注：My second commit, modify a.html

git commit -a -m "备注" ：提交所有


git log：查看版本记录/历史

git log --pretty=oneline : 以漂亮的一行格式显示记录

git log --oneline : 以哈希值简写一行格式显示记录

git reflog : 以指针回退次数的方式显示记录


git reset --hard 局部索引值 ：回退历史操作

git reset --hard HEAD^ 退回上一步记录，不会显示以前的记录
一个 ^ 符号代表回退一步

git reset --hard HEAD~3 后退三步记录
~数值：比 ^ 好用


git diff 文件名：比较文件差异


git branch -v ：查看所有分支
git branch -a : 查看所有分支--本地和远程的

git branch -r : 查看远程分支
git branch --remotes ：查看远程分支

git branch 分支名 ： 创建分支

git checkout 分支名 ： 切换分支

git branch -d 分支名 ： 删除本地分支

git branch -D 分支名 ： 强行删除本地分支

git push remote_name -d ： 远程分支名
例如：git push origin -d test  远程origin/test分支


git remote -v ：查看远程地址

git remote add origin  url : 添加命名为 origin 的远程地址

git push origin master : 推送 master 到远程 origin 中











# 远程出现问题
    TLS certificate verification has been disabled!

    解决方法：
        git config --global http.sslVerify true


# Git报错解决：fatal: unable to access ‘https://github.com/.......‘: OpenSSL SSL_read: Connection was reset

    解决方法：
        git config --global http.sslVerify false