有关终端和命令的，Linux端，直接打开终端就行，Windows端，则需要在你想当Git仓库的文件夹中git bash here，然后在打开的终端中输命令



**步骤 1：在GitHub上创建一个新的仓库**

1. 登录到您的GitHub帐户。

2. 在GitHub页面右上角，点击加号（+），然后选择“New repository”（新仓库）。

3. 在“Repository name”（仓库名称）字段中输入您的仓库名称，选择其他选项，然后点击“Create repository”（创建仓库）。

**步骤 2：在本地创建一个新的Git仓库**

> linux

1. 打开终端或命令提示符。

2. 进入您要创建仓库的本地文件夹。可以使用`cd`命令来导航到文件夹，例如：
   ```
   cd /path/to/your/folder
   ```

3. 初始化一个新的Git仓库：
   ```
   git init
   ```

>Windows

直接自己新建一个文件夹，然后进入该文件夹，鼠标右键，git bash here，然后在打开的终端中执行

```
git init
```



**步骤 3：将文件添加到Git仓库**

1. 将您的项目文件复制到新创建的本地Git仓库文件夹中。

2. 使用以下命令将这些文件添加到Git仓库中：
   ```
   git add .
   ```

3. 使用以下命令提交文件到Git仓库，并添加一条提交消息：
   ```
   git commit -m "Initial commit"
   ```

**步骤 4：将本地Git仓库连接到GitHub仓库**

1. 回到GitHub页面，并在仓库设置中找到“Quick setup”（快速设置）部分。
2. 复制“…or push an existing repository from the command line”（或从命令行推送现有仓库）中的HTTPS或SSH URL。

如果找不到，直接在code的SSH复制链接

![image-20230928123316284](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202309281233622.png)

**步骤 5：将本地Git仓库与GitHub仓库关联并推送**

1. 返回到终端或命令提示符，运行以下命令，将本地仓库与GitHub仓库关联（请将 `<GitHub Repo URL>` 替换为从GitHub复制的URL）：
   ```
   git remote add origin <GitHub Repo URL>
   ```

2. 使用以下命令将本地仓库的主分支推送到GitHub仓库（通常是master或main分支，取决于您的设置）：
   ```
   git push -u origin master  # 或者 git push -u origin main
   ```

3. 如果是第一次推送到GitHub，可能需要提供GitHub用户名和密码或令牌进行身份验证。

一旦完成上述步骤，本地Git仓库将被上传到GitHub，并与GitHub仓库同步。可以随时将更改推送到GitHub，使用`git add`和`git commit`添加和提交更改，然后使用`git push`命令将它们推送到GitHub仓库。





> 关于第一次推送到Github的身份验证



以下是第一次推送到GitHub时可能需要的两种身份验证方法：

1. **个人访问令牌（Personal Access Token）**：

   - 登录到你的GitHub帐户。
   - 点击右上角的头像，然后选择 "Settings"。
   - 在左侧导航栏中，选择 "Developer settings"。
   - 在 Developer settings 页面中，选择 "Personal access tokens"。
   - 点击 "Generate token" 按钮，按照提示创建一个新的个人访问令牌。
   - 选择所需的权限（scope），通常情况下，你需要选择 "repo" 权限以便访问和修改仓库。
   - 生成令牌后，将其复制并保存在安全的地方。这个令牌只会在创建时显示一次。

   在推送到GitHub时，使用个人访问令牌代替用户名和密码进行身份验证。你可以将令牌作为密码来使用。例如，在使用Git时，将个人访问令牌添加为密码：

   ```
   Username: 你的GitHub用户名
   Password: 你的个人访问令牌
   ```

2. **SSH 密钥**：

   - 如果你想使用SSH密钥进行身份验证，首先需要生成SSH密钥对。
   - 将公钥添加到你的GitHub帐户。在GitHub上，进入 "Settings" > "SSH and GPG keys" > "New SSH key"，将你的**公钥**粘贴到这里。
   - 在本地的Git配置中使用SSH URL来克隆或推送GitHub仓库。例如：

   ```
   git clone git@github.com:你的用户名/你的仓库名.git
   ```

   使用SSH密钥进行身份验证时，不需要提供密码或令牌。



如何获得公钥？



**Windows用 Git Bash，Linux直接用终端操作**

1. 如果你已经安装了 Git for Windows，那么通常也包含了 Git Bash。打开 Git Bash。

2. 在 Git Bash 终端中，使用以下命令生成 SSH 密钥对：

   ```
   ssh-keygen -t rsa -b 2048 -C "你的电子邮件地址"
   ```

   - `-t` 指定密钥类型（这里使用 RSA）。
   - `-b` 指定密钥位数（2048 位是一个常见的安全选择）。
   - `-C` 选项用于添加注释，可以用你的电子邮件地址或其他标识信息。

3. 程序将提示你选择密钥文件的保存位置和名称。默认情况下，密钥将保存在用户文件夹下的 `.ssh` 目录中。你可以按 Enter 键接受默认值，或者指定其他位置。

4. 如果你设置了密码，它将要求你输入一个密码来保护你的私钥。输入密码并确认。

5. 完成后，你将在指定的目录中找到生成的 SSH 密钥对文件。公钥文件的扩展名为 `.pub`，私钥文件没有扩展名。
