<template>
    <div>
        <h1> {{ msg }} </h1>
    </div>
</template>
<script>
import eventBus from '@/utils/eventBus'
export default {
    name: 'c_item',
    data() {
        return {
            msg: 'cccccccccccc页面'
        }
    },
    mounted() {
        // 订阅
        eventBus.$on('aToC',(_d) => {
            this.msg = _d
        })
    }
}
</script>