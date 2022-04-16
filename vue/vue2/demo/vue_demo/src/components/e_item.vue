<template>
    <div>
        <h1> {{ msg }} </h1>
        <button @click="goHome">返回首页</button>
        <router-link :to="{path: '/eItem',query: {userId: 1111}}">跳转e页面1</router-link>
    <router-link :to="{path: '/eItem',query: {userId: 2222}}">跳转e页面2</router-link>
    <router-link :to="{path: '/eItem',query: {userId: 3333}}">跳转e页面3</router-link>
    </div>
</template>
<script>

export default {
    name: 'e_item',
    data() {
        return {
            msg: 'eeeeeeeeeeeeeee页面'
        }
    },
    created() {
        localStorage.setItem('token', '')
    },
    beforeRouteEnter(to,from, next) {
        next( vm => {
            console.log(vm.msg)
        })
    },
    // 组件复用时触发，即调用同一个页面，参数不同
    beforeRouteUpdate(to,from, next) {
        console.log(to.query);
        next()
    },
    beforeRouteLeave(to,from, next) {
        if (confirm('要离开？') === true) {
            next()
        }
    },
    methods: {
        goHome() {
            this.$router.push('/')
        }
    }
}
</script>