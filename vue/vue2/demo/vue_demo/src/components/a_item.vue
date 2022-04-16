<template>
    <div>
        <h1> {{ msg }} </h1>
        <b_item></b_item>
        <p>
            <button @click="toC">a组件向b组件传值</button>
        </p>
    </div>
</template>
<script>
import b_item from '@/components/b_item'
import eventBus from '@/utils/eventBus'
export default {
    name: 'a_item',
    inject: ['text'],
    data() {
        return {
            msg: this.text
        }
    },
    components: {
        b_item
    },
    methods: {
        toC() {
            // 发布
            eventBus.$emit('aToC', this.msg)
        }
    }
}
</script>
