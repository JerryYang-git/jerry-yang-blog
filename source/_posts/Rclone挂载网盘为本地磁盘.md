---
title: 📦Rclone挂载网盘为本地磁盘
date: 2022-01-29 00:05:11
tags:
- Rclone
categories: 网盘
---

## 准备：

Rclone已配置网盘，windows端安装相关依赖工具--[WinFsp](http://www.secfs.net/winfsp/rel/)。

**（注：winfsp可能需要启动，请按照WinFsp官网所写的文档操作）**

## 挂载：

需要使用 git bash 的终端执行以下命令，因为使用cmd 和 powershell 关闭终端后挂载程序退出、本地挂载的磁盘也会退出。如果您的windows没有安装git ， 可以从Git的官方网站下载安装--[Git官方下载](https://gitforwindows.org/)。

若您使用 cmd 的话 ，cmd 是不能退出的，要保持 cmd 不退出本地硬盘才一直挂载着。

使用git运行命令下面命令，再运行`exit`退出git终端

## **挂载为本地硬盘：**

```
rclone mount onedrive:/ G: --cache-dir D:\网盘挂载缓存 --vfs-cache-mode writes &
```

`onedrive:/`为在**rclone**中配置的网盘**Nmae**

`D:\网盘挂载缓存`为挂载网盘的缓存所在目录

挂载为文件夹：

```
rclone mount onedrive: D:\onedrive --vfs-cache-mode writes &
```

`onedrive:/`为在rclone中配置的网盘Nmae

`D:\onedrive`为挂载目标文件夹

---

如不想缓存过多，可配置`-vfs-cache-max-size 5G`来指定VFS缓存占用上限，其中5G为大小

如果只使用一次，可以在使用后手动查看缓存目录并删除（可使用cmd命令`del`）

## 卸载

在cmd或者git中输入

## 开机自动挂载

可以在windows的启动目录`C:\Users\用户名\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup`中创建相关的bat文件，在bat文件输入上面所运行的命令，即可开机自动挂载。

需要注意的是，如果您想在退出挂载之后

如果只是想列出相关文件列表可以使用[Rclone Browser](https://github.com/kapitainsky/RcloneBrowser/releases)来导入rclone的配置，如下图;

![https://external.galzy.eu.org/2022/JerryYang.XYY@outlook.com/16433850799161643385079075.png](https://external.galzy.eu.org/2022/JerryYang.XYY@outlook.com/16433850799161643385079075.png)

## 参考资料

[Rclone 官方文档](https://rclone.org/docs/)