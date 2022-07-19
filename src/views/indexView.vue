<template>
    <div class="container">
        
        <el-container>
            <!-- 头部 -->
            <el-header>
                <IndexHead></IndexHead>
            </el-header>
            <!-- 中部 -->
            <el-main>
                <IndexBody></IndexBody>
            </el-main>
            <!-- 底部 -->
            <!-- <el-footer>
               
            </el-footer> -->
        </el-container>
    </div>   
</template>

<script>
import IndexHead from '@/components/indexHead.vue'
import IndexBody from '@/components/indexBody.vue'


    export default{
    data() {
        return {
            test: "hello"
        };
    },
    components: { IndexHead ,IndexBody}
}
</script>

<style scoped>

.el-header{
    /* 自带了左右20px */
    padding: 0;
    position: fixed;
    inset: 0;
    bottom: 40px;
    z-index: 999;  
}
.el-main{
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
}

</style>