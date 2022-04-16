import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const files = require.context('./', false, /\.router.js$/);
const routes = [];
// console.dir(files)
files.keys().forEach(key => {
  routes.push(...files(key).default)
});

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
