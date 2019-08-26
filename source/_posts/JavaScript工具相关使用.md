---
title: JavaScript工具相关使用
categories: 前端
tags:
  - JavaScript
  - 打包工具
comments: true
abbrlink: JS190426
date: 2019-04-26 10:38:30
---

### 1.serve
不用express,不用部署http环境,可以直接运行编译后代码

用法：serve -s ./docs -p 8888

安装：node环境
    全局安装 serve 依赖 （ cnpm install -g serve ）

### 2.font-spider
打包文件之后，可以压缩页面中引用的字体文件（字体图标除外）

用法：font-spider ./html文件路径

安装：cnpm install font-spider -g
