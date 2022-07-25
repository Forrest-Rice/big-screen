
import Vue from 'vue';
import VueAxios from 'vue-axios';
import App from './App';
import './permission'; // 权限
import axios from './router/axios';
import router from './router/router';


import store from './store';
import './styles/common.scss';
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view';
import AvueFormDesign from '@sscfaith/avue-form-design';
import AvueUeditor from 'avue-plugin-ueditor';
import * as eCharts from 'echarts';
import '../public/util/flexible';
Vue.prototype.$eCharts = eCharts

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
