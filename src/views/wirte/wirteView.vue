<template>
    <div class="container">
        <common-header></common-header>
        <div class="body">
            <input placeholder="请输入标题 不要超过12个字" />
            <div id="vditor" style="font-size: 16px;"></div>
        </div>
        <div class="bottom-git">
            <div class="fontAmount">共 {{fontAmount}} 字</div>
            <div class="button">
                <el-button round disabled>定时发布</el-button>
                <el-button type="primary" round @click="test">发布</el-button>
            </div>
            
        </div>
        
        
    </div>
</template>

<script>
import Vditor from "vditor"
import "vditor/dist/index.css"


import commonHeader from "@/components/common/commonHeader.vue"

    export default{
        data(){
            return{
                contentEditor:{},
                value:"",
                userName:"Kkui",
                fontAmount:0,
            }
        },
        watch:{
            
        },

        components:{
            commonHeader
        }, 
        mounted(){
            const that = this 

            this.contentEditor = new Vditor("vditor",{
            counter:{
                "enable": true,
                after(count){
                    that.fontAmount = count
                }
                },
            height:360,
            toolbar: [
                "emoji",
                "headings",
                "bold",
                "italic",
                "strike",
                "link",
                "|",
                "list",
                "ordered-list",
                "check",
                "outdent",
                "indent",
                "|",
                "quote",
                "line",
                "code",
                "inline-code",
                "insert-before",
                "insert-after",
                "|",
                "upload",
                "table",
                "|",
                "undo",
                "redo",
                "|",
                "fullscreen",
                "edit-mode",
                "outline",
                {
                name: "more",
                toolbar: [
                    "both",
                    "code-theme",
                    "content-theme",
                    "export",
                    "preview",
                    "help",
                ],
                },
            ],
            });
        },
        
        
        methods:{
            test(){
               console.log(this.contentEditor.getValue()); 
            }
        }
    }
</script>

<style scoped>
.container{
    padding: 0;
    margin: 0;
    height: 100vh;
    
    overflow: hidden;

    background-color: white;
}
.body{
    width: 100%;
    height: 100%;
}

.body input{
    width: 600px;
    min-width: 400px;
    height: 40px;
    border: none;
    border-radius: 15px;
    
    border: 2px solid #d1d2d4;
    box-shadow:0 0 5px 0 #d1d2d4;
    outline: none;
    
    

    color: #606266;
    font-size: 23px;
    display: block;

    padding:15px;
    margin-top: 30px;
    margin-left: 50%;
    margin-bottom: 30px;
    transform: translate(-50%);
    
}
.body input:-ms-input-placeholder{
    text-align: center;
}
.body input::-webkit-input-placeholder{
    text-align: center;
}




.bottom-git{
    background-color: white;
    border-top: 1px solid #f5f6f7;
    box-shadow: 3px 3px 8px #d1d2d4;
    /* 编辑器全屏为90 */
    z-index: 89;
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: space-around;
    
}

::v-deep .vditor-counter{
    display: none;
}
</style>