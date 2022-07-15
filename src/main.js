import Vue from 'vue';
import axios from './router/axios';
import VueAxios from 'vue-axios';
import App from './App';
import router from './router/router';
import './permission'; // 权限


import store from './store';
import Element from 'element-ui';
import './styles/common.scss';
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'
import AvueFormDesign from '@sscfaith/avue-form-design'
import AvueUeditor from 'avue-plugin-ueditor'
import echarts from 'echarts'
import '../public/util/flexible'
Vue.prototype.$echarts = echarts

Vue.use(router)
Vue.use(VueAxios, axios)
Vue.use(dataV)
Vue.use(AvueFormDesign)
Vue.use(AvueUeditor)



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
