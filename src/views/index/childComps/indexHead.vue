

<template>
    <div class="container">
        <el-row type="flex" justify="center" align="middle" :gutter="20" :class="{slide_up:slide}">
            <el-col :span="4">
                <img class="logo" src="@/assets/logo.jpg" >
            </el-col>
            <el-col :span="4" class="name" style="cursor: default;">
                <div >{{name}}</div>
            </el-col>
            <el-col :span="4">
                <div class="home" @click="inHome">首页</div>
            </el-col>
            <el-col  :span="4">
                <div @click = "inWirte">写作</div>
            </el-col>
            <el-col :span="5">
                <div class="about" @click="inAbout">关于本站</div>
            </el-col>
            <el-col :span="2">
                <img src="@/assets/search.png" style="height: 30px;cursor: pointer;">
            </el-col>
             <el-col :span="5">
                <div class="login" @click="inLogin">登录/注册</div>
            </el-col>
            
        </el-row>
    </div>
</template>

<script>


    export default{
        data(){
            return{
                // 站名
                name:"Kkui的个人小站",
                scroll:0,
                slide:0
            }
        },
        watch:{
            scroll(newItem){
                //1是收起 反之
                if(newItem>=100){
                    this.$data.slide = 1
                }else{
                    this.$data.slide = 0
                }
            }
        },

        methods:{
            inHome:function(){
                //跳转首页
                // this.$router.push("")
            },
            inWirte:function(){
                //跳转写作页面
                this.$router.push("/wirte")
                
            },
            inLogin:function(){
                //注册登录页面
                this.$router.push("/login")
                
            },
            inAbout:function(){
                //关于本站页面
                this.$router.push("/about")
            },
            handleScroll(){
                const that = this
                //或者使用document.querySelector('.class或者#id').scrollTop
                that.scroll = document.documentElement.scrollTop||document.body.scrollTop
                that.$data.scroll = that.scroll 
            }

            
        },
        mounted() {
           window.addEventListener('scroll',this.handleScroll)
           
        },
        //销毁,否则跳到别的路由还是会出现
        destroyed(){
            window.removeEventListener('scroll',this.handleScroll)
        }
        
    }
</script>



<style scoped>
*{
    padding: 0;
    margin: 0;
}

.container{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border: none;
    box-shadow: 2px 2px 5px 0 #d1d2d4;
    overflow: hidden;  
    
}
.container:hover{
   
    box-shadow: 2px 2px 10px 0 #d1d2d4;  
}

.container .el-row{
    padding-top: 15px;
    padding-bottom: 5px;
    width: 60%;
    transition: 0.3s ease;
}

/* 收起导航栏 */
.container .slide_up{
    transition: 0.3s ease;
    padding: 0;
}
.container .slide_up .logo{
    height: 45px;
    transition: 0.3s ease;
}
.logo{
    height: 65px;
    border-radius: 15px;
    transition: 0.3s ease;

}
.container .el-col:not(.name) div{  
    cursor: pointer;
    text-align: center;
    color: #50505c;
}


/* 按钮美化 */
.search{
    display: flex;
    justify-content: center;
}
.name{
    font-weight: bold;
}
.el-row .el-col:not(.name) div:hover{
    color: #7badfe;
}
</style>
