---
title: 微信公众号Django-内网穿透-服务器配置-python环境-token验证.md
categories: 前端
tags:
  - 微信公众号
comments: true
abbrlink: JS190831
date: 2019-08-31 12:44:30
---

>>> 说明: 微信公众号文档，以及python，好友后续的内容涉及的相关知识，都在python2.7版本下进行的测试验证
python3.0+版本出现各种问题，so，以下内容都在python2.7的环境下有效,先安装python2.7

## 1.微信公众号开发者文档服务器配置

### 1-1.搭建服务(Python Web服务)
[开发者文档](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1472017492_58YV5)
这里就用Django搭建服务了，方便省事(不用自己写代码了)

## 2.搭建Django(Python Web 框架)

### 2.1 安装Django
[Django官方](https://docs.djangoproject.com/zh-hans/2.1/topics/)
直接看 如何在Windows上安装Django？

[1]`pip install Django`(推荐 pip为python的安装工具也可以使用easy_install django来进行安装)

### 2.2 创建your first Django app
https://docs.djangoproject.com/en/2.2/intro/tutorial01/

`django-admin startproject mysite`  mysite为你要创建的web站文件夹 我的为 DjangoWechat
创建完之后，文件夹下会有一个文件夹，cd之后，里边还有个一相同的文件夹名

    mysite/
    manage.py
    mysite/
        __init__.py
        settings.py
        urls.py
        wsgi.py

### 2.3 启动服务
`py manage.py runserver 8080`
打开浏览器就可以看到成功的默认页面

### 2.4 部署自己的app项目
首先创建一个存放你项目的app
`python manage.py startapp polls` 我的是wechat

    polls/
    __init__.py
    admin.py
    apps.py
    migrations/
        __init__.py
    models.py
    tests.py
    views.py

>>Django默认是吧页面放到templates下的，资源是放在static下的
一般打包的项目index.html加一个static文件夹，
so 复制你的项目到polls下，把index.html放到templates下即可，不需要修改你项目里的路径

### 2.5 访问服务下的index.html

2.5.1 修改Djangon项目下urls.py

    # 导入app
    from polls(wechat) import views

    # add
    url(r'^$', views.home, name='home'),

2.5.2 修改polls(wechat)下views.py

    # from django.shortcuts import render
    from django.shortcuts import render, render_to_response, HttpResponse

    def home(request):
    return render_to_response('index.html')

现在应该可以看到index.html效果展示了

## 3.微信服务器配置token验证

### 3.1 公众号登录 - 基础配置 - 服务器配置

服务器地址(URL) ： http://此处可以通过内网穿透来实现自己的域名/weixin/(weixin这个自己定义，需要和Django下的定义的接口一致就行)
令牌(Token)：设置自己的我是起的项目名CloudUI
消息加解密密钥(EncodingAESKey)：点击按钮自动生成

### 3.2 点击提交，你会发现报错
token验证失败 - 只是最多的提示，就是微信发送请求，没哟得到正确的结果
请求超时，说明服务没起

## 4.Django服务添加验证接口

### 4.1 修改Django项目下的urls.py

    # 添加接口(views为之前修改首页导入的app的入口模块，wechat为定义的app下的访问的模块方法)
    url(r'weixin/.*', views.wechat),

    # add wechat-token
    from django.views.decorators.csrf import csrf_exempt  # 解除csrf验证
    from wechat_sdk import WechatConf
    from wechat_sdk import WechatBasic

    ## add wechat-token
    conf = WechatConf(  # 实例化配置信息对象
        token='',  # 服务器配置-Token
        appid='',  # 公众号开发信息-开发者ID
        appsecret='',  # 公众号开发信息-开发者密码
        encrypt_mode='normal',  # 服务器配置-明文模式
        encoding_aes_key=''  # 服务器配置-EncodingAESKey
    )
    @csrf_exempt  # 去除csrf验证
    def wechat(request):
        signature = request.GET.get('signature')  # 获取请求信息
        timestamp = request.GET.get('timestamp')
        nonce = request.GET.get('nonce')
        wechat_instance = WechatBasic(conf=conf)  # 实例化微信基类对象
        if not wechat_instance.check_signature(signature=signature, timestamp=timestamp, nonce=nonce):  # 检查验证请求的签名
            return HttpResponseBadRequest('Verify Failed')
        else:
            if request.method == 'GET':
                return HttpResponse(request.GET.get('echostr', None))  # 返回请求中的回复信息

### 4.2 安装wechat-sdk
`pip install wechat-sdk`

此处服务如果报错 |_

### 4.3 Unable to find vcvarsall.bat
(有可能是找不到模块导致的)
(安装python的时候可能报错 - 此处如果报错跟这个可能关系不大 - 往上翻)报错往上翻，不是文档往上翻
[Unable to find vcvarsall.bat](https://www.cnblogs.com/yyds/p/7065637.html)

### 4.4 安装Crypto

官方验证有个Python实例(用于验证的)：

    目录: E:\JavascriptCode\webPy\微信公众号\SampleCode\Python
    Mode                LastWriteTime         Length Name
    ----                -------------         ------ ----
    -a----        2017/7/27     20:40            795 ierror.py
    -a----        2017/7/27     20:40           2372 Sample.py
    -a----        2017/7/27     20:40           9400 WXBizMsgCrypt.py
    -a----        2017/7/27     20:40              0 __init__.py

如果用到WXBizMsgCrypt.py，在windows会报错
`from Crypto.Cipher import AES` ImportError: No module named 'Crypto'

可以直接`pip install Crypto` 如果成功，直接看第五步，如果不成功就接着看。

里边有这么一段：
"""
关于Crypto.Cipher模块，ImportError: No module named 'Crypto'解决方案
请到官方网站 https://www.dlitz.net/software/pycrypto/ 下载pycrypto。
下载后，按照README中的“Installation”小节的提示进行pycrypto安装。
"""

下载pycrypto-2.6.1.tar.gz文件
接4.4

### 4.5 解压pycrypto下找到readme文件的Installation

执行 `python setup.py install`

会发现报错`Unable to find vcvarsall.bat`

(此处关系不大，否则python安装会提示)先验证vb，vc是否安装？[Unable to find vcvarsall.bat](https://www.cnblogs.com/yyds/p/7065637.html)

如果还是报错

Python安装目录\Lib\site-packages下是否有Crypto
如果有，保证首字母大写
如果没有，copy一份放进去。重新执行 py setup.py install（pip install Crypto）即可，只要最后出现successing的字样就表示你成功了！

## 5.内网穿透

### 5.1 网上随便找一个就ok，只要能外网访问到项目就ok
Django 与 设置的外网访问的 端口号要保持一致

127.0.0.1带上微信请求的接口自己本地先测试下。是否ok，欧克的话就可以公众号验证token了。
此处需要把127.0.0.1 /内网穿透的域名  配置到Django环境下settings.py的`ALLOWED_HOSTS = []`里

如果不成功那就看看报错出在哪里。慢慢解决

此处的域名访问填写到微信公众号的服务器配置里
分别填写token，密钥
然后提交，就会发现token验证成功了，如果报错，请上翻查找原因













