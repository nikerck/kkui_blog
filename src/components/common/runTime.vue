<template>
    <div class="RunTime">
        <div class="box">
            <span class="header"> 
            <div class="icon-size">
                <div class="el-icon-data-line"></div>
            </div>
            <div class="title">网站资讯</div>
        </span>
        <div class="box">
            <div class="flexs">
                <div>文章总数:</div>
                <div>3篇</div>
            </div>
            <div class="flexs">
                <div>注册用户数：</div>
                <div>2人</div>
            </div>
            <div class="flexs">
                <div>本站访问量:</div>
                <div>20</div>
            </div>
            <div class="flexs">
                <div>本站已运行时间:</div>
                <div>3天</div>
            </div>
            <div class="flexs">
                <div>最后更新时间:</div>
                <div>2020-07-20</div>
            </div>
        </div> 
        </div> 
    </div>
</template>

<script>

</script>

<style scoped>
.flexs{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}


.RunTime{
    border-radius: 8px;
    box-shadow:3px 3px 5px 3px #d1d2d4;
    display: flex;
    justify-content: center;
}
.RunTime:hover{
    box-shadow:3px 3px 8px 3px #d1d2d4;
}
.box{
    width: 100%;
}

.RunTime div{
    color: #4c4849;
}
.header{
    display: flex;
    align-items: center;
    
}
.icon-size{
    font-size: 30px;
}
.title{
    font-size: 16px;
    margin-left: 10px;
}
.box{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
   
}
</style>