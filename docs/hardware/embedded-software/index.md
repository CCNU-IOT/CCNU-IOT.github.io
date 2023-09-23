# 物联网协会嵌入式软件

作者：嵌入式软件小组:robot:

## 1.成员：

- 负责人:space_invader:：**姜蘅洋**
- 小组成员:space_invader:：**陶希雅**

## 2.嵌入式软件介绍：

### 2.1 什么是嵌入式软件：

- **Wikipedia**:ghost:：
  - 嵌入式系统和一般的电脑不同，是设计执行在MCU上的系统，而且在执行过程中，资源有很多限制。
  - 嵌入式软件是特别设计执行在嵌入式系统中的软件。
- **简单理解**:thinking:：
  - 你可以认为**车载**的**导航地图**就是嵌入式软件。

![img](https://nickaljy-pictures.oss-cn-hangzhou.aliyuncs.com/navigation-image-05.jpg)

### 2.2 物联网协会的嵌入式软件都做什么：

- **STM32开发**:bicyclist:：
  - **STM32F10x**、**STM32F40x**、**STM32F42x**均作为我们的开发芯片。
  - STM32是意法半导体(STMicroelectronics，简称ST)设计的一系列以ARM® Cortex®-M为核心的32位微控制器。
  - STM32作为通用MCU，市场面对的客户不仅是消费类，更多的是工业控制，通信类客户。
    - 在数据采集、电机控制、人机交互、网络连接、USB 通信等方面具有优势。
    - 常见的应用场景有：智能制造、医疗保健、智能家居、消费电子、可穿戴设备等等。
  - 随着STM32产品的不断丰富，提供更高性能、更安全、更易于连接的MCU产品，未来在物联网领域的应用也将不断丰富。
- **ESP32开发**:monkey:：
  - **ESP32**是由乐鑫公司继**ESP8266**后推出的又一款集成WiFi/BLE功能的微控制器。
  - ![img](https://nickaljy-pictures.oss-cn-hangzhou.aliyuncs.com/esp32-c6-socs.png)
- 传感器、电机等外设:wolf:：
  - 外设的开发是嵌入式软件中最重要的一环，使用MCU的目的就是驱动各种外设。
  - 熟练地对外设进行开发需要你熟悉各种**硬件级通信协议**、各种**控制算法**以及熟练的C/C++**代码能力**:fox_face:。

![img](https://nickaljy-pictures.oss-cn-hangzhou.aliyuncs.com/pc-img-1.a3418b7.png)

- **GUI开发**:dog:：
  - 采用主流的**Qt5**以及近期火爆的**Dear ImGui**。
  - **GUI**(Graphical User Interface，图形用户界面)是指采用图形方式显示的用户操作界面。
    - 小型的嵌入式系统不同于桌面级的Windows、Linux、也不同于移动终端上的Android、IOS。
    - 小型嵌入式系统的GUI通常可能是定制的，要显示的内容比较有限，也没有复杂、丰富的应用。
    - 小型嵌入式系统的硬件平台通常是MCU，显示时没有GPU、3D渲染等硬件单元，也无法运行大型操作系统，桌面级和移动端的成熟GUI无法与其适配，也无法在这类系统上运行。

![img](https://nickaljy-pictures.oss-cn-hangzhou.aliyuncs.com/147875067-a848991e-2ad2-4fd3-bf71-4aeb8a547bcf.png)

## 3.开发环境：

- **Keil MDK**:cat:：
  - Keil MDK是一款**上世纪**的STM32集成开发环境，由于比较古老(但又对STM32支持度极高)，因此使用Keil MDK对代码进行编译。
- **STM32CubeMX**:cat2:：
  - STM32CubeMX是一种图形工具，通过分步过程可以非常轻松地配置STM32微控制器和微处理器，以及为Arm® Cortex®-M内核或面向Arm® Cortex®-A内核的特定Linux®设备树生成相应的初始化C代码。
  - 这个工具主要为我们配置STM32的**时钟树代码**和**Debug代码**。
- **VS Code**:tiger:：
  - 开源、免费的好东西！
  - 面向工程的代码编辑器。
- **arm-none-eabi-gcc**:tiger2:：
  - 交叉编译链，代码编译后生成的**bin文件**支持**arm架构**。
- **Arduino**:horse:：
  - 用来开发ESP32、Arduino开发板，简单便捷，对于一些小功能非常友好。
- **Qt5x**:lion:：
  - 用于开发GUI。
- **Google C++ Style/Embedded C Style**:monkey:：
  - 基于Googel C++的代码规范，基于正点原子的嵌入式C代码规范。
- **Ubuntu22.04**:racehorse:：
  - 嵌入式开发必不可少的Linux系统，协会内部GUI的开发都基于Ubuntu22.04，可以省略繁琐的环境配置。

![b743f1ee-jj-in-circle](https://nickaljy-pictures.oss-cn-hangzhou.aliyuncs.com/b743f1ee-jj-in-circle.webp)

## 4.开发语言：

- **C/C++**
