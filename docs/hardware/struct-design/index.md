# 物联网协会结构设计

作者：结构设计小组:dagger:

## 1.成员：

- 负责人 :zap:：吕兆成
- 小组成员:zap:：王桥宏
- 小组成员:zap:：罗霄童

## 2.结构设计介绍：

#### 2.1 草图:black_square_button:：

- 在平面上绘制的各种几何线段，草图包含了直线、矩形、圆等工具。

![image-20230923214115478](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202309232141550.png)

#### 2.2 零件:satellite:：

- 立体的图形，往往也是通过草图生成的。零件包含了拉伸、切除、旋转等工具。

![image-20230923214153267](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202309232141415.png)

#### 2.3 装配体:european_castle:：

- 由多个零件组成的，最终可以是简单机构，也可以是复杂的设备。可以完成一些我们需要的功能。装配体包含了添加零件、零件之间的配合等功能。

![image-20230923220220433](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202309232202500.png)



#### 2.4 工程图:rescue_worker_helmet:：

- 将三维转二维工程图，用于指导生产加工。工程图包含了投影视图、剖视图、标注、公差等功能。

![image-20230923220300555](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202309232203619.png)

## 3.开发链：

#### 3.1 SolidWorks:o2::

- SolidWorks是一款由Dassault Systèmes开发的三维计算机辅助设计(CAD)和计算机辅助工程(CAE)软件。
- SolidWorks的一些关键特点和功能：
  - 1.**三维建模**：SolidWorks允许用户创建复杂的三维模型，包括零件和装配体。这些模型可以用于虚拟原型制作、可视化、仿真和分析。
  - 2.**装配设计**：用户可以在SolidWorks中创建包含多个零件的装配体，并模拟它们的运动、相互作用和拆卸。这有助于检查装配的合适性和性能。
  - 3.**仿真和分析**：SolidWorks提供了强大的仿真和分析工具，用于评估零件和装配体的性能。用户可以进行应力分析、热分析、振动分析等，以确保设计的可靠性和安全性。
  - 4.**绘图和文档**：软件允许用户生成高质量的二维绘图和文档，用于生产、制造和维护。这些文档包括工程图纸、剖面视图、装配说明等。
  - 5.**可扩展性**：SolidWorks支持各种插件和附加模块，可以根据用户的需求扩展其功能。

![image-20230923211504179](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202309232115219.png)

#### 3.2 工程力学:racing_car:：

- 零件受力的基础知识

#### 3.3 机械原理:ice_hockey:：

- 机械传动
  - 齿轮传动
  - 带传动
  - 链传动
  - 蜗轮蜗杆传动
- 液力传动
- 连接件
  - 螺纹连接
  - 键连接
- 弹簧

#### 3.4 Windows10/11:radio:

#### 3.5 树莓派4B/Linux小电脑:strawberry:：

- Linux小电脑是指运行Linux操作系统的小型计算机或单板计算机，通常具有较小的物理尺寸和低功耗。
- 树莓派是最著名的Linux小电脑之一，有各种型号，树莓派4B是2019年发行的版本。
- Linux小电脑的一些常见特点：
  - **1.低成本和低功耗**
  - **2.小尺寸**
  - **3.Linux操作系统**：
    - 它们运行基于Linux内核的操作系统，通常是一种轻量级的Linux发行版。
  - **4.多用途性**：
    - Linux小电脑可以用于各种用途，包括网络服务器、媒体中心、家庭自动化、教育、编程学习、游戏等。
  - **5.可扩展性**：
    - 许多Linux小电脑提供了丰富的扩展选项，如GPIO引脚、USB端口、HDMI输出等，使它们适用于各种不同的项目。

![image-20230923211903030](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202309232120913.png)

## 4.平台：

- **嘉立创3D打印**