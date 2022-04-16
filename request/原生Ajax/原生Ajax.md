# 原生Ajax
    无刷新获取数据

## Ajax工作原理
    Ajax的核心是JavaScript对象XMLHttpRequest。XMLHttpRequest使您可以使用
JavaScript向服务器提出请求并处理响应，而不阻塞用户。

## 为什么要使用Ajax
    Ajax可以有效提升用户体验。
    根据这样的原理所以Ajax实现了静态页面在不刷新整个页面的情况下与服务器通信，减少
了用户的等待时间，增强用户体验的友好程度。


## Ajax 请求流程
    一个完成的 Ajax 请求，分为5个阶段(状态)，每个状态都有一个数字来标记。xhr.readyState
—— 1、客户端未初始化：状态值为 0
—— 2、与服务器建立连接，状态值为 1
—— 3、服务器接受请求，状态值为 2
—— 4、服务器处理中，状态值为 3
—— 5、处理完成返回结果，状态值为 4

## HTTP协议的请求状态码
—— 1、200-300(请求成功)；
—— 2、300-400(重定向)；
—— 3、400-500(请求错误！404未找到)；
—— 4、500-600(服务器错误！数据库出问题！联系开发者！)；

## 原生Ajax请求步骤
—— 1、创建 XMLHttpRequest 对象
—— 2、准备发送 open()
—— 3、发送请求 send()
—— 4、监听函数--监听 Ajax 各个状态，回调函数--返回数据

## Ajax 请求传递参数
### get传递参数
    get 传递参数是在url地址栏传递参数
    open()参数中，需要对 URL 需要用问号缀参数，send()参数是null

    xhr.open('get','xxx?参数=参数值&参数=xx', true)

### post传递参数
    post 请求参数在请求体中传递 send(发送参数) 不是 url 地址拼接
    需要设置请求头信息
    setRequestHeader("Content-type","application/x-www-form-urlencoded;charset=utf-8")

    1、application/x-www-form-urlencoded(默认值)表单传输编码
    2、multipart/form-data 非文本内容比如：图片、mp3
    3、text/plain 纯文本

## 封装
—— 1、传递什么样参数，用什么形式传递
—— 2、封装的时候，需要几个函数完成
—— 3、函数之间怎么传递返回值

### 面向对象封装
—— (1) 确定哪些内容是可变的 (参数)
—— (2) 确定：返回值 (单个值，对象)
—— (3) 参数+代码 实现达到返回值