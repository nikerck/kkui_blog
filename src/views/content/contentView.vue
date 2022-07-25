<template>
    <div class="container">
        <commonHeader class="commonHeader"></commonHeader>
        <div class="body">
            <div class="title">
                <div class="img">
                    <div class="idea-title">
                        <h1 >{{idea_title}}</h1>
                        
                    </div>
                </div>
            </div>
            <v-md-preview class="preview" :text="text"></v-md-preview>
        </div>
    </div>
</template>

<script>
import commonHeader from "@/components/commonHeader.vue"

export default{
    

    data() {
        return {
            idea_title:'三分钟教你如何上班摸鱼',
            text: "这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码这是一段简单代码",
        };
    },
    components:{
        commonHeader
    }


}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
}
.container{
    
    background-image: url('@/assets/bg.svg');
    background-size: cover;
    overflow-x: hidden;
} 


.body{
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
    color: white;
    font-weight: normal;
}

.preview{
    margin-top: 60px;
    background-color: white;
    box-shadow:3px 3px 5px 3px #d1d2d4;
    border-radius: 5px;
    width: 80%;
}
</style>