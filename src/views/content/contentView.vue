<template>
    <div class="container">
        <commonHeader class="commonHeader"></commonHeader>
        <div class="body">
            <div class="title">
                <div class="img">
                    <div class="idea-title">
                        <h1 >{{idea_title}}</h1>
                        <div class="idea_information">
                            <p>
                             <i class="el-icon-date"></i> 发表时间 {{idea_date}} |
                             <i class="el-icon-refresh"></i> 更新于 {{idea_upDate}}
                             </p>
                            <p>
                             <i class="el-icon-document"></i> 字数总计 {{idea_fontMount}} |
                             <i class="el-icon-reading"></i> 阅读量 {{idea_readMout}} |
                             <i class="el-icon-s-comment"></i> 评论数 {{idea_commentMount}}
                            </p>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="preview">
                <v-md-preview :text="idea_text"></v-md-preview>
                <Idea_description class="description"></Idea_description>
            </div>
            
            
        </div>
        <CommonFooter></CommonFooter>
    </div>
</template>

<script>
import commonHeader from "@/components/common/commonHeader.vue"
import CommonFooter from "@/components/common/commonFooter.vue";
import Idea_description from "@/components/common/idea_description.vue";

export default{
    

    data() {
        return {
            idea_title:'三分钟教你如何上班摸鱼',
            idea_date:"2022-7-25",
            idea_upDate:"2022-7-25",
            idea_fontMount:96,
            idea_readMout:0,
            idea_commentMount:0,
            idea_text: "这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码",
        };
    },
    components:{
    commonHeader,
    CommonFooter,
    Idea_description
}


}
</script>

<style scoped>
.container{
    overflow-x: hidden;
} 


.body{
    background-image: url('@/assets/bg.svg');
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.title{
    width: 100%;
}
.title .img{
    width: 100%;
    height: 400px;
    background-image: url('@/assets/bg.jpg');
    background-size: cover;
}
.title .img::after{
    
    content: ' ';
    position: absolute;
    top: 74px;
    left: 0;
    
    width: 100%;
    height: 400px;
    z-index: 1;
    background-color: rgba(0,0,0,0.5);
}
.title .idea-title{
    position: absolute;
    z-index: 2;
    top: 35%;
    left: 50%;
    transform: translateX(-50%);
}
.title .idea-title h1{
    font-size: 35px;
    color: white;
    font-weight: normal;
}
.idea_information{
    margin-top: 20px;
    text-align: center;
}
.title .idea-title .idea_information p{
    font-size:15px;
    margin-top: 10px;
    color: #eeeeee;
    
}

.preview{
    margin-top: 60px;
    margin-bottom: 40px;
    background-color: white;
    box-shadow:3px 3px 5px 3px #d1d2d4;
    border-radius: 5px;
    width: 80%;
}

.description{
    
    margin:16px 32px 32px;
    
}
</style>