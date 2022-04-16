<template>
    <div>
        <h3>{{ msg }}</h3>
        
        <h1>
            <slot :str="strData"
                name="n_str"
            >{{ strData.job}}</slot>
        </h1>

        <h1>
            <slot :str="strData"
                name="j_str"
            >{{ strData.name}}</slot>
        </h1>
    </div>
</template>

<script>
    export default {
        name: 'child_slot',
        data() {
            return {
                msg: '我是子组件',
                strData: {
                    name: '张三',
                    job: '我是工程师'
                }
            }
        }
    }
</script>