---
title: uniapp大揭秘-初遇
categories: 前端
tags:
  - uniapp
  - 移动端
comments: true
img: ''
abbrlink: 201903091436
date: 2019-03-09 14:36:01
---

### 1.uniapp命令行

命令行敲击的快感，谁用谁知道，so为的项目是vue安装项目的

### 2.uniapp-pages.json
要访问的每个页面都要在此文件中进行初始配置

```json
{
    pages:[{
        "path": "pages/ucenter/ucenter",
        "style": {
            <!-- 此处为单个文件配置，不过不配置，优先使用globalStyle里的配置内容 -->
            "navigationBarTitleText": "不谈理想",
            "navigationBarBackgroundColor": "#1C88E8",
            "navigationBarTextStyle": "white",
            /* 是否开启下拉刷新 */
            "enablePullDownRefresh" : true
            "app-plus": {
                "bounce": "none",
                <!-- titleNView设置为false，顶部导航就没有了 -->
                "titleNView": {
                    "buttons": [{
                        "text": "\uf0e0",
                        "fontSrc": "/static/fonts/fontawesome-webfont.ttf",
                        "fontSize": "22px",
                        "float": "left"
                    },
                    {
                        "text": "\uf1de",
                        "fontSrc": "/static/fonts/fontawesome-webfont.ttf",
                        "fontSize": "22px"
                    }]
                }
            },
            "h5": {

            },
            /* 应用小程序组件 */
            "usingComponents": {

            },
            /* 窗口背景色 */
            "backgroundColor": "#ECEFF2"
        }
    }],
    <!-- 页面菜单栏显示 -->
    "tabBar": {
        "color": "#73787C",
        "selectedColor": "#1B88EF",
        "backgroundColor": "#FFFFFF",
        "borderStyle": "white",
        "list": [{
            "pagePath": "pages/list/list",
            "iconPath": "static/home.png",
            "selectedIconPath": "static/home-active.png",
            "text": "发现"
        },{
            "pagePath": "pages/bookrack/list",
            "iconPath": "static/home.png",
            "selectedIconPath": "static/home-active.png",
            "text": "书架"
        },{
            "pagePath": "pages/idea/list",
            "iconPath": "static/home.png",
            "selectedIconPath": "static/home-active.png",
            "text": "想法"
        }, {
            "pagePath": "pages/ucenter/ucenter",
            "iconPath": "static/center.png",
            "selectedIconPath": "static/center-active.png",
            "text": "我"
        }]
    }

```
### 3.uniapp-manifest.json
项目整体配置文件
最近自己写项目遇到个问题，请求接口设置代理的问题，网上写的没有一个我能用的，最后在自己的不断尝试中竟然解决了。
1.未设置DevServer，假如你8080端口号没被占用，启动项目，就是8080端口号
2.假如8080端口号被占用，启动项目，就是8081.这个非常人性化了。假如先启动该项目，启动别的8080就不行了哦，注意
3.router，base初始的时候是很长一段路径，我是为了解决代理问题才改的，你可以不改哦！
4.proxy: pathRewrite-是吧路径中的字段替换成什么，跟你创建的vue，react等项目一样。
```json
{
    "h5" : {
        "router" : {
            "base" : "/"
        },
        "template" : "h5.template.html",
        "devServer": {
            "port": 8081,
            "disableHostCheck": true,
            "proxy": {
                "/api": {
                    "target": "https://api.douban.com",
                    "changeOrigin": true,
                    "secure": false,
                    "pathRewrite": {"^/api" : ""}
                }
            }
        }
    }
}
```
这是我的配置文件，本想贴出原始代码的，不过，写这篇文章时，正好没有网络。
