<template>
  <div class="goods-info">
    <!-- 小球动画动画区域 -->
       <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :banners="banners"></swiper>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">{{ goodsinfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：<del>￥{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{ goodsinfo.sell_price }}</span>
          </p>
         <div class="numBox">
             <span class="title" > 购买数量:</span>
             <input type="button" value="-" 
             @click="buyCount>=2 && buyCount--"
             :disabled="buyCount == 1">
             <input type="number" v-model="buyCount" @change="filterMaxCount">
             <input type="button" value="+"
             @click="buyCount < goodsinfo.stock_quantity && buyCount++"
             :disabled="buyCount ==goodsinfo.stock_quantity ">

         </div>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small"  @click="addToShopCar">加入购物车</mt-button>
      
          </p>
        </div>
      </div>
    </div>
     <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{ goodsinfo.goods_no }}</p>
          <p>库存情况：{{ goodsinfo.stock_quantity }}件</p>
          <p>上架时间：{{ goodsinfo.add_time | dataFormat }}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
  
</template> 
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      banners: [],
      goodsinfo:{},
      buyCount :1,
      ballFlag:false
    };
  },
  created() {
    this.getBanners();
    this.getGoodsInfo()
  },
  methods: {
    getBanners() {
      this.$http.get("getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.banners = result.body.message;
        }
      });
    },
    getGoodsInfo() {
      this.$http.get("goods/getinfo/" + this.id).then(result => {
          if(result.body.status ===0 ){
              console.log(result);
              
              this.goodsinfo = result.body.message[0]
          }
      });
    },
    filterMaxCount(){
        if(this.buyCount >this.goodsinfo.stock_quantity){
            this.buyCount =this.goodsinfo.stock_quantity
        }
          if(this.buyCount <1){
            this.buyCount =1
        }
    },
    addToShopCar(){
      this.ballFlag = !this.ballFlag
      this.$store.commit("addToCar",{
        id:this.id,
        count:this.buyCount,
        price:this.goodsinfo.sell_price,
        selected:true
      })
    },
    beforeEnter: (el) => {
      el.style.transform = "translate(0,0)"
    },
    enter(el,done){
      el.offsetWidth;
      const ballPosition = this.$refs.ball.getBoundingClientRect()
      const badgePosition = document.getElementById("badge").getBoundingClientRect()
      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;
      el.style.transform = `translate(${xDist}px,${yDist}px`
      el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
      done();
    },
    afterEnter(el){
      this.ballFlag = !this.ballFlag
    },


  }
};
</script>
<style lang="less" scoped>
.goods-info {
  background-color: #eee;
  overflow: hidden;
  .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
  .numBox{
      display: flex;
      align-items: center;
      margin-bottom: 10px;
        .title{
            margin-right:5px;
        }
      input{
          width: 35px;
          height: 35px;
          padding: 0;
          margin: 0;
          margin: 1px;
           text-align: center;
         &[type="number"]{
          font-size: 12px;
      }
      }
     
  }

  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }
  .mui-card-content-inner{
      p{
          line-height: 30px;
      }
  }

  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    top: 390px;
    left: 146px;
  }

}

</style>
