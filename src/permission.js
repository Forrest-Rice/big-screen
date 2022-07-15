/**
 * 全站权限配置
 *
 */
import router from './router/router'
import axios from './router/axios'
import  store from './store'
import { getToken } from '@/util/auth'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
NProgress.configure({ showSpinner: false });
router.beforeEach((to, from, next) => {
        next()
})
