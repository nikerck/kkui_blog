<style lang="css" src="@/assets/css/wirteView.css" scoped></style>

<template>
    <div class="container">
        <common-header></common-header>
        <div class="body">
            <input placeholder="请输入标题 不要超过12个字" />
            <div id="vditor"></div>
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
import Vditor from "vditor"
import "vditor/dist/index.css"


import commonHeader from "@/components/commonHeader.vue"

    export default{
        data(){
            return{
                contentEditor:"",
                value:"",
                userName:"Kkui",
                fontAmount:0,
            }
        },
        components:{
            commonHeader
        }, 
        mounted(){
            this.contentEditor = new Vditor("vditor",{
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
            toolbarConfig:{
                pin:true
            },
            hint:{

            },
            cache:{
                enable:false
            },
            after:()=>{
                this.contentEditor.setValue("hello,Welcome to share your thoughts")
            }
            })
        },
        methods:{
            
        }
    }
</script>

