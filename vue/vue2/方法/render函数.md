# render 函数用途
    创建 html 模板的

## 知识点
\_ render 函数的参数是 createElement 函数
    createElement 返回值是一个虚拟dom。即 VNode
    也就是我们要渲染的节点

\_ createElement 有三个参数
    第一个参数，必需， {String | Object | Function}
        是要渲染的 html 标签

    第二个参数，可选：{Object}
        html 标签的各种属性

    第三个参数: 可选，{String | Array}
        子虚拟节点(VNodes)，
        当前 html 标签的子元素

\_ 渲染过程
    【1】 独立构建
        包含模板编译器，HTML字符串 -> render函数 -> VNode -> 真实DOM节点

    【2】 运行时构建
        不包含模板编译器， render函数 -> VNode -> 真实DOM节点

export default {
    render( createElement ) {
        return createElement('div', {
            class: 'xxxclass',
            // 设置html内容,这个属性不能与第三个参数同时出现，同时出现显示第二///个参数的属性
            // domProps: { innerHTML: 'Hello Vue'},
            // 设置style
            style: { color: '#f00', fontSize: '20px'},
            // 设置html属性
            attrs: {id: 'xxid'}
        }, [
            createElement('h1', 'Welcome to you!'),
            createElement('p', 'Happy to you!')
        ])

        // 这个就是虚拟DMO节点
        const _elem = createElement('div', {
            class: 'xxxclass',
            // 设置html内容
            // domProps: { innerHTML: 'Hello Vue'},
            // 设置style
            style: { color: '#f00', fontSize: '20px'},
            // 设置html属性
            attrs: {id: 'xxid'}
        }, [
            createElement('h1', 'Welcome to you!'),
            createElement('p', 'Happy to you!')
        ]);

        return _elem;
    }
}