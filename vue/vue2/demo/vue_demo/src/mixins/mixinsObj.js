export const mixinsObj = {
    data() {
        return {
            msg: '我是混入对象',
            name: '张萨比'
        }
    },
    methods: {
        change() {
            console.log( this )
            this.msg = '222222'
        }
    }
}