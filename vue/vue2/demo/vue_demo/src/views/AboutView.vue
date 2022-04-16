<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ msg }}</p>
    <button @click="change">切换</button>
    <a_item></a_item>
    <c_item></c_item>
    <!-- <div class="wrap">
      <div class="main"></div>
    </div> -->

    <div class="wrap2">
      <img src="@/assets/1.webp" alt="">
    </div>

    <hr>
    <input type="button" value="add按钮" @click="fn"/>
    <h2>{{num}}</h2>
  </div>
</template>
<script>
import {mixinsObj} from '@/mixins/mixinsObj.js'
import a_item from '@/components/a_item'
import c_item from '@/components/c_item'
import axios from 'axios'
export default {
  name: 'about',
  mixins: [mixinsObj],
  components: {
    a_item,
    c_item
  },
  data() {
    return {
      msg: '我是 about 组件',
      age: 18,
      arr: ['apple', 'banana', 'orange'],
      num: 0,
      t: null
    }
  },
  created() {
    // axios.get('/get_data')
    //   .then(_d => {
    //     console.log(_d)
    //   })
  },
  // provide: {
  //   text: 'provide 注入的内容：我是陈'
  // },
  provide() {
    return {
      text: this.arr
    }
  },
  methods: {
    change2() {
      this.age = 22
    },
    fn() {
      console.log('mmmm')
      // 重置为初始化状态
      clearTimeout(this.t);
      this.t = setTimeout(() => {
        this.num = this.num + 1
      }, 1000)
      
    }
  }
}
</script>
<style scoped>
.wrap {
  width: 200px; height: 200px; background-color: #0f0;
}
.main{
  /* padding: 100%;  */
  padding-bottom: 100%;
  background-color: #f00; opacity: .5;
}
.wrap2 {
  /* padding在垂直方向的百分比，是图片的实际大小的宽高的比例 */
  padding-bottom: 55%;
  /* 让它里面的图片，脱离普通文档流，免得性把wrap2给撑开 */
  position: relative;
}
.wrap2 img {
  /* 让图片相对于，它最近的、且是相对定位的父容器的左上角为原点，进行定位 */
  position: absolute;
  /* 只写宽度，不写高度。让图片默认的等比例缩放 */
  width: 100%;
}



</style>