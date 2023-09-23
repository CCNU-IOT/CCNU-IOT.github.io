# 独立按键控制LED灯和蜂鸣器

#### 作者：吕兆成

# 实验目标

- S2按键控制第一个LED灯的明亮
- S3按键控制第一个LED灯的熄灭
- S4按键控制蜂鸣器的鸣叫
- S5按键控制蜂鸣器停止鸣叫



# 实验准备



## 独立按键



![image-20230608163413519](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202306081634601.png)

- 上图是4*4矩阵键盘/4个独立接地按键的示意图

- 其中S2、S3、S4、S5是4个独立接地按键

- 当按键被按下时，电路连通



> 上拉电阻（补充知识）

- 对于开发板上面的按键来讲，都受到上拉电阻的控制，我们拿S2这个按键举例：



![image-20230608165013079](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202306081650128.png)

- 当S2断开时，VCC(电源正极)与上拉电阻相连，此时输入引脚LCDEN接收到的信号是高电平，即高电平写入到LCDEN所对应的寄存器中
- 当S2连通时，上拉电阻被短路，相当于LCDEN这个输入引脚直接接地，因此低电平写入到LCDEN所对应的寄存器中
- 因此，我们可以根据输入引脚所对应的寄存器里的数据来检测独立键盘是否启动（写代码时，我们就可以依据这点，来进行条件判断）



> 按键消抖（补充知识）



按键消抖是为了防止按键输入被CPU误读多次。通常的按键所用开关为机械弹性开关，当机械触点断开、闭合时，由于机械触点的弹性作用，一个按键开关在闭合时不会马上稳定地接通，在断开时也不会一下子断开。因而在闭合及断开的瞬间均伴随有一连串的抖动，为了不产生这种现象而作的措施就是按键消抖



我们在手动按键的时候，由于机械抖动或是一些其他一些非人为的因素，很有可能造成误识别，一般手动按下一次按键然后接着释放，按键两片金属膜接触的时间大约为50ms左右，在按下瞬间到稳定的时间为5-10ms，在松开到稳定的时间也为5-10ms，如果我们在首次检测到按键被按下后延时10ms左右再去检测，这时，如果是干扰信号将不会被检测到，如果确实是有键被按下，则可确认。







## 蜂鸣器

![image-20230608171300154](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202306081713198.png)

- 对于蜂鸣器的电路图的具体知识不需要了解太多，只需要知道破防板子上的蜂鸣器，FM端如果是低电平，那么蜂鸣器就发声，如果FM端是高电平，那么蜂鸣器就停止发声





## LED灯



![image-20230608172552193](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202306081725231.png)

- 上图是8位发光二极管的原理图，我们要控制DB1~DB8这8个输入端的电平来开关发光二极管
- 二极管，正向导通时发光，逆向则关闭，所以当DB1~DB8输入端为低电平时，二极管发光，为高电平时，二极管熄灭

- 二极管与74HC573相连，74HC573是典型的锁存器芯片
- $D_0$ ~ $D_7$为数据输入，$Q_0$ ~ $Q_7$为数据输出
- Output Enable（OE）为输出使能端， 图中E即为输出使能端；Latch Enable（LE）为锁存使能端，图中L即为锁存使能端
- E为高电平时，无论LE与D端为何种电平状态，其输出都为高阻态，此时芯片处于不可控状态。所以在设计电路是我们直接将Output Enable接地，即低电平，也就是使74HC573一直处于输出使能状态
- 当E为低电平，且L为高电平时，D与Q同时为H或L（也就是输入什么就输出什么）。当L为低电平时，无论D为何种电平，Q都保持上一次的数据状态。
- 即L为高电平时，锁存器解锁，接受输入并原样输出，LE为低电平时，锁存器上锁，输出保持上一次的数据状态不变



# 分析需求



## LED灯部分（以点亮第一个LED为例）

- 要使LED灯亮，首先得给锁存器74HC573解锁，要给74HC573解锁，就要让L端为高电平，在此单片机上，也就是让DIOLA为高电平（需求一）

- 还要使输出端为低电平（0），这样二极管才能亮，因为锁存器解锁后，输入什么就输出什么，所以要输出为低电平，即输入要为低电平，所以DB1寄存器的相应位要为0



## 蜂鸣器部分

- 要使蜂鸣器鸣叫，则使FM对应寄存器的输入为低电平，反之，则为高电平



## 独立按键部分

- S2被按下时，即LCDEN对应的寄存器为低电平，以此为判断条件
- S3被按下时，即RS对应的寄存器为低电平，以此为判断条件
- S4被按下时，即WR对应的寄存器为低电平，以此为判断条件
- S2被按下时，即RD对应的寄存器为低电平，以此为判断条件



# 解决需求



![image-20230608211254804](https://cdn.jsdelivr.net/gh/chengkhen/picture_via_picco/202306082112874.png)



## 使LED灯明亮

- 要使DIOLA为高电平，即P2_5为1
- 要使DB1为低电平，即P1_0为0

## 使蜂鸣器鸣叫

- 要使FM为低电平，则P2_3为0

## 独立按键部分

- S2——LCDEN——P3_4
- S3——RS——P3_5
- S3——WR——P3_6
- S4——RD——P3_7

# 实验实现

```c
//ipb_led_buzz.h

#ifndef _IPB_LED_BUZZ_H_
#define _IPB_LED_BUZZ_H_
#define REG_LED  P1 /*P1对应的是8bit的寄存器地址的解引用，P1^0 ~ P1^7分别是该寄存器的bit位，为了便于编写代码，我们给P1换个名字*/
#define LED_CONTROL P2_5/*P2_5对应的是P2寄存器中bit5所对应的地址的解引用，这一位控制8位发光二极管所对应的74HC573的Latch Enable端*/
#define BUZZ_CONTROL P2_3/*P2_3对应的是P2寄存器中bit3所对应的地址的解引用，这一位控制蜂鸣器的鸣叫与否*/
#define S2 P3_4  //P3_4对应的是P3寄存器中bit4所对应的地址的解引用，这一位与独立按键S2相对应
#define S3 P3_5  //P3_5对应的是P3寄存器中bit5所对应的地址的解引用，这一位与独立按键S3相对应
#define S4 P3_6  //P3_6对应的是P3寄存器中bit6所对应的地址的解引用，这一位与独立按键S4相对应
#define S5 P3_7  //P3_7对应的是P3寄存器中bit7所对应的地址的解引用，这一位与独立按键S5相对应
//P1、P2_5、P2_3、P3_4、P3_5、P3_6、P3_7的定义均在头文件<REGX52.H>中
void Open_Led1(void);//打开第一个LED灯
void Close_led(void);//关闭所有LED灯
void Open_Buzz(void);//使蜂鸣器鸣叫
void Close_Buzz(void);//关闭蜂鸣器
void Delay10ms();//延时10ms函数，用于按键消抖
//上述是需要用到的函数声明
#endif
```

```c
//ipb_led_buzz.c
#include <REGX52.H>
#include <intrins.h>
#include "ipb_led_buzz.h"

void Open_Led1(void)
{
    LED_CONTROL = 1;  //解锁锁存器
    REG_LED = 0Xfe;
    LED_CONTROL = 0;  //锁上锁存器
}

void Close_Led(void)
{
    LED_CONTROL = 1;  //解锁锁存器
    REG_LED = 0Xff;
    LED_CONTROL = 0;  //锁上锁存器
}


void Open_Buzz(void)
{
    BUZZ_CONTROL = 0;
}

void Close_Buzz(void)
{
    BUZZ_CONTROL = 1;
}

void Delay10ms()		//@11.0592MHz
{
	unsigned char i, j;

	i = 108;
	j = 145;
	do
	{
		while (--j);
	} while (--i);
}


```

```c
//main.c

#include <REGX52.H>
#include <intrins.h>
#include "ipb_led_buzz.h"

void main (void)
{
    Close_Buzz();
    Close_Led();
    while(1)
    {
        if(S2 == 0)
        {
            Delay10ms();//执行消抖
            while(S2 == 0)//判断按键是否被按下，如果按下，但还没松开，则一直死循环，什么都不做，松开按键后，才进行while循坏后的代码，这样能更消除更多不利影响，达到更好的控制效果
            {
                ;
            }
            Open_Led1()
        }
        if(S3 == 0)
        {
            Delay10ms();//执行消抖
            while(S3 == 0)
            {
                ;
            }
            Close_Led();
        }
        if(S4 == 0)
        {
            Delay10ms();//执行消抖
            while(S4 == 0)
            {
                ;
            }
            Open_Buzz();
        }
        if(S5 == 0)
        {
            Delay10ms();//执行消抖
            while(S5 == 0)
            {
               ;
            }
             Close_Buzz();
        }
    }
    
}

```

