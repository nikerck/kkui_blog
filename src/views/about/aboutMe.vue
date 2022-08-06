<template>
    <div class="container">
        <CommonHeader></CommonHeader>
        <el-container>
            <el-aside width="400px">
                <RunTime></RunTime>
            </el-aside>
            <el-main>
                <AboutMeMes></AboutMeMes>
            </el-main>
        </el-container>
        <CommonFooter></CommonFooter>        
    </div>
</template>

<script>
import CommonHeader from '@/components/common/commonHeader.vue'
import RunTime from '@/components/common/runTime.vue'
import CommonFooter from '@/components/common/commonFooter.vue';
import AboutMeMes from './childComps/aboutMeMes.vue';

    export default{
    data() {
        return {};
    },
    components: { CommonHeader, RunTime, CommonFooter,AboutMeMes  }
}
</script>

<style scoped>
    .container{
        overflow-x: hidden;
    }
    .el-aside{
        width: 300px;
    }
    .RunTime{
        width:300px;
        padding:20px;
        margin: 20px 10px 20px 20px;
    }
    .el-footer{
        padding: 0;
    }
</style>