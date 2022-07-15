/**
 * 全站路由配置
 *
 * meta参数说明
 * keepAlive是否缓冲页面
 * isTab是否加入到tag导航
 * isAuth是否需要授权
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import ViewsRouter from './views/'
Vue.use(VueRouter)
//创建路由
export const createRouter = () => new VueRouter({
  mode: 'history',
  routes: [ ...ViewsRouter]
})
const Router = createRouter()

Router.addRoutes([...ViewsRouter]);

export default Router
