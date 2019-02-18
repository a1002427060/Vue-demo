// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import '@/style/common.css'
import VueResource from 'vue-resource'
import comment from './components/comment.vue'
import '@/lib/swiper/css/swiper.css'
import swiper from './components/swiper.vue'
Vue.use(VueResource)
// 导入扩展图标样式
Vue.http.options.root = "http://www.lovegf.cn:8899/api/"
import './lib/mui/css/icons-extra.css'

Vue.use(Mint)
import moment from "moment"

Vue.filter("dataFormat",function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
  return moment(dataStr).format(pattern)
})
Vue.component("comment",comment)
Vue.component("swiper",swiper)
Vue.config.productionTip = false
import VuePreview from 'vue-pic-preview'
Vue.use(VuePreview)
import Vuex from 'vuex'
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
