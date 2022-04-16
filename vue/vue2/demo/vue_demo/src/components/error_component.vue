<template>
    <h3>{{ msg }}</h3>
</template>
<script>

export default {
    name: 'error',
    data() {
        return {
            msg: '组件加载失败，超时了'
        }
    }
}
</script>