import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index.vue'
import HomeContainer from "@/pages/HomeContainer"
import MemberContainer from "@/pages/MemberContainer"
import ShopcarContainer from "@/pages/ShopcarContainer"
import SearchContainer from "@/pages/SearchContainer"
Vue.use(Router)

export default new Router({
  routes: [
   {path: '/',redirect:"/home"},
   {path:'/home',component:HomeContainer},
   {path:'/member',component:MemberContainer},
   {path:'/shopcar',component:ShopcarContainer},
   {path:'/search',component:SearchContainer},
  ],
  linkActiveClass:"mui-active"
})
