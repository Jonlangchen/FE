<template>
    <div>
        <h2>Children 页面</h2>
        <!-- <p>接收来自父组件的String：{{msg}}</p>
        <p>接收来自父组件的Number：{{num}}</p>
        <p>接收来自父组件的Boolean：{{bool}}</p>
        <p>接收来自父组件的Array：{{arr}}</p>
        <p>接收来自父组件的Object：{{obj}}</p> -->

        <button @click="sendMsg">向父组件传值</button>

        <div class="btn" @click="confirm">确定</div>

        <son v-model="name"></son>
        {{name}}
        <div>
            <span>{{myCount}}</span>
        </div>
    </div>
</template>
<script>
import son from '@/views/son'
export default {
    data() {
        return {
            name: 'nick'
        }
    },
    // model: {
    //     prop: 'flag1',
    //     event: 'changed'
    // },
    components: {
        son
    },
    props: {
        // msg: {
        //     type: String,
        //     default: ''
        // },
        // num: {
        //     type: Number,
        //     default: ''
        // },
        // bool: {
        //     type: Boolean,
        //     default: ''
        // },
        // arr: {
        //     type: Array,
        //     default: ''
        // },
        // obj: {
        //     type: Object,
        //     default: ''
        // },
        value: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        myCount() {
            // 通过 store.state 来获取状态对象
            return this.$store.state.count
        }
    },
    methods: {
        sendMsg() {
            this.$emit('listenChildEvent', 'this message is from children')
        },
        confirm() {
            this.$emit('input', false)
        }
    }
}
</script>