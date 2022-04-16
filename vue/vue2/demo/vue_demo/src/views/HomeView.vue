<template>
  <div class="home">
    <p ref='ref_p'>{{ msg }}</p>
    <input @click='msgFn' type='button' value='按钮' />

    <button @click="isShowColor">切换</button>
    <ul>
      <template v-if="isShow">
        <li v-for="(item, index) in colors" :key="index">{{item}}</li>
      </template>
    </ul>
    <slot_a>
      <!-- <template v-slot:h_2>
        <p>我是前端工程师 2</p>
      </template>

      <template v-slot:h_3>
        <p>我是前端工程师 3</p>
      </template> -->

      <template v-slot:default="props">
        {{props.str.name}}
      </template>
    </slot_a>
  <!-- <button @click="itemName='a_item'">切换aaa页面</button> -->
  <!-- <button @click="itemName='b_item'">切换bbb页面</button> -->
  <!-- <button @click="itemName='c_item'">切换ccc页面</button> -->
  <!-- <component :is="itemName"></component> -->
  <button @click="handle">异步加载ddd页面</button>
  <button @click="handle1">异步加载eee页面</button>
  <button @click="handle2">异步加载fff页面</button>
  <d_item v-if="isTrue"></d_item>
  <e_item v-if="isTrue2"></e_item>
  <f_item v-if="isTrue3"></f_item>
  <button @click="handle3">异步加载ddd页面2</button>
  <button @click="handle4">异步加载eee页面2</button>
  <button @click="handle5">异步加载fff页面2</button>
  <button @click="isTrue7 = !isTrue7">测试异步加载loading组件</button>
  <Async_d_item v-if="isTrue4"></Async_d_item>
  <Async_e_item v-if="isTrue5"></Async_e_item>
  <Async_f_item v-if="isTrue6"></Async_f_item>
  <Async_g_item v-if="isTrue7"></Async_g_item>
  <h_item></h_item>
  <child_slot>
      <template v-slot:n_str="strProps">
          {{strProps.str.job}}
      </template>
      <template v-slot:j_str="strProps">
          {{strProps.str.name}}
      </template>
  </child_slot>
  </div>
</template>

<script>
import imgUrl from '@/assets/logo.png'
import ajaxRequest from '@/utils/ajaxRequest'
// import a_item from '@/components/a_item'
// import b_item from '@/components/b_item'
// import c_item from '@/components/c_item'
import loading_component from '@/components/loading_component'
import error_component from '@/components/error_component'
import h_item from '@/components/h_item'
import child_slot from '@/components/child_slot'
import slot_a from '@/components/slot_a'

// [2] 异步加载方法二
const Async_d_item = () => ({
  component: import('@/components/d_item'),
  loading: loading_component,
  error: error_component,
  // 加载中
  delay: 1100,
  timeout: 500
  // 超时失败
  // delay: 1100,
  // timeout: 500
})

const Async_e_item = () => ({
  component: import('@/components/e_item'),
  loading: loading_component,
  error: error_component,
  delay: 500,
  timeout: 3000
})

const Async_f_item = () => ({
  component: import('@/components/f_item'),
  loading: loading_component,
  error: error_component,
  delay: 220,
  timeout: 3000
})

const Async_g_item = () => ({
  component: import('@/components/g_item'),
  loading: loading_component,
  delay: 300
})

export default {
  name: 'HomeView',
  data() {
    return {
      msg: 'Hello Vue',
      colors: ['red', 'blue', 'green', 'yellow'],
      isShow: true,
      // imgUrl: require("@/assets/logo.png")
      // itemName: 'a_item',
      isTrue: false,
      isTrue2: false,
      isTrue3: false,
      isTrue4: false,
      isTrue5: false,
      isTrue6: false,
      isTrue7: false,
    }
  },
  components: {
    slot_a,
    // a_item,
    // b_item,
    // c_item,
    // [1] 异步加载方法一
    d_item: () => import('@/components/d_item'),
    e_item: () => import('@/components/e_item'),
    f_item: () => import('@/components/f_item'),
    Async_d_item,
    Async_e_item,
    Async_f_item,
    Async_g_item,
    h_item,
    child_slot
  },
  // #region
  methods: {
    handle() {
      this.isTrue = !this.isTrue
    },
    handle1() {
      this.isTrue2 = !this.isTrue2
    },
    handle2() {
      this.isTrue3 = !this.isTrue3
    },
    handle3() {
      this.isTrue4 = !this.isTrue4
    },
    handle4() {
      this.isTrue5 = !this.isTrue5
    },
    handle5() {
      this.isTrue6 = !this.isTrue6
    },
    msgFn() {
      this.msg = 2222
      
      // console.log(this.$refs['ref_p'].innerHTML)


      this.$nextTick(() => {
        console.log(this.$refs['ref_p'].innerHTML)
      })
    },
    isShowColor() {
      this.isShow = !this.isShow
    },
    // #endregion
    asyncLoaderImage(_url) {
      return new Promise((resolve, reject) => {
        let _div= document.createElement('div');
        document.body.appendChild(_div);

        const _img = new Image();
        _img.onload = resolve;
        _img.onerror = reject;
        _img.src = _url;

        _div.appendChild(_img);
      })
    }
    
  },
  created() {
    // var imgUrl = './assets/logo.png';
    // this.asyncLoaderImage(this.imgUrl).then(() => {
    //   console.log('加载成功');
    // }, reason => {
    //   console.log('reason: ' + reason)
    // })

    // this.asyncLoaderImage(imgUrl).then(() => {
    //   console.log('加载成功');
    // }, reason => {
    //   console.error('reason: ' + reason)
    // })

    // axios.get('http://jsonplaceholder.typicode.com/posts')
    //   .then(value => {
    //     console.log(value)
    //   })

    // let _url = 'http://jsonplaceholder.typicode.com/posts';
    // ajaxRequest(_url).then(res => {
    //   console.log(res)
    // }, reason => {
    //   console.log('reason: ' + reason)
    // })

  }
}
</script>
