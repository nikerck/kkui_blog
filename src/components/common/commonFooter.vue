<template>
    <div class="container">
        <div class="auhter hg">{{date_auther}}</div>
        <div class="framework-info hg">{{technology_list}}</div>
        <div class="web-record hg">{{record}}</div>
        <h5>{{copyright}}</h5>
        
    </div>
</template>

<script>
    export default{
        data(){
            return{
                date_auther:"@2022 By Kkui",
                technology_list:"框架 Vue | 主题 element-ui | 后端 SpringBoot",
                record:"萌 ICP 备 20200000 号",
                copyright:"Copyright Kkui Inc. 👾本站保留一切权力"
            }
        }
    }
</script>

<style scoped>
.container{
    height: 250px;
    background-color: #7badfe;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.container .hg{
    height: 28px;
    font-size: 14px;
    color: #eeeeee;
}
.container  h5{
    margin-top: 20px;
}


</style>