<template>
    <div>
        <label>
            <input type="text" v-model="newValue" /> 你的名字：{{value}}
        </label>

        <h2 @click="change">{{cmsg}}</h2>

        <h3>今天的天气状况：</h3>
        <slot></slot>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    props: {
        value: {
            type: String
        },
        // 使用props接受父组件cmsg.sync传过来的值
        cmsg: {
            type: String
        }
    },
    computed: {
        // ...mapState(['name']),
        newValue: {
            get: function() {
                return this.value
            },
            set: function(value) {
                this.$emit('input', value)
            }
        }
    },
    methods: {
        change() {
            //  改父组件的值，可以使用$emit('update:(sync过来的值)', { })
            this.$emit('update:cmsg','.sync的方法子改父')
        }
    },
    // mounted() {
    //     console.log(this.name);
    // }
}
</script>