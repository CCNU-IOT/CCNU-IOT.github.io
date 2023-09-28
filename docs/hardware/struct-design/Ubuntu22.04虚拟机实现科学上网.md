本文档使用v2rayA实现Ubuntu22.04科学上网

可能比较麻烦，但是可以成功实现

# 1安装



## 1.1 安装内核



v2rayA 提供的镜像脚本（推荐）

```
curl -Ls https://mirrors.v2raya.org/go.sh | sudo bash
```

安装后可以关掉服务

`sudo systemctl disable v2ray --now  `
内核安装完成



## 1.2安装内核

手动安装deb包

需要你在Windows上科学上网去github上下载好deb包后，再共享给Linux



下面给出Windows上需要操作的流程

[下载链接](https://github.com/v2rayA/v2rayA/releases)

点击show all 102 assets

![image-20230928112455891](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202309281125117.png)



下滑找到红框中版本

![image-20230928112616380](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202309281126488.png)

点击下载，下载好后共享给Linux

现在在Linux上操作

cd到你Windows共享给Linux的deb包的位置

执行以下命令进行安装

```
sudo dpkg -i your-package.deb 
#请自行替换your-package，这是你下载的deb包的对应版本，也是你看到的文件名
```





# 2.启动和配置

启动 v2rayA

```
sudo systemctl start v2raya.service
```

设置开机自动启动

```
sudo systemctl enable v2raya.service
```



v2rayA的UI是以网页的形式呈现的，所以我们打开浏览器，访问v2rayA的地址http://localhost:2017/



![image-20230928113333354](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202309281133461.png)



首次打开需要创建一个管理员账号，如果遗忘，使用下面的命令重置。

```
sudo v2raya --reset-password
```

以创建或导入的方式导入节点，导入支持节点链接、订阅链接、扫描二维码和批量导入等方式。



接下来和Windows上科学上网差不多，导入订阅就好



导入成功后，会在server旁边的黄框中显示你的订阅，进入你的订阅，再用select选择一个可以的节点，再点击左上角的Ready按钮就能开启代理了。

![image-20230928113822294](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202309281138394.png)



![image-20230928114058899](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202309281140987.png)

点击右上角的settings，推荐和我一样的设置



![image-20230928114146293](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202309281141395.png)



比对完后，选择save and apply

至此，已可以科学上网

