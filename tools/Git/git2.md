# 我们建议每个存储库都包含一个 README、 LICENSE和.gitignore。

## 或者在命令行上创建一个新的存储库
echo "# testGit" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Jonlangchen/testGit.git
git push -u origin main

## 或从命令行推送现有存储库
git remote add origin https://github.com/Jonlangchen/testGit.git
git branch -M main
git push -u origin main

## 或从另一个存储库导入代码