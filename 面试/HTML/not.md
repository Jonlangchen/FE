# HTML5有哪些新特性？移除了哪些元素？
HTML5的新特性如下：
拖放（ Drag and drop）APIl

语义化更好的内容标签（ header、nav、 footer、 aside、 article、 section）

音频、视频（ audio、 video）API

画布（ Canvas）API

地理（ Geolocation）APl

本地离线存储（ localStorage），即长期存储数据，浏览器关闭后数据不丢失。

会话存储（ sessionStorage），即数据在浏览器关闭后自动删除

表单控件包括 calendar、date、time、 email、url、 search。

新的技术包括 webwork、 websocket、 Geolocation

移除的元素如下：
纯表现的元素，包括 basefont,big、 center、font、s, strike,t、u

对可用性产生负面影响的元素，包括 frame、 frameset、 Noframes

# 与HTML4比较，HTML5废弃了哪些元素？
    废弃的元素包括 frame、frameset、 noframe、 applet、big、 center和 basefont。


# 如何处理HTML5新标签的浏览器兼容问题？
    IE8、IE7、IE6支持用 document. create Element产生标签，可以利用这一特性让这些浏览器支持HTML5新标签。浏览器支持新标签后，还需要添加标签默认的样式（最好的方式是直接使用成熟的框架，使用最多的是 html5shim框架），可以用 IE hack引入该框架
<！--[if 1t IE 9]>
<script>src="http://html5shim.googlecode.com/svn/trunk/htm15.js</script>
<！[end if]-->


# HTML5新增了哪些功能AP？
    新增的功能API包括 Media APl、 Text Track API、 Application Cache API、User Interaction、 Data Transfer API、 Command API、 Constraint Validation API、 History API

# HTML5引入了哪些新的表单属性？
    新增表单属性包括 datalist、 datetime、 output、 keygen、date、 month、week、time、 number、 range、 emailurl


# 本地存储和会话（事务）存储之间的区别是什么？
    本地存储数据持续永久，但是会话存储在浏览器打开时有效，在浏览器关闭时会话重置存储数据。

# 如何实现浏览器内多个标签页之间的通信？
    在标签页之间，调用 localstorge、 cookies等数据存储，可以实现标签页之间的通信

# HTML5为浏览器提供了哪些数据存储方案？
    在较高版本的浏览器中，提供了 sessionStorage：和 globalStorage。在HTML5规范中，用 localStorage取代 globalStorage 。

    HTML5中的 Web Storage包括两种存储方式，分别是 sessionStorage和 localStorage。

    sessionStorage用于在本地存储一个会话（ session）中的数据，这些数据只有同一个会话中的页面才能访问，当会话结来后，数据也随之销毀。因此 sessionStorage不是一种持久化的本地存储，仅仅是会话级别的存储。

    localStorage用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。

    localStorage和 sessionStorage都具有相同的操作方法，例如 setItem、 getItem和removeltem等

# 请描述一下 sessionStorage和 localStorage的区别。
    sessionStorage用于在本地存储一个会话中的数据，这些数据只有同一个会话中的页面才能访问，当会话结束后，数据也随之销毀。因此 sessionStorage不是一种持久化的本地存储，仅仅是会话级别的存储。

    而 localstorage用于持久化本地存储，除非主动删除数据，否则数据是永远不会过期的。

# 本地存储的数据有生命周期吗？
    本地存储的数据没有生命周期，它将一直存储数据，直到用户从浏览器清除或者使用 JavaScript代码移除。

# localStorage和 cookie的区别是什么？
    localStorage的概念和cookie相似，区别是 localStorage是为了更大容量的存储设计的。cookie的大小是受限的，并且每次请求一个新页面时， cookie都会被发送过去，这样无形中浪费了带宽。另外， cookie还需要指定作用域，不可以跨域调用。

    除此之外， localStorage拥有 setlten, getItem、 removeltem、 clear等方法， cookie则需要前端开发者自己封装 setCookie和 get Cookie。但 cookie也是不可或缺的，因为 cookie的作用是与服务器进行交互，并且还是HTP规范的一部分，而 localStorage仅因为是为了在本地“存储”数据而已，无法跨浏览器使用。

# 请你谈谈 cookie的特点。
cookie虽然为持久保存客户端数据提供了方便，分担了服务器存储的负担，但是有以下局限性。

（1）每个特定的域名下最多生成20个 cookie。

（2）IE6或更低版本最多有20个 cookie。

（3）IE7和之后的版本最多可以有50个 cookie。

（4） Firefox最多可以有50个 cookie。

（5） Chrome和 Safari没有做硬性限制。

IE和 Opera会清理近期最少使用的 cookie, Firefox会随机清理 cookie。

cookie最大为4096字节，为了兼容性，一般不能超过4095字节。

IE提供了一种存储方式，可以让用户数据持久化，叫作 userdata，从IE5.0就开始支持此功能。每块数据最多128KB，每个域名下最多1MB。这个持久化数据放在缓存中，如果缓存没有被清理，就会一直存在。

优点如下：

（1）通过良好的编程，控制保存在 cookie中的 session对象的大小。

（2）通过加密和安全传输技术（SSL），降低 cookie被破解的可能性。

（3）只在 cookie中存放不敏感数据，即使被盗也不会有重大损失。

（4）控制 cookie的生命周期，使之不会永远有效。数据偷盗者很可能得到一个过期的 cookie。

缺点如下：

（1）“ cookie”的数量和长度有限制。每个 domain最多只能有20条 cookie，每个cookie的长度不能超过4KB，否则会被截掉。

（2）安全性问题。如果 cookie被别人拦截了，就可以取得所有的 session信息。即使加密也于事无补，因为拦截者并不需要知道 cookie的意义，他只要原样转发 cookie就可以达到目的。

（3）有些状态不可能保存在客户端。例如，为了防止重复提交表单，我们需要在服务器端保存一个计数器。如果把这个计数器保存在客户端，那么它起不到任何作用

# cookie和 session的区别是什么？
区别如下：

（1） cookie数据存放在客户的浏览器上， session数据存放在服务器上。

（2） cookie不是很安全，别人可以分析存放在本地的 cookie并进行 cookie欺骗。考虑到安全问题应当使用 session。

（3） session会在一定时间内保存在服务器上。当访问增多时，会占用较多服务器的资源。为了减轻服务器的负担，应当使用 cookie。

（4）单个 cookie保存的数据不能超过4KB，很多浏览器都限制一个站点最多保存20个 cookie。

所以个人建议可以将登录信息等重要信息存放在 session中，其他信息（如果需要保留）可以存放在 cookie中。


# 什么是SVG？
    SVG即可缩放失量图形（ Scalable Vector Graphics）。它是基于文本的图形语言，使用文本、线条、点等来绘制图像，这使得它轻便、显示迅速。

# Canvas和SvG的区别是什么？
两者的区别如下：

（1）一旦 Canvas绘制完成将不能访问像素或操作它；任何使用SVG绘制的形状都能被记忆和操作，可以被浏览器再次显示。

（2） Canvas对绘制动画和游戏非常有利；SVG对创建图形（如CAD）非常有利。

（3）因为不需要记住以后事情，所以 Canvas运行更快；因为为了之后的操作，SVG需要记录坐标，所以运行比较缓慢。

（4）在 Canvas中不能为绘制对象绑定相关事件；在SVG中可以为绘制对象绑定相关事件。

（5） Canvas绘制出的是位图，因此与分辨率有关；SvG绘制出的是矢量图，因此与分辨率无关。


# HTML5如何实现跨域？
在服务器端设置允许在其他域名下访问，例如允许所有域名访问以下内容。

response.setHeader（"Access-Control-Allow-Origin"，"*"）；
response.setHeader （"Access-Control-Allow-Methods"，"POST"）；
response.setHeader（"Access-Control-Allow-Headers"，"x-requested-with, content-type"）；





# 什么是 Websql？
Websql是一个在浏览器客户端的结构关系数据库，是浏览器内的本地 RDBMS（关系型数据库管理系统），可以使用SQL查询。

# Websql是HTML5的一个规范吗？
不是，许多人把它标记为HTML5，但是它不是HTML5规范的一部分，这个规范是基于 SQLite的


# HTML5应用缓存和常规的HTML浏览器缓存有什么差别？
    HTML5应用缓存最关键的就是支持离线应用，可获取少数或者全部网站内容，包括HTML、CSS、图像和 JavaScript脚本并存在本地。该特性提升了网站的性能，可通过如下方式实现。
<！doctype html>
<html manifest="example. appcache">
......
</html>
    与传统的浏览器缓存比较，该特性并不强制要求用户访问网站。


# HTML5中的应用缓存是什么？
    HTML5应用缓存的最终目的是帮助用户离线浏览页面。换句话说，如果网络连接不可用，打开的页面就来自浏览器缓存，离线应用缓存可以帮助用户达到这个目的。


# HTML5应用程序缓存为应用带来什么优势？
    应用程序缓存为应用带来3个优势。
    （1）离线浏览，让用户可在应用离线时（网络不可用时）使用它们。
    （2）速度，让已缓存资源加载得更快。
    （3）减少服务器负载，让浏览器将只下载服务器更新过的资源。

# HTML5中如何实现应用缓存？
首先，需要指定“ manifest”文件，" manifest”文件帮助你定义缓存如何工作以下是“ manifest”文件的结构。

CACHE MANTEEST 
# version 1.0
/demo. css
/demo. js
/demo.png
所有 manifest文件都以” CACHE MANIFEST"语句开始。
#（散列标签）有助于提供缓存文件的版本。
manifest文件的内容类型应是"text/ cache- manifest”。
创建一个缓存 manifest文件后，在HTML页面中提供 manifest链接，代码如下所示。

<html manifest="icketang. appcache">

第一次运行以上文件时，它会添加到浏览器应用缓存中，在服务器宕机时，页面从应用缓存中获取数据。

# 如何刷新浏览器的应用缓存？

应用缓存通过变更“#”标签后的版本号来刷新，如下所示：

CACHE  MANIFEST
 # version 2.0
/icketang.css
/icketang.js
/icketang. png
NETWORK：
 login. php

# 应用缓存中的回退是什么？
应用缓存中的回退会帮助你指定在服务器不可访问时，显示某文件。例如在下面的manifest文件中，如果用户输入了“/home”，同时服务器不可到达，“404htm”文件应送达。

FALLBACK：
/home//404. html

# 应用缓存中网络命令的作用是什么？
网络命令描述不需要缓存的文件，例如以下代码中“ login.php”始终都不应该缓存或者离线访问。

NETWORK 
login. php


# 请你说一下 Web Worker和 WebSocket的作用。
    Web Worker的作用如下：
    （1）通过 worker= new Worker（url）加载一个 JavaScript文件，创建一个 Worker，同时返回一个 Worker实例

    （2）用 worker.postMessage（data）向 Worker发送数据

    （3）绑定 worker.onmessage接收 Worker发送过来的数据

    （4）可以使用 worker.terminate()终止一个 Worker的执行。

    WebSocket的作用如下。

    它是Web应用程序的传输协议，提供了双向的、按序到达的数据流。它是HTML5新増的协议， WebSocket的连接是持久的，它在客户端和服务器之间保持双工连接，服务器的更新可以及时推送到客户端，而不需要客户端以一定的时间间隔去轮询。


# 如何让 Websocket兼容低版本浏览器？
    使用 Adobe Flash Socket、 ActiveX HTMLFile（E）、 multipart编码发送XHR

    与长轮询发送XHR等，可以实现不支持 WebSocket API的浏览器对 Web Socket的兼容。