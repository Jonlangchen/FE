# 为什么 vueJS 组件的data 只接受 function?
\_ 原因：
    通过data函数，每次创建一个新实例后，从而返回新副本 data。

\_ 引申知识点：
    涉及 JavaScript 对象的 
    引用传递 ：对象保存在 js 的内存的堆里面
    值传递： 保存在 js 的内存的栈里面