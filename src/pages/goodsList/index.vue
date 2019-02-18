<template>
  <div class="goods-list">
    <div class="goods-items" v-for="item in goodslist" :key="item.id"  @click="golistsInfo(item.id)"> 
      <img :src="item.img_url" alt>
      <h1 class="title">{{item.title}}</h1>
      <div class="body">
        <p class="price">
          <span class="new">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity }}件</span>
        </p>
      </div>
    </div>
     <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pagindex: 1,
      goodslist: []
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      this.$http.get("getgoods?pageindex" + this.pagindex).then(result => {
        if (result.body.status === 0) {
          this.goodslist = this.goodslist.concat(result.body.message);
        }
      });
    },
    getMore(){
        this.pagindex ++
        this.getGoodsList()
    },
    golistsInfo(id){
        this.$router.push("/home/goodsInfo/" +id)
    }
  }
};
</script>
<style lang="less">
.goods-list {
  padding: 7px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .goods-items {
    border: 1px solid #ccc;
    width: 49%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    margin: 5px 0;
    box-shadow: 0 0 8px #ccc;
    .title {
        padding: 5px;
      font-size: 14px;
      font-weight: 900;
    }
    img {
      width: 100%;
    }
    .body {
        background-color: #eee;
        padding: 5px;
        margin: 2px;;
      .price {
        font-size: 16px;
        padding: 5px;
        .new {
          color: red;
          font-weight: 900;
        }
        .old {
            margin-left: 5px;
            color: #aaa;
            font-size: 13px;
            text-decoration: line-through;
        }
      }
      .sell{
          margin-top: 7px;
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          color: #aaa;
      }
    }
  }
}
</style>
