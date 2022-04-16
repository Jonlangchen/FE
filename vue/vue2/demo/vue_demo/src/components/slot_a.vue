<template>
    <div>
        <h1>slot 的应用</h1>
        
        <!-- <h2>
            <slot name="h_2"></slot>
        </h2>
        <h3>
            <slot name="h_3"></slot>
        </h3> -->

        <h2>
            <slot :str="obj">{{obj.name}}</slot>
        </h2>
    </div>
</template>
<script>
export default {
    data() {
        return {
            obj: {
                name: '张三',
                age: 18
            }
        }
    }
}
</script>