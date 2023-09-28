使用Samba服务实现ubuntu虚拟机和Windows的文件共享



- 在终端中执行下列指令查看当前正在运行的 Ubuntu 的版本号

```
cat /etc/issue
```



- 更新当前软件,依次执行下列命令

```
sudo apt-get upgrade
sudo apt-get update
sudo apt-get dist-upgrade
```



- 安装samba服务器

```
sudo apt-get install samba samba-common
```



- 创建一个用于分享的samba目录

```
sudo mkdir /home/chengkhen/share
```

chengkhen替换为你虚拟机的用户名



- 给创建的这个目录设置权限

```
sudo chmod 777 /home/chengkhen/share
```



- 添加用户（之后会需要设置samba的密码，自己设置就好）

```
sudo smbpasswd -a chengkhen
```

chengkhen替换为你自己虚拟机的用户名



- 配置samba的配置文件

```
sudo nano /etc/samba/smb.conf
```



在配置文件smb.conf的最后添加下面的内容

```
[share]
comment = share folder
browseable = yes
path = /home/chengkhen/share
create mask = 0700
directory mask = 0700
valid users = chengkhen
force user = chengkhen
force group = chengkhen
public = yes
available = yes
writable = yes
```

chengkhen替换为你自己虚拟机的用户名



![image-20230928121725338](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202309281217390.png)



修改完毕后，ctrl+o保存，ctrl+k退出nano

- 重启samba服务器

```
sudo service smbd restart
```



- 现在，在Windows上win+R弹出的串口中输入\\ip即可访问

![image-20230928121921436](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202309281219479.png)



点击确定



![image-20230928121939619](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202309281219670.png)



看到share文件夹，进入share文件夹，把你想从Windows系统共享给Linux的文件放入该文件夹中，回到Linux中，打开Linux的share文件夹，就可以看到你共享的文件

