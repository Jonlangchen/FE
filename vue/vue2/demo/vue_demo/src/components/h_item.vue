<script>
    export default {
        name: 'h_item',
        data() {
            return {
                msg: 'vue render函数', 
                list: [
                    'Welcome to you!',
                    'Happy to you!'
                ]
            }
        },
        render( createElement ) {
            // return createElement('div', {
            //     class: 'xxxclass',
            //     // 设置html内容
            //     // domProps: { innerHTML: 'Hello Vue'},
            //     // 设置style
            //     style: { color: '#f00', fontSize: '20px'},
            //     // 设置html属性
            //     attrs: {id: 'xxid'}
            // }, [
            //     createElement('h1', 'Welcome to you!'),
            //     createElement('p', 'Happy to you!')
            // ])

            const _elem = createElement('router-link', {
                class: 'xxxclass',
                // 设置html内容
                domProps: { innerHTML: '首页'},
                // 设置style
                style: { color: '#f00', fontSize: '20px'},
                // 设置html属性
                attrs: {to: '/home'}
            }, 
            // [
            //     createElement('h1', 'Welcome to you!'),
            //     createElement('p', 'Happy to you!')
            // ]
                // this.list.map(item => createElement('li', item))
            );

            return _elem;
        },
        // beforeRouteEnter(to, from, next) {
        //     next('/about')
        // }
        // beforeRouteLeave(to, from, next) {
        //     next(true)
        // }
    }
</script>