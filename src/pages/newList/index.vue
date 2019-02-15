<template>
  <div id="newList-container">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
        <routerLink :to="'/home/newInfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
              <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
                <span>发表时间:{{item.add_time | dataFormat()}}</span>
                <span>点击:{{item.click}}</span>
            </p>
          </div>
        </routerLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newList: []
    };
  },
  created() {
    this.getNewList();
  },
  methods: {
    getNewList() {
      this.$http.get("getnewslist").then(result => {


        this.newList = result.body.message;
      });
    }
  }
};
</script>
<style lang="less" scoped>
    #newList-container{
        h1{
            font-size: 14px;
        }
        img{
            width: 100%
        }
        .mui-ellipsis{
            display: flex;
            justify-content: space-between;
            margin-top: 12px;
            span{
                font-size:12px;
                color: blue
            }
        }
    }
</style>
