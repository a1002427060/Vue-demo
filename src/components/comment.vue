<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要评论的内容(最多120字)" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">第一楼 &nbsp;&nbsp; 用户:大麻子 &nbsp;&nbsp; 发表时间: 2017-11-11</div>
        <div class="cmt-body">6666666666666666666666666666</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
export default {};
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
