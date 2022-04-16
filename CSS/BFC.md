# CSS 中的 BFC，是什么？
\_ 【透过现象看本质】
    BFC 就是符合一些条件（特性）的HTML标签。

\_ 【BFC 是什么？】
    BFC （Block Formatting Context）格式化上下文
    指一个独立的渲染区域，或者说是一个隔离的独立容器
    可以理解为一个独立的封闭空间。无论如何不会影响到它的外面。

\_ 【形成 BFC 的条件】
    1、浮动元素，float 除 none 以外的值
    2、绝对定位元素，position(absolute, fixed)
    3、display 为以下其中之一的值 inline-block, table-cell、
    table-caption、flex
    4、overflow 除了 visible 以外的值（hidden、auto、scroll）
    5、body 根元素

\_ 【BFC 的特性】
    1、内部的 Box 会在垂直方向上一个接一个的放置。
    2、垂直方向上的距离由 margin 决定
    3、bfc 的区域不会与 float 的元素区域重叠
    4、计算 bfc 的高度时，浮动元素也参与计算
    5、bfc 就是页面上的一个独立容器，
        容器里面的子元素不会影响外面的元素