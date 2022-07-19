<template>
    <el-row type="flex" align="middle" :gutter="20">
        <el-col :span="4" >
            <div class="back" @click="backIndex">
                <img  src="@/assets/back.png" >
                <div>返回首页</div>
            </div>
        </el-col>
        <el-col :span="10">
        </el-col>
        <el-col :span="3">
            <img class="logo" src="@/assets/logo.png" alt="">
        </el-col>
        <el-col :span="3">
            <div>{{userName}}</div>
        </el-col>
        <el-col :span="4">

        </el-col>
    </el-row>
</template>

<script>
    export default{
        data() {
            return {
                userName: 'Kkui',
            };
        },
        methods:{
            backIndex(){
                
                //点击头像回到首页
                this.$router.push("/")
            },
        }
    }
</script>


<style scoped>
*{
    background-color: white;
}
.el-row{
    padding-top: 20px;
    padding-bottom: 10px;
    box-shadow: 3px 3px 8px #d1d2d4;
}
.back{
    width: fit-content;
    margin-left: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    
}
.back img{
    height: 30px;
    border-radius: 10px;
}
.logo{
    margin-left: 50%;
    height: 40px;
    border-radius: 5px;
}
</style>