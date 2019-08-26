#### 博客地址：（主地址）
https://algate.github.io

#### 原文章博客地址：（文章未迁移到主地址）
https://algate.github.io/hexo.pure

#### vue项目地址：
https://algate.github.io/onions.vuecli3

#### react项目地址：
https://algate.github.io/onions.com

#### uniapp:
微信小程序，H5，公众号，app等相继开发中ing；

#### 敬请期待


>>
    1. 文章封面缩略图，我取消了展示。如果需要展示的话：
    [1]、在文章头部添加img属性： - img的url链接地址即可
    [2]、如果没有会从文章内部随机去一张图片
    ``` index.ejs
        <article class="post">
        <% if(post.img) {%>
    ```
    ``` index.ejs
        <article class="post">
        <% if(_photoUrl) {%>
    ```
