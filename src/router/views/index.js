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
                component: () =>
                    import('@/views/module/pandect.vue')
            },
            {
                path: 'enterprise',
                name: '企业图鉴',
                component: () =>
                    import('@/views/module/enterprise.vue')
            },
        ]
    },
    {
        path: '/login',
        name: '登录',
        component: () => import( '@/views/login/login'),
    },

]
