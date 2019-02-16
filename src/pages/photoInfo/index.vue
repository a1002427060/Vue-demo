<template>
  <div class="photo-info">
    <h3>{{ photoinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoinfo.add_time | dataFormat }}</span>
      <span>点击：{{ photoinfo.click }}次</span>
    </p>

    <hr>
    <div class="content" v-html="photoinfo.content"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id, 
      photoinfo: {}
    };
  },
  created() {
      this.getPhotoInfo()
  },
  methods: {
    getPhotoInfo() {
      this.$http.get("getimageInfo/" + this.id).then(result => {
        if (result.body.status === 0) {
            console.log(result);
            
          this.photoinfo = result.body.message[0];
        }
      })
    },
    getThunbs(){
        this.$http.get("get")
    }
  }
};
</script>
<style lang="less" scoped>
</style>

