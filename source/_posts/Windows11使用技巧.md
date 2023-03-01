---
title: 📦Windows11使用技巧
date: 2022-01-29 02:03:26
tags:
- windows
categories: 电脑
---

## 系统优化：

### DISM++

是一个系统管理优化工具，可以进行系统的安装和还原备份，可以进行驱动，空间的清理、引导修复等等，在PE中也很受欢迎。

[https://www.chuyu.me/](https://www.chuyu.me/) （官网由于一些不可抗原因无法访问）

下载备份：[DISM++](https://www.coludxyy.top/cloud/%E7%B3%BB%E7%BB%9F%E7%AE%A1%E7%90%86/Dism%2B%2B10.1.1002.1.zip)

（个人比较喜欢原汁原味，所以除了清理无用驱动和清理空间并没有“大刀阔斧”的改动）

---

### 微软常用运行库与DirectX_Repair组件修复

由于新安装的系统比较纯净，并没有集成全部的运行库，所以安装运行库可以避免一些软件无法打开

微软常用运行库合集备份：[🔗link](https://www.coludxyy.top/cloud/%E7%B3%BB%E7%BB%9F%E7%AE%A1%E7%90%86/%E5%BE%AE%E8%BD%AF.NET%E7%A6%BB%E7%BA%BF%E8%BF%90%E8%A1%8C%E5%BA%93%E5%90%88%E9%9B%86/)

DirectX_Repair增强版：[🔗link](https://www.coludxyy.top/cloud/%E7%B3%BB%E7%BB%9F%E7%AE%A1%E7%90%86/DirectX_Repair%E5%A2%9E%E5%BC%BA%E7%89%88_v4.1.7z)

---

### 图吧工具箱

各种硬件检测、评分、测试工具，常见工具都有收集

图吧工具箱：[🔗link](http://www.tbtool.cn/)

![https://external.galzy.eu.org/2022/JerryYang.XYY@outlook.com/16433909070351643390906212.png](https://external.galzy.eu.org/2022/JerryYang.XYY@outlook.com/16433909070351643390906212.png)

---

### 关闭快速启动

对于笔记本用户，如果遇到开机后CPU频率上不去，系统不正常的掉帧卡顿，可以尝试关闭Windows的快速启动功能。

快速启动可能会导致开机过程中，系统电源管理模块接管BIOS电源管理模块时出现问题，使得CPU电压上不去而导致性能不足。

<img src="https://external.galzy.eu.org/2022/JerryYang.XYY@outlook.com/16433914250331643391339000.gif" alt="https://external.galzy.eu.org/2022/JerryYang.XYY@outlook.com/16433914250331643391339000.gif" style="zoom:50%;" />

---

### 修改视觉效果

由于不是那么需要很强烈的动画效果，所以我把一些不必要的windows动画关闭了，从而达到省电的效果。配置此项右击此电脑—属性—高级系统设置—性能右下角设置

我的配置如下—

<img src="https://external.galzy.eu.org/2022/JerryYang.XYY@outlook.com/16433916709871643391670156.png" alt="https://external.galzy.eu.org/2022/JerryYang.XYY@outlook.com/16433916709871643391670156.png" style="zoom:50%;" />

---

### 换回windows10资源管理器

windows11的资源管理器比较卡顿，造成了我流程效率上的一定降低，所以换回windows10的资源管理器。

操作方法：win+r，输入regedit进入注册表

定位到`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Shell Extensions`

右键Shell Extensions，新建，选择“项”，命名为`Blocked`；

右键Blocked，新建，字符串值，命名为`{e2bf9676-5f8f-435c-97eb-11607a5bedf7}`

`ctrl`+`shift`+`esc`打开任务管理器，重启资源管理器即可

如果想要恢复，把Blocked删除重启资源管理器即可

---

### 换回windows10右键菜单

由于windows11的鼠标右键也比较卡顿，通常有0.5s-1s的延迟，所以换回windows10的右键列表

操作方法：win+x，点击windows终端(管理员)
输入
`reg add "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve`

`ctrl`+`shift`+`esc`打开任务管理器，重启资源管理器即可

如果想要恢复，在windows终端（管理员）输入`reg delete "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}" /f`重启资源管理器即可

---

### 关闭提高指针精准度

这一项一直开启，让我用上了2000的dip，这项目的是让低性能鼠标在需要大范围移动时减少实际移动距离，鼠标移动速度越快，指针的行程就越大。这个功能会让游戏用户隐形适应它的加速度模式，对于精准度反而无利，所以关闭此项（注：需要重新适应）

<img src="https://external.galzy.eu.org/2022/JerryYang.XYY@outlook.com/16433925276531643392526797.png" alt="https://external.galzy.eu.org/2022/JerryYang.XYY@outlook.com/16433925276531643392526797.png" style="zoom:50%;" />

### 总结

以上参考酷安[@BiuBiuBiuOvO](https://www.coolapk.com/feed/33017613?shareKey=Y2IzMzcyNzUzNjE5NjFmNDE2Y2Q~&shareUid=2399886&shareFrom=com.coolapk.market_12.0.0) [@卿年](https://www.coolapk.com/feed/30510941?shareKey=NmQ3NzQ1NmM1YTE3NjFmNDJiNDg~&shareUid=2399886&shareFrom=com.coolapk.market_12.0.0) 已获得授权。

本文可能有一些疏忽的地方，因为之前博主在刷手机系统的时候突然忘记某些步骤，再去找时用户早已删贴，所以留此作为笔记。

### END……