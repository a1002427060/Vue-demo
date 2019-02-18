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
let store  = new Vuex.Store({
    state:{
      car:[]
    },
    mutations:{
      addToCar(state,goodsInfo){
        let index = state.car.findIndex(item=> item.id === goodsInfo.id)
        if(index === -1) {
          state.car.push(goodsInfo)
        }else{
          state.car[index].count += parseInt(goodsInfo.count)
        }
      }
    },
    getters:{
      totalCount(state){
        let sum = 0
        state.car.forEach(item => sum += item.count)
        return sum
      }
    }
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

