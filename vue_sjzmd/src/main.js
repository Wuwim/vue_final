import Vue from 'vue'
import App from './App.vue'
import router from "@/router"   //@=src的绝对路径

// import axios from "axios"
// axios.defaults.baseURL="http://115.159.160.93:8080";
// Vue.prototype.axios=axios;

Vue.config.productionTip = false
//引入全局组件 并注册
import MyHeader from "@/components/MyHeader.vue"
Vue.component("my-header", MyHeader);//
import MintUI from 'mint-ui'
import {MessageBox} from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI,MessageBox)

import VueResource from 'vue-resource'
Vue.use(VueResource)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
