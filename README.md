# CCNU-IOT.github.io

作者：**Nick-JY**:pen:

## 1.如何去配置本地环境：

#### 1.1 Ubuntu22.04：

- 为了方便搭建环境，这里选择**Ubuntu22.04**。
  - 如果本机不是**Ubuntu**操作系统，那么请选择**虚拟机**。
- 接下来以**Ubuntu**操作系统为例演示。

#### 1.2 安装VS Code：

![image-20230924205240524](https://nickaljy-pictures.oss-cn-hangzhou.aliyuncs.com/image-20230924205240524.png)

- 在官网下载`.deb`的安装包，然后安装。

  - `.deb`的包需要使用**apt**进行安装，有两种安装方式：

    - 第一种：

      ```shell
      sudo apt install -y ./xxx.deb
      ```

    - 第二种：右键安装包，使用软件管理器进行安装。

#### 1.3 安装**plugin**：

- `Auto Rename Tag`，对于**HTML**文本自动补全。

![image-20230924205637804](https://nickaljy-pictures.oss-cn-hangzhou.aliyuncs.com/image-20230924205637804.png)

- `Git Graph`，图形化**Git**版本显示。

![image-20230924205757779](https://nickaljy-pictures.oss-cn-hangzhou.aliyuncs.com/image-20230924205757779.png)

- `Vue Language Features (Volar)`，**Vue**框架代码补全。

![image-20230924205855679](https://nickaljy-pictures.oss-cn-hangzhou.aliyuncs.com/image-20230924205855679.png)

#### 1.4 安装Node.js：

- 使用**NodeSource**安装**Node.js**和**npm**：

  - ```shell
    sudo apt purge nodejs
    sudo apt autoremove 
    sudo apt update
    sudo apt install -y curl
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt install nodejs build-essential -y
    ```

## 2.拉取远程仓库：

- ```shell
  git clone https://github.com/CCNU-IOT/CCNU-IOT.github.io.git
  ```

## 3.本地运行协会网站：

- ```shell
  cd CCNU-IOT.github.io
  npm run docs:dev
  ```

- 执行完上述命令之后，会出现**localhost**端口，在浏览器中输入该端口，即可实现网站本地运行。

## 4.Git提交：

- 将修改无误后的项目使用**Git**提交到远程仓库，项目中有自动部署脚本，不需要手动部署，远程构建通过之后，网站会自动进行更新。
  - 请写清楚**commit**的**message**。

![LEGO Marvel Super Heroes Wallpaper](https://nickaljy-pictures.oss-cn-hangzhou.aliyuncs.com/567411.jpg)