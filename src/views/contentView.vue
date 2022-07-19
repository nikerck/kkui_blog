<style src="@/assets/css/contentView.css" scoped></style>

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