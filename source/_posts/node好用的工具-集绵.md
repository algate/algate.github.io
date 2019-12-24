---
title: Node好用的工具集绵
categories: 工具
tags:
  - node
  - dependencies
comments: true
img: ''
abbrlink: 201903091523
date: 2019-03-09 15:23:01
---

## No.1 serve

cnpm install -g serve

写博客发布后、项目打包要上线…… 你要花一分钟预览下，index.html启动的文件是否可以正产使用
之前，我一直使用node+http-server+express 等搭建的弄得环境来启动。需要把文件拷贝到搭建的环境目录里，费时费力

无意中，我发现了一个好用的Node工具  很简单的名字: serve

打包之后，发布后，可以直接启动ps，运行命令`serve -s  -p 8080`
如果在文件夹里边启动ps,直接`serve`就可以了
如果实在文件夹外部，`serve folder`也可以了

可以加端口号，`-p 5001` 默认是 `5000`
