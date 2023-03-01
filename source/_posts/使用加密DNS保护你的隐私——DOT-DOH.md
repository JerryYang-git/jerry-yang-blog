---
title: 📦使用加密DNS保护你的隐私——DOT/DOH
date: 2022-01-13 19:41:33
tags:
- 网络
- 网络安全
categories: [网络安全]
---

互联网已经是许多人的第二世界，许多人都开始重视互联网的隐私保护，但是我们的个人隐私除了可能向互联网平台厂商泄露以外，我们向运营商泄露的隐私则更多、也更全面，但却少有讨论，今天我们就来讲讲如何通过DNS保护我们隐私的另一面漏洞——上网记录  
(全文阅读大概需要8分钟，快速配置加密DNS请直接查看四——五)
 
# 域名系统 (Domain Name System)  
或许你在看这篇图文前可能还不知道什么是DNS
## 一、什么是DNS？
网站的真正地址其实是一串串的IP，然而像百度的 [**110.242.68.3**](http://110.242.68.3/) 这样的ip地址很不方便记忆且没有标识度，所以人们设计出了域名，并通过**网域名称系统（DNS，Domain Name System）**来将域名和IP地址相互映射  
所以当我们输入网址时，我们的设备就向DNS发送请求，DNS就会从自己的数据库里找到你请求的域名所对应的IP，然后返回IP地址，从而让我们与网站连接起来。  
就如向导一样，我告诉他，我要去酷安总部，他告诉我在深南大道12069号海岸时代公寓东座，我只有顺着这个地址才能真正的找到办公室里的小编。

## 二、DNS如何泄露隐私？
DNS设计当初并没有考虑保密性，遵守的UDP协议是明文传输的，任何同一网络中的其他人可以知道你要访问的网址  
而运营商不仅可以感知你每一次的上网动作，还可以在DNS返回的结果中投毒(比如辽宁联通曾经屏蔽工信部网站)，插入广告，或者返回缓存的离线网页来降低运营商的带宽负担，但这些离线网页往往很久不更新。

## 三、加密DNS是什么？
DNS over TLS(DoT)和DNS over Https(DoH)是新一代的DNS，它们通过TLS或者https协议加密了你和DNS服务器之间的连接，从而使第三方无法得知你的域名申请请求，也无法污染DNS结果，DoH把DNS请求隐藏在普通网页流量中，监听者甚至可能不知道你发送了DNS请求。  

**DNS访问记录数据是最重要的隐私之一**  

## 四、如何使用加密DNS？
Android设备中(Android 9及以上)：打开设置-找到私人DNS(部分设备为加密DNS)-选择主机商提供域名(支持DoT)  
 仅支持域名，不能填写IP地址
![](https://external.galzy.eu.org/2022/JerryYang.XYY@outlook.com/1642075306693Android%E8%AE%BE%E5%A4%87%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E5%8A%A0%E5%AF%86DNS.jpg)

Windows中(Windows10 20H2及以上)：找到设置-网络与Internet-找到WIFI-DNS服务器(手动)-填写DNS服务器的IP，如果DNS在微软白名单中，下方会出现［仅加密］的按钮(支持DoH) 
设置所有WIFI的DNS
![](https://external.galzy.eu.org/2022/JerryYang.XYY@outlook.com/1642075344678Windows%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E5%8A%A0%E5%AF%86DNS.jpg)

浏览器(Chrome/Edge/火狐等)：浏览器设置-找到安全DNS(加密DNS)-另选一个提供商，打开后可以选择自带的提供商或者自定义域名(支持DoH)  
可将域名改写为IP地址
![](https://external.galzy.eu.org/2022/JerryYang.XYY@outlook.com/1642075419464%E6%B5%8F%E8%A7%88%E5%99%A8%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E5%8A%A0%E5%AF%86DNS.jpg)

iPhone或mac：apple在去年开始让设备支持加密DNS，使用特定提供的描述文件（可以从DNS的官网上下载），或者前往APP store下载诸如ADGuard Cloudflare等软件。  
自行导入
![](https://external.galzy.eu.org/2022/JerryYang.XYY@outlook.com/1642075464214iPhone%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E5%8A%A0%E5%AF%86DNS2.jpg)
 
## 五、怎么选择加密DNS？
国内目前支持加密DNS的服务商比较少

阿里DNS:
```
DoT: dns.alidns.com
DoH: https://dns.alidns.com/dns-query
```
阿里DNS比较稳定，国内外均设有节点，访问阿里云的网站比较快  
腾讯家的
```
DNSpod:DoT: dot.pub
DoH: https://doh.pub/dns-query
```
稳定性不如阿里,有因为受到DDOS攻击而关闭服务器的情况，不过玩腾讯游戏延迟很低  
红鱼DNS:  
这是中国第一家支持个性化DNS的服务商，登录网站注册后即可获得你的个性化域名  
网站链接: https://www.rubyfish.cn/  
## 六、还有别的加密DNS选择吗？
当然有！Google、Cloudflare、IIJ、OpenDNS等均提供全球加密DNS服务，但是在国内访问较慢，且存在阻断风险并不推荐。

在使用国外的DNS时，有些国内网站会无法解析，比如青年大学习

## 七、什么是个性化加密DNS？
NextDNS和红鱼DNS均提供个性化加密DNS，注册后你会过的专属的DNS域名，它们提供广告拦截、防跟踪、家长监控等功能，是喜欢自定义的高级玩家的不三选择。
## 八、如何检测我连接上了加密DNS？
DNS检测链接[https://nstool.netease.com](https://nstool.netease.com)
DNS检测链接（推荐）[https://debug.skk.moe](https://debug.skk.moe)
请检查返回的DNS地址是否和你设置的地址符合，如果服务器和你运营商一致，说明你的DNS已经被运营商劫持
## 九、被劫持了加密DNS怎么办？
由于在浏览器中填写的是网址，部分运营商会大胆劫持加密DNS 
解决方法：把网址更改为IP
```
CloudflareDNS:https://one.one.one.one/dns-query
改为https://1.1.1.1/dns-query
阿里DNS:https://dns.alidns.com/dns-query
改为https://223.5.5.5/dns-query
```
适用大多数DoH
## 十、其他小问题
- 建议设置系统的加密DNS后在浏览器也设置一个，部分浏览器可能仍然使用传统的明文DNS传输，系统未必能接管浏览器网络。
- 加密DNS偶尔会与校园网冲突，部分校园网网关会不断尝试劫持DNS和获取您和DNS建立链接中的数据，从而出现无法连接DNS，无法连接互联网的情况，如有上述情况建议联系你的校园网管理员

# The End……

---
> 转载请标注原文链接：[https://www.coolapk.com/feed/32182308?shareKey=OGRhNzk0ZjJjZDBiNjFlMDBlMzk~&shareUid=2399886&shareFrom=com.coolapk.market_11.4.7](https://www.coolapk.com/feed/32182308?shareKey=OGRhNzk0ZjJjZDBiNjFlMDBlMzk~&shareUid=2399886&shareFrom=com.coolapk.market_11.4.7)