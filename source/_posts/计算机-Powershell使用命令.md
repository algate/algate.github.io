---
title: Powershell使用命令
categories: 计算机
tags:
  - 计算机
  - Powershell
comments: true
abbrlink: JS191226
date: 2019-12-26 12:09:30
---

# 1 PS工具常用命令集合：

## 1.1 在当前文件夹下打开PS：

按住Shift 右击鼠标
选择`在此处打开Powershell窗口`

## 1.2 PS中打开当前文件夹

有时候，开着PS可是呢，要打开当前资源管理器，对文件进行处理，目录太深，如何快捷打开当前文件夹
有了PS当然是通过命令来处理了：
```cmd
start .
```
>这是最简单的，当然还有别的方法：
explorer(gl) 如果不输入`(gl)`则是打开计算机(Win+E)
……别的不写了，太复杂了，有一个就够用了

## 1.3 PS中新建文件/文件夹
```cmd
新建文件
New-Item file (只能新建文件)
```
```cmd
新建文件夹
md/mkdir filefolder （只能新建文件夹）
```
```cmd
新建文件/文件夹
New-Item filefolder -type File/Directory
```

## 1.4 PS中删除文件和文件夹
```cmd
Remove-Item file/filefolder
```
```cmd
ri/rd/rm/rmdir/erase file/filefolder
```

## 1.5 打开cmd
```cmd
start cmd
```

## 1.6 资源管理器打开文件夹
```cmd
start folder
```
>md 为mkdir的缩写

## 1.5 PS查看文件内容
```cmd
get-content file （后缀也得加上）
```

## 1.6 PS清空命令行
```cmd
cls
```

## 1.7 PS目录查找
```cmd
cd.. (返回上级菜单)
cd filefloder (访问目录问价夹)
```
