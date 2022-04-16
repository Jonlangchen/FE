# 如何区别HTML和HTML5？
    用 DOCTYPE声明新增的结构元素和功能元素来区别它们。


# 什么是HTML5？
    HTML5是最新的HTML标准，它的主要目标是提供所有内容，而不需要任何Flash、 SilverLight等的额外插件，这些内容来自动画、视频、富GUI等

    HTML5是万维网联盟（W3C）和网络超文本应用技术工作组（ WHATWG）合作输出的。


# 新的HTML5文档类型和字符集是什么？
    HTML5文档类型是<！doctype html>。

    HTML5使用的字符集< meta charset="UTF8">。


# HTML5 Canvas元素有什么作用？
    Canvas元素用于在网页上绘制图形，该元素标签的强大之处在于可以直接在HTML上进行图形操作。


# HTML5的离线存储有哪些？
    有以下离线存储localStorage，可长期存储数据，即浏览器关闭后数据不丢失
    session Storage，数据在浏览器关闭后自动删除


# HTML5的form如何关闭自动补全功能？
    将不想要提示的form元素下的 Input元素的 autocomplete属性设置为off


# 如何在HTML5页面中嵌入音频？
    HTML5包含了嵌入音频文件的标准方式，支持的格式包括MP3、Wav和Ogg等，嵌入方式如下。
<audio controls>
<source src="icketang.mp3" type="audio/mpeg">
Your browser does'nt support audio embedding feature.
</audio>    

# 如何在HTML5页面中嵌入视频？
    和嵌入音频文件一样，HTML5定义了嵌入视频的标准方式，支持的格式包括MP4、WebM和Ogg等，嵌入方式如下。
< video width=”450” height=”340” contro1s>
<source src="icketang.mp4"  type="video/mp4">
Your browser does'nt support video embedding feature.
</video>


# 为什么HTML5里面不需要DTD（ Document Type Definition，文档类型定义）？如果不放入<！doctype html>标签，HTML5还会工作吗？
    HTML5没有使用SGML或者 XHTML，它是一个全新的类型，因此不需要参考DTD。对于HTML5，仅须放入<！doctype html>标签，就能让浏览器识别HTML5文档。

    如果不放入<！doctype html>标签，HTML5不会工作。浏览器将不能识别出它是HTML文档，同时HTML5的标签将不能正常工作

# HTML5为什么只需要写<！doctype htm>？
    HTML5不基于SGML，因此不需要对DTD进行引用，但是需要 DOCTYPE来规范浏览器的行为（让浏览器按照它们的方式来运行）。而HTM4.01基于SGML，所以需要对DTD进行引用，才能告知浏览器文档所使用的类型。


# 哪些浏览器支持HTML5？
    几乎所有的浏览器（如 Safari、 Chrome、 Firefox、 Opera、IE）都支持HTML5


# 如果把HTML5看成一个开放平台，它的构建模块有哪些？
    如果把HTML5看成一个开放平台，它的构建模块至少包括以下几个，如<nav><header><section><footer>。

    ≤nav>标签用来将具有导航性质的链接划分在一起，使代码结构在语义化方面更加准确

    < header>标签用来定义文档的页眉。

    < section>标签用来描述文档的结构。

    < footer>标签用来定义页脚。在典型情况下，该元素会包含文档作者的姓名、文档的创作日期和联系信息
