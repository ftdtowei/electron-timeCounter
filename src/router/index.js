import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Counter from '@/components/counter/Counter'
import Antd from 'ant-design-vue';
import App from '../App';
import 'ant-design-vue/dist/antd.css';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});

Vue.config.productionTip = false;
Vue.use(Router)
Vue.use(Antd);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Counter',
      name: 'Counter',
      component: Counter
    }
  ]
})
