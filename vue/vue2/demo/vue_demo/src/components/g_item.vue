<template>
    <div>
        <h3>{{ msg }}</h3>
        <button @click="goHome">返回首页</button>
    </div>
</template>
<script>
    export default {
        name: 'g_item',
        data() {
            return {
                msg: 'ggggggggggggg组件页面'
            }
        },
        created() {
            localStorage.setItem('token', '')
        },
        methods: {
            goHome() {
                this.$router.push('/')
            }
        }
    }
</script>