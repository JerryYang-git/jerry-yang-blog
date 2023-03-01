---
title: 📦Rclone安装配置Onedrive教程
date: 2022-05-24 17:36:58
tags:
- onedrive
- cloud
- Rclone
categories: Rclone
---

## 前言

Rclone 是一个的命令行工具，支持在不同对象存储、网盘间同步、上传、下载数据。并且通过一些设置可以实现离线下载、服务器备份等非常实用的功能。这里以 OneDrive 和 Google Drive 为例子，进行连接配置，其它网盘的操作类似。由于是交互式配置选项，只要能看懂基本没有任何难度。

## 安装 Rclone

官方提供了[一键安装脚本](https://rclone.org/install/#script-installation)：

```
curl https://rclone.org/install.sh | sudo bash
```

## Rclone 连接 OneDrive

### 获取 token

在本地 Win­dows 电脑上[下载 rclone](https://rclone.org/downloads/)，然后解压出来，解压后进入文件夹，在资源管理器地址栏输入 `cmd`，回车就会在当前路径打开命令提示符。输入以下命令：

```
rclone authorize "onedrive"
```

接下来会弹出浏览器，要求你登录账号进行授权。授权完后命令提示符窗口会出现以下信息：

```
If your browser doesn't open automatically go to the following link: http://127.0.0.1:53682/auth
Log in and authorize rclone for access
Waiting for code...
Got code
Paste the following into your remote machine --->
{"access_token":"xxxxxxxx"}  # 注意!复制{xxxxxxxx}整个内容，并保存好，后面需要用到
<---End paste
```

### 配置 Rclone

输入 `rclone config` 命令，会出现以下信息，参照下面的注释进行操作。

<details>
<summary>点击查看</summary>

> **TIPS:** 因为 RCLONE 会时不时进行更新，当你看到这篇教程时菜单选项可能已经发生了略微的改动，但大致思路不会变，**不要无脑照搬操作**。
> 

```
e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q> n  # 选择n，新建
name> Google  # 输入名称，类似于标签，用于区分不同的网盘。
Type of storage to configure.
Enter a string value. Press Enter for the default ("").
Choose a number from below, or type in your own value
     1 / A stackable unification remote, which can appear to merge the contents of several remtes
   \ "union"
 2 / Alias for a existing remote
   \ "alias"
 3 / Amazon Drive
   \ "amazon cloud drive"
 4 / Amazon S3 Compliant Storage Providers (AWS, Ceph, Dreamhost, IBM COS, Minio)
   \ "s3"
 5 / Backblaze B2
   \ "b2"
 6 / Box
   \ "box"
 7 / Cache a remote
   \ "cache"
 8 / Dropbox
   \ "dropbox"
 9 / Encrypt/Decrypt a remote
   \ "crypt"
10 / FTP Connection
   \ "ftp"
11 / Google Cloud Storage (this is not Google Drive)
   \ "google cloud storage"
12 / Google Drive
   \ "drive"
13 / Hubic
   \ "hubic"
14 / JottaCloud
   \ "jottacloud"
15 / Local Disk
   \ "local"
16 / Mega
   \ "mega"
17 / Microsoft Azure Blob Storage
   \ "azureblob"
18 / Microsoft OneDrive
   \ "onedrive"
19 / OpenDrive
   \ "opendrive"
20 / Openstack Swift (Rackspace Cloud Files, Memset Memstore, OVH)
   \ "swift"
21 / Pcloud
   \ "pcloud"
22 / QingCloud Object Storage
   \ "qingstor"
23 / SSH/SFTP Connection
   \ "sftp"
24 / Webdav
   \ "webdav"
25 / Yandex Disk
   \ "yandex"
26 / http Connection
   \ "http"
Storage> 12  # 选择12，Google Drive
** See help for drive backend at: https://rclone.org/drive/ **

Google Application Client Id
Leave blank normally.
Enter a string value. Press Enter for the default ("").
client_id>  # 留空，回车
Google Application Client Secret
Leave blank normally.
Enter a string value. Press Enter for the default ("").
client_secret>  # 留空，回车
Scope that rclone should use when requesting access from drive.
Enter a string value. Press Enter for the default ("").
Choose a number from below, or type in your own value
 1 / Full access all files, excluding Application Data Folder.
   \ "drive"
 2 / Read-only access to file metadata and file contents.
   \ "drive.readonly"
   / Access to files created by rclone only.
 3 | These are visible in the drive website.
   | File authorization is revoked when the user deauthorizes the app.
   \ "drive.file"
   / Allows read and write access to the Application Data folder.
 4 | This is not visible in the drive website.
   \ "drive.appfolder"
   / Allows read-only access to file metadata but
 5 | does not allow any access to read or download file content.
   \ "drive.metadata.readonly"
scope> 1
ID of the root folder
Leave blank normally.
Fill in to access "Computers" folders. (see docs).
Enter a string value. Press Enter for the default ("").
root_folder_id>  # 留空，回车
Service Account Credentials JSON file path
Leave blank normally.
Needed only if you want use SA instead of interactive login.
Enter a string value. Press Enter for the default ("").
service_account_file>
Edit advanced config? (y/n)
y) Yes
n) No
y/n> n
Remote config
Use auto config?
 * Say Y if not sure
 * Say N if you are working on a remote or headless machine or Y didn't work
y) Yes
n) No
y/n> n
    If your browser doesn't open automatically go to the following link: https://accounts.google.com/o/oauth2/auth?access_type=offline&client_id=XXXXXXXXXXX.apps.googleusercontent.com&redirect_uri=urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob&response_type=code&scoe=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive&state=XXXXXXXXXXXXXXXXXXXX
    Log in and authorize rclone for access  # 会弹出浏览器，要求你登录账号进行授权。如果没有弹出，复制上面链接到浏览器中打开进行授权。
Enter verification code>  # 在这里输入网页上显示的验证码

Configure this as a team drive?
y) Yes
n) No
y/n> y
Fetching team drive list...
No team drives found in your account--------------------
[Google]
type = drive
scope = drive
token = {"access_token":"XXXXXXXXXXXXXXXXXXXXX"}
--------------------
y) Yes this is OK
e) Edit this remote
d) Delete this remote
y/e/d> y
Current remotes:

Name                 Type
====                 ====
Google               drive
P3TERX               onedrive

e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q> q
```

</details>

## 常用命令

配置完成之后您可以参考[使用教程](https://www.xyybolg.top/2022/05/24/Rclone%E5%B8%B8%E7%94%A8%E6%8C%87%E4%BB%A4/)来进行使用

## 参考

[rclone 官方手册](https://rclone.org/docs/)

[在 Debian/Ubuntu 上使用 rclone 挂载 OneDrive 网盘](https://www.moerats.com/archives/491/)

> 本文作者：P3TERX
> 
> 
> **本文链接：**[https://p3terx.com/archives/rclone-installation-and-configuration-tutorial.html](https://p3terx.com/archives/rclone-installation-and-configuration-tutorial.html)
> 
> **版权声明：** 本博客所有文章除特别声明外，均采用 [CC BY-NC-SA 4.0](https://p3terx.com/go/aHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LW5jLXNhLzQuMC9kZWVkLnpo) 许可协议。非商业转载及引用请注明出处（作者、原文链接），商业转载请联系作者获得授权。