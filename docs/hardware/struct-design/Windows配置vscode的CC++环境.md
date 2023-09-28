# Windows配置vscode的C/C++环境



## 一、原理



- 首先明确，vscode既不是一款编译器，也不算是一款IDE
- 确切地说，vscode只是一款文本编辑器，它和记事本没什么两样
- vscode强大之处在于它的可扩展性，它可以变成任何你想要的形状



- 问题来了，一款文本编辑器，为什么可以用作C/C++，甚至是一切语言的开发环境？
  - vscode集成了终端系统，可以在其内部调用命令行终端，而命令行终端可以完成将代码变成程序这个任务（不够严谨，但可以这样理解）
  - vscode可以设置一些选项，使得能在命令终端中执行一套命令，调用语言编译器对代码进行编译等，变成程序
  - vscode不仅有一些对应语言的插件，还要很多好用的工具插件，使得开发环境更舒适（可以自己上网搜索vscode好用插件推荐，自己试试，喜欢哪些用那些）





## 二、下载安装vscode



- 下载vscode
  - [下载链接](https://code.visualstudio.com/Download)
  - 点进链接进入如下页面，直接点击红框中的Windows即可开始下载



![image-20230927225613299](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202309272256371.png)

- 安装vscode
  - 打开刚才下载的 *VSCodeUserSetup-x64.exe* 文件，将选项全部选中
  - 建议将安装路径安装在C盘以外的盘中，并且整个路径中不要有中文和空格
  - 安装完后重启一下vscode，甚至重启一下电脑（为了减少遇到的问题，最好重启一下电脑），让一些设置选项更新

![image-20230927225744266](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202309272257320.png)







## 三、下载安装C/C++编译器





### 下载

- 目前主流的C/C++编译器，Linux平台有 gcc，Windows平台有 msvc ，MacOS平台有 clang ，本文档中选用 gcc 作为编译器

- gcc是Linux平台的，怎么用于Windows呢？
- 需要用到MinGW-w64（全名为Minimalist GNU for Windows），是Linux平台上的一套开发工具，移植到Windows平台，这之中就有我们需要的gcc



- 可以直接上github，[github链接](https://github.com/niXman/mingw-builds-binaries/releases)来下载MinGW-W64
  - 进入网页后，下载红框内版本
  - ![image-20230927230700076](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202309272307141.png)



- 如果有人科学上网还不熟练，这里给出国内的一个下载网站[北大网盘链接](https://disk.pku.edu.cn/#/link/D6308A978172655418143816A12CD712?gns=D51A6F51C2024B51BE33540D37C9C71B%2FC696C937D6434782A42BCE938AA411C3)
  - 下载.7z或.zip文件均可，都是压缩包



### 安装



- 将刚刚下好的压缩包，解压到C盘以外，不带中文路径、不带空格的地方
- 为叙述方便，假定你解压在了E盘的根目录下，即E盘有一个mingw64文件夹



- 下一步是设置path环境变量，将E:/mingw64/bin（这里的路径要根据你自己解压的地方改变，反正最后面是/mingw64/bin）添加到path环境变量中
  - 鼠标右键此电脑，选择属性
  - ![image-20230927231534417](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202309272315471.png)
  - 进入属性后，下滑，选择高级系统设置
  - ![image-20230927231639177](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202309272316303.png)
  - 点击高级系统设置后，点击环境变量
  - ![image-20230927231731572](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202309272317616.png)
  - 在系统变量中找到Path，左键点击后，选择编辑，然后在右侧新弹出的界面中，点击新建，将E:/mingw64/bin添加进去，注意这里的路径是你自己电脑中的/mingw64/bin的位置
  - ![image-20230927231918760](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202309272319832.png)
  - 新建好环境变量后，按与打开窗口相反的顺序，一路确定，保存刚刚添加的环境变量



- 打开cmd，输入`gcc --vision`,显示如下信息，说明配置成功

![image-20230927232334253](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202309272323292.png)





## 四、配置vscode



### 扩展支持



- 简体中文插件
- C/C++
- Better C++ Syntax



### 扩展下载



- `ctrl+shift+x`然后搜索扩展下载就ok



### 配置C++环境



C++环境需要.vscode文件夹下的*c_cpp_properties.json,tasks.json,launch.json* 这三个文件共同定义

- **c_cpp_properties.json** ：对C/C++扩展的设置。
- **tasks.json** ：定义如何生成可执行文件。
- **launch.json** ：定义如何调试可执行文件



> tasks.json

首先自己新建一个文件夹，然后在vscode中打开，这个文件夹就作为之后写C/C++代码的文件夹



- 在此文件夹下，新建一个`hello.cpp`文件，写一个`helloworld`程序，按下`ctrl+F5`，会让你选择这个

![image-20230927233217785](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202309272332843.png)

- 认真比对，选择图中g++.exe生成和调试活动文件

- 这时，会在当前文件夹的.vscode文件夹下生成一个`tasks.json`文件

```json
{
    "tasks": [
        {
            "type": "cppbuild",
            "label": "C/C++: g++.exe 生成活动文件",
            "command": "E:\\mingw64\\bin\\g++.exe",
            "args": [
                "-fdiagnostics-color=always",
                "-g",
                "${file}",
                "-o",
                "${fileDirname}\\${fileBasenameNoExtension}.exe"
            ],
            "options": {
                "cwd": "${fileDirname}"
            },
            "problemMatcher": [
                "$gcc"
            ],
            "group": {
                "kind": "build",
                "isDefault": true
            },
            "detail": "调试器生成的任务。"
        }
    ],
    "version": "2.0.0"
}
```



- 这段代码定义了 vscode 以怎样的方式调用 gcc 编译器将代码编译成可执行文件。

- 你也可以 `F1` 之后输入 task ，选择配置默认生成任务，就会生成 tasks.json

- 如果你按照本文档配置了path环境变量，那生成的 tasks 文件中，”command“标签中的路径应该是和上面的一样，当然这里应该是你自己解压的mingw64的路径下的g++.exe，你按照自己安装的位置修改即可
- 你也可以按`F1`之后输入task，选择配置默认生成任务，就会生成tasks.json



如果一切顺利，你应该可以看到文件夹下生成了一个hello.exe文件

在vscode中按ctrl+`,可以打开终端

输入 `./hello.exe` ,可以发现输出了Hello World

按一下`ctrl+F5`,可能会出现一闪而过的黑窗口，或者是在终端出现了Hello World，那就是正常的



不管你在这一步是否顺利，只要你确保是按照本文档的步骤做了上面所说的，那就接着跟着做下去





> launch.json



点击甲壳虫小三角，然后点击创建`launch.json`文件，选择GDB，会生成一个空的`launch.json`文件



![image-20230927234429845](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202309272344901.png)

![image-20230927234419972](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202309272344014.png)



配置选项如下：

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "g++.exe - Build and debug active file",
            "type": "cppdbg",
            "request": "launch",
            "program": "${fileDirname}\\${fileBasenameNoExtension}.exe",
            "args": [],
            "stopAtEntry": false,
            "cwd": "${fileDirname}",
            "environment": [],
            "externalConsole": false,
            "MIMode": "gdb",
            "miDebuggerPath": "E:\\mingw64\\bin\\gdb.exe",
            "setupCommands": [
                {
                    "description": "Enable pretty-printing for gdb",
                    "text": "-enable-pretty-printing",
                    "ignoreFailures": true
                }
            ],
            "preLaunchTask": "C/C++: g++.exe 生成活动文件"
        }
    ]
}
```

说几个重要的选项

- **externalConsole** ：这个配置表明是否启动控制台， true 会出现额外的黑窗口， false 则会调用内置终端。由于黑窗口运行完之后会直接关闭，不利于查看运行结果，所以推荐设为 false ，这样就可以在终端中看到结果了
- **miDebuggerPath** ：调试器的路径。我们用 gdb 作为调试器，所以路径为mingw64/bin/gdb.exe
- **preLaunchTask** ：前置运行任务，这里要和 tasks.json 里边的 label 属性一样。因为调试前需要先编译出可执行文件，所以这里需要调用编译可执行文件的配置，先去执行编译任务，再进行debug。也就是会先去调用前面的 tasks.json 里边定义的任务，生成一个 .exe 的文件。



> c_cpp_properties.json

可以在设置里设置，也可以自动生成json文件



方法：按下F1然后输入c/c++,选择C/C++：编辑配置（JSON），就会生成这个文件



```json
{
    "configurations": [
        {
            "name": "Win32",
            "includePath": [
                "${workspaceFolder}/**"
            ],
            "defines": [
                "_DEBUG",
                "UNICODE",
                "_UNICODE"
            ],
            "compilerPath": "E:\\mingw64\\bin\\gcc.exe",
            "intelliSenseMode": "windows-gcc-x64",
            //以下两条或许不会默认生成，但我建议你添加上
            "cppStandard": "c++23",
            "cStandard": "c23"
        }
    ],
    "version": 4
}
```



解释一下我认为其中比较 重要的选项：

- **includePath** ：头文件的位置，这里的${workspaceFolder}/**，”/“前为一个vscode变量，值为工作区路径（工作区就是你当前打开的文件夹），”/“后的”**“的意思是递归向下寻找。如果你需要安装c++第三方库，请看后面的Q&A。头文件库默认包含了c++标准库，无需指定。
- **compilepath** ：编译器路径，c++扩展会从 path 环境变量中自动寻找 gcc 的路径，如果这个路径找不到，请手动设置。
- **intelliSenseMode** ：选择当前的平台和编译器，我们是在 windows 平台上使用 gcc 作为编译器，所以填windows-gcc-x64。
- **cppStandard** & **cStandard** ：指定c和c++标准。为了不影响代码编写（指某些奇怪的红色波浪线），同时享受新标准的便利，请至少设为 `c++17` 或以上和 `c11` 以上。我们所用的 gcc 12.2.0 已经部分支持 c++23 和 c++20 



> settings.json

当你修改了工作群设置后，会产生一个这样的文件，但于本篇文档要做的事关系不大，所以不做叙述



## 五、结语



- 现在vscode应该就已经可以比较好的支持对C/C++的编写了！
- 建议可以将此次配置好的.vscode文件夹留一个备份，当你想在新的文件夹中编写C/C++代码，可以直接将这个备份添加到新的文件夹中
- 或者说你之前配的.json文件不小心修改了，但是你不知道改了哪，对于这种情况直接将这个备份覆盖原来的.vscode文件夹













