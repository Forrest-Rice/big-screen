/*$$
 $ @Author: By
 $ @Date: 2022-07-18 11:15:49
 $ @LastEditTime: 2022-07-25 14:40:41
 $ @LastEditors: By
 $ @Description:路由
 $ @FilePath: \big-screen\src\router\views\index.js
 $ @可以输入预定的版权声明、个性签名、空行等
 $*/

export default [
    {
        path: '/',
        name: '主页',
        redirect: '/login'
    },
    {
        path: '/home',
        name: '首页',
        component: () => import('@/views/home'),
        children: [
            {
                path: 'pandect',
                name: '园区总览',
                component: () => import('@/views/module/pandect.vue')
            },
            {
                path: 'enterprise',
                name: '企业图鉴',
                component: () => import('@/views/module/enterprise.vue')
            }, {
                path: 'doubleCarbon',
                name: '双碳检测',
                component: () => import('@/views/module/doubleCarbon.vue')
            },
        ]
    },
    {
        path: '/login',
        name: '登录',
        component: () => import('@/views/login/login'),
    },

]
