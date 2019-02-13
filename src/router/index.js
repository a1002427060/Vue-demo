import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from "@/pages/HomeContainer"
import MemberContainer from "@/pages/MemberContainer"
import ShopcarContainer from "@/pages/ShopcarContainer"
import SearchContainer from "@/pages/SearchContainer"
import newList from "@/pages/newList"
import newInfo from "@/pages/newInfo"

Vue.use(Router)

export default new Router({
  routes: [
   {path: '/',redirect:"/home"},
   {path:'/home',component:HomeContainer},
   {path:'/member',component:MemberContainer},
   {path:'/shopcar',component:ShopcarContainer},
   {path:'/search',component:SearchContainer},
   {path:'/home/newlist',component:newList},
   {path:'/home/newInfo/:id',component:newInfo},
  ],
  linkActiveClass:"mui-active"
})
