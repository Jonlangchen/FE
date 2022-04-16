<template>
    <div>
        <h1>parent 页面</h1>
        <!-- <children 
            :msg="parentMsg" 
            :num="parentMsg2"
            :bool="parentBoolean"
            :arr="parentArray"
            :obj="parentObject"
            @listenChildEvent="acceptMsgFromChild"
        ></children> -->
        <p>接收来自子组件的数据：{{childData}}</p>
        <h2>{{xingMing}}
            <hr>
            {{fullName}}
        </h2>
        <button @click="changeName">改变姓名</button>
        <div>
            <strong>{{myCount}}</strong>
            <button @click="change">修改</button>
            <button @click="asyncHandler">异步修改</button>
        </div>
        
        <input type="text" v-model="msg">
        <p>{{msg}}</p>

        <input type="text" :value="val" @input="bind">
        <p>{{val}}</p>

        <children v-model="flag"></children>
        <p>{{flag}}</p>

        <son :cmsg.sync="sonMsg">
            <div>多云，最高气温34度，最低气温28度，微风</div>
        </son>
    </div>
</template>
<script>
import children from '@/views/children'
import son from '@/views/son'
import { mapGetters, mapState, mapMutations } from 'vuex'


export default {
    data() {
        return {
            parentMsg: '我是传给子组件的值',
            parentMsg2: 10,
            parentBoolean: true,
            parentArray: ['apple', 'orange', 'banana'],
            parentObject: {
                name: '张三',
                age: 18
            },
            childData: '',
            msg: '',
            val: '',
            flag: '',
            sonMsg: '我是父组件的人'
        }
    },
    components: {
        children,
        son
    },
    computed: {
        ...mapState(['name', 'xingMing']),
        ...mapGetters(['listLength', 'showName']),
        myCount() {
            // 通过 store.state 来获取状态对象
            return this.$store.state.count
        },
        fullName() {
            return this.$store.getters.fullName
        }
    },
    methods: {
        ...mapMutations(['changeName']),
        acceptMsgFromChild(data) {
            this.childData = data;
        },
        bind() {
            this.val = event.target.value
        },
        change() {
            // 修改状态
            this.$store.commit('addCount', 3)
        },
        asyncHandler() {
            this.$store.dispatch('asyncHandler', 1)
        }
    },
    mounted() {
        console.log(this.name);
        console.log(this.listLength)
        console.log(this.showName)
    }
}
</script>