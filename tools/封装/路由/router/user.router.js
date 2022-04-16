export default [
    {
        path: '/reg',
        component: () => import(/*webpackChunkName: 'reg'*/'@/views/users/Reg.vue')
    },
    {
        path: '/login',
        component: () => import(/*webpackChunkName: 'login'*/'@/views/users/Login.vue')
    },
    {
        path: '/forget',
        component: () => import(/*webpackChunkName: 'forget'*/'@/views/users/Forget.vue')
    }
]