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
            <el-footer>
                <commonFooter></commonFooter>
            </el-footer>
        </el-container>
    </div>   
</template>

<script>
import IndexHead from '@/views/index/childComps/indexHead.vue'
import IndexBody from '@/views/index/childComps/indexBody.vue'
import commonFooter from '@/components/common/commonFooter.vue'



    export default{
    data() {
        return {
            test: "hello"
        };
    },
    components: { IndexHead, IndexBody, commonFooter }
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
.el-footer{
    padding: 0;
}

</style>