<style lang="css" src="@/assets/css/wirteView.css" scoped></style>

<template>
    <div class="container">
        <common-header></common-header>
        <div class="body">
            <input placeholder="请输入标题 不要超过12个字" />
            <v-md-editor v-model="text" height="60vh" left-toolbar="undo redo clear | h bold italic strikethrough quote | ul ol table hr | emoji link image code | tip | save" ></v-md-editor>
        </div>
        <div class="bottom-git">
            <div class="fontAmount">共 {{fontAmount}} 字</div>
            <div class="button">
                <el-button round disabled>定时发布</el-button>
                <el-button type="primary" round>发布</el-button>
            </div>
            
        </div>
        
        
    </div>
</template>

<script>
import commonHeader from "@/components/commonHeader.vue"

 

    export default{
        data(){
            return{
                text:'',
                value:"",
                userName:"Kkui",
                fontAmount:0,
            }
        },
        watch:{
            text(next){
                if(next.length!= this.$data.fontAmount){
                    this.$data.fontAmount = next.length
                    
                }
            }
        },
        components:{
            commonHeader
        }, 
        methods:{
            
        }
    }
</script>

