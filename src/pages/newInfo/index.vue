<template>
    <div class="newInfo-container">
        <h3 class="title">{{newsInfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{newsInfo.add_time|dataFormat}}</span>
            <span>点击量{{newsInfo.click}}</span>
        </p>
        <hr>
        <div class="content" v-html = "newsInfo.content">

        </div>
        <comment></comment>
    </div>
</template>
<script>
export default {
    data(){
        return{
            id:this.$route.params.id,
            newsInfo:[]
        }
    },
    created(){
        this.getnewsInfo()
    },
    methods:{
        getnewsInfo(){
            this.$http.get("getnew/"+this.id).then(result =>{
                this.newsInfo = result.body.message[0]
                
            })
        }
    }
}

</script>
<style lang="less" >
    .newInfo-container{
         padding: 0 5px;
        .title{
            text-align: center;
            font-size: 16px;
            margin: 15px 0;
            color: red;
           
        }
        .subtitle{
            font-size: 14px;
            display: flex;
            justify-content: space-between;
            color: skyblue;
            
        }
        .content{
            margin-top: 5px;
            img{
                width:100%;
            }
        }
    }
</style>
