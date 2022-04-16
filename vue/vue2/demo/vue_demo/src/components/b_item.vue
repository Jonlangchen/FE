<template>
    <div>
        <h1> {{ msg }} </h1>
    </div>
</template>
<script>

export default {
    name: 'b_item',
    inject: ['text'],
    data() {
        return {
            msg: 'b页面' + this.text
        }
    }
}
</script>