---
title: 因错误的XBL而死机如何避免&补救
date: 2022-04-04 21:24:34
tags:
- 刷机
- 手机
- OnePlus
categories: 刷机
---
**正如您看到的，最近我们开始看到越来越多的帖子抱怨 OxygenOS 12 杀死了人们的设备。几个月前我以同样的方式丢失了我的 8 Pro，我们终于知道是什么原因造成的！**

# 答案 - 引导程序！

虽然 OxygenOS OTA 基本上是安全的，但它仍然可能会意外地刷入错误的引导程序到您的手机上！示例是安装了 Magisk Props 模块，这将导致 OxygenOS 刷新错误的图像或 TWRP 告诉有效负载将 DDR4 引导加载程序刷新到 DDR5 设备上。

但是等等……官方引导加载程序怎么能杀死 MSM 之外的主板？！
嗯……是这样的，一加使用相同的签名对所有四个固件进行签名，OP8，OP8T，OP8Pro，9R都使用相同的签名，这意味着无论你刷哪个,它们的PBL（Primary Bootloader）将加载XBL（Secondary Bootloader）.
等会……没有任何保护措施可以阻止这种情况发生吗？emm……应该有。事实上，之前的 OnePlus 8 和 8 Pro 固件都附带了为 DDR4 或 DDR5 设计的单个引导加载程序。现在，从 OxygenOS 12 开始，他们开始在同一个包装中运送 DDR4 和 DDR5。而手机死机的原因是因为与LPDDR4X相比，LPDDR5 RAM使用较低的电压，并且仅仅因为没有代码可以防止XBL在LPDDR5上将电压设置得太高，导致RAM没有加载正确的电压而无法正常工作，所以手机无法正常启动

## 如果我们通过 fastboot 手动刷入 OOS OTA，我们如何判断&预防？

**❗更新：请检查您的闪存，防止事发生！**

----

> *来自[mlgmxyysd](https://forum.xda-developers.com/m/mlgmxyysd.8430637/):的[Some extra warnings:……](https://forum.xda-developers.com/t/guide-how-to-avoid-killing-your-oneplus-8-pro-8t-9r-with-oxygenos-12-coloros-12.4426167/#post-86686475)*
> 一些额外的警告：
> 1. 一加 8T/9R 也有 LPDDR4x 版本，刷机前请使用下方adb确认版本。
> ```
> adb shell getprop ro.boot.ddr_type
> ```
> 0=LPDDR4｜1=LPDDR5
> 2. DDR检测进程被人为杀死，远离Magisk模块以保证安全。
> 3. 不推荐TWRP，改用OxygenOS修改恢复或其他ROM的恢复。
> 4. Flash/Root风险巨大，所有操作需谨慎。
> 
> |机型|RAM|
> |:--:|:--:|
> |OnePlus 8|LPDDR4|
> |OnePlus 8 Pro|LPDDR5|
> |OnePlus 8T|LPDDR4x/LPDDR5|
> |OnePlus 9R|LPDDR4x/LPDDR5|

----

如果你有 OnePlus 8 (DDR4) 你应该刷 xbl.img 和 xbl_config.img

如果你有 OnePlus 8 Pro / 8T / 9R (DDR5) 你应该刷 xbl_lp5.img 和 xbl_config_lp5.img

我建议每个制作 fastboot flashers 的人都包含该更改或为每个代号制作单独的 flashers！

之前LP5只有9R固件，但一加加入OPPO后似乎发生了一些变化，让很多人觉得很危险。

![请检查您的DNS](https://external.galzy.eu.org/2022/JerryYang.XYY@outlook.com/16490788667941649078866182.png)

![请检查您的DNS](https://external.galzy.eu.org/2022/JerryYang.XYY@outlook.com/16490788967911649078895958.png)

上面的图片显示有一些检查，但他们似乎没有在正常的工作，而且电压设置得太高了。

所以，请停止向 8 Pro 固件版本刷入非 DDR5 引导​​加载程序！或者至少在检测到 DDR5 时添加保护以防止启动失败。

> 以上搬运自：[XDA([GUIDE] How to Avoid Killing Your OnePlus 8 Pro / 8T / 9R with OxygenOS 12 / ColorOS 12)][1]

## 如何补救
刷入了错误的XBL，你的手机现在应该死机无法正常启动，无法进入9008等模式
根据酷安大佬[@Jpnx49Db0][2]的描述：
> 我来解释一下为什么会刷死，要换主板。lddr4x和lddr5的电压不一样，刷错xbl_config会导致电压过高或过低，使得RAM无法正常工作，导致手机死机。而进入9008的按键检测代码在xbl中，手机死机，无法响应按键操作，所以进入不了9008。那些号称可以免拆进9008修复这种黑砖机的原理应该是插入了工程线，里面接了特定阻值的电阻，在启动流程的PBL阶段（上电后第一个执行的程序）就进入了9008模式，直接无视xbl。之前售后换主板应该是不清楚有工程线可用，遇到这种问题直接换主板，现在的售后应该有工程线了，可以救砖了。具体什么是xbl，pbl可以看看我的图文浅谈底层固件安全性，里面有许多干货[受虐滑稽]
![@Jpnx49Db0][3]

根据上方的描述，我们可以购买一根工程线连接到你的手机
<img src="https://external.galzy.eu.org/2022/JerryYang.XYY@outlook.com/qingzhi9008.jpg"  alt="强制下载线" width="200"/>

然后利用这根线进行正常的9008刷写操作即可救回你的手机

## END……

> 文章参考：
> 酷安大佬：[@Jpnx49Db0][5]相关图文
> XDA论坛[@ProtoDeVNan0][6]大佬的：[GUIDE How to Avoid Killing Your OnePlus 8 Pro / 8T / 9R with OxygenOS 12 / ColorOS 12][1]


  [1]: https://forum.xda-developers.com/t/guide-how-to-avoid-killing-your-oneplus-8-pro-8t-9r-with-oxygenos-12-coloros-12.4426167/#post-86686475
  [2]: https://www.coolapk.com/u/6346283
  [3]: https://external.galzy.eu.org/2022/JerryYang.XYY@outlook.com/%40Jpnx49Db0.jpg
  [5]: https://www.coolapk.com/u/6346283
  [6]: https://forum.xda-developers.com/m/protodevnan0.5203734/