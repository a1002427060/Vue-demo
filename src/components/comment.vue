<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要评论的内容(最多120字)" maxlength="120" v-model="commentContent"></textarea>
    <mt-button type="primary" size="large" @click="postComments">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,index) in comments" :key="index"> 
        <div class="cmt-title">第{{index+1}}楼 &nbsp;&nbsp; 用户:{{item.user_name}} &nbsp;&nbsp; 发表时间:{{item.add_time | dataFormat()}}</div>
        <div class="cmt-body">{{item.content}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data(){
    return {
      pageIndex :1,
      comments:[],
      commentContent:""

    }
  },
  created(){
    this.getComments()
  },
  methods:{
    getComments(){
      this.$http.get("getcomments/" + this.id + "?pageindex=" + this.pageIndex).then(result =>{
        if(result.body.status === 0){
          // console.log(result);  
          this.comments = this.comments.concat(result.body.message)
        }
      }) 
    },
    getMore(){
      this.pageIndex ++
      this.getComments()
    },
    postComments(){
      if(this.commentContent.trim().length === 0) return Toast("评论内容不能为空")
      this.$http.post("postcomment/"+this.id,{content:this.commentContent}).then(result =>{
        Toast(result.body.message);
        this.comments = []
        this.pageIndex = 1
        this.getComments()
        this.commentContent=""
      });
    }
  },
  props:["id"]
};
</script>
<style lang="less" scoped>
.cmt-container {
  margin-top: 10px;
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list {
    margin: 5px 0;
    .cmt-title {
      padding-left: 5px;
      border-radius: 3%;
      font-size: 14px;
      line-height: 30px;
      background-color: #ccc;
    }
    .cmt-body {
      font-size: 14px;
      line-height: 30px;
      text-indent: 2em;
    }
  }
}
</style>
