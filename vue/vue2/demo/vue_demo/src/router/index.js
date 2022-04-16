import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import keep_a from '../views/keep_a'
import keep_b from '../views/keep_b'
import g_item from '@/components/g_item'
import e_item from '@/components/e_item'
import parent from '@/views/parent'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/keepA',
    name: 'keepA',
    component: keep_a
  },
  {
    path: '/keepB',
    name: 'keepB',
    component: keep_b,
    meta: {
      keepAlive: true // 需要被缓存
    }
  },
  {
    path: '/gItem',
    name: 'gItem',
    component: g_item,
    // beforeEnter: (to, from, next) => {
    //   next(false)
    // }
    beforeEnter: (to, from, next) => {
      console.log('gItem路由独享的守卫')
      next()
    }
  },
  {
    path: '/eItem',
    name: 'eItem',
    component: e_item
  }
  ,
  {
    path: '/parent',
    name: 'parent',
    component: parent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局的
// router.beforeEach((to, from, next) => {
//   next(true);
// })

router.beforeEach((to, from, next) => {
  let _token = localStorage.getItem('token');

  if(_token === '') {
    next()
    // console.log('xxxxx')
  } else if (_token === '111') {
    next()
    next('/eItem')
  } else if (_token === '222') {
    next()
    next('/gItem')
  }
})
// 全局后置钩子
router.afterEach((to, from) => {
  console.log('成功跳转到：' + to.name)
})

export default router
