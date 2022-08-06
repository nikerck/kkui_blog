<template>
    <div class="comment_tempalte">
        <div class="tmeplate">
            <div class="box">
                <img class="user_logo" :src="[logo == null ? default_logo : logo]"/>
                <div class="infromation">
                    <h5 class="infor_name">{{name}}</h5>
                    <i class="infor_date">{{date}}</i>
                </div>
            </div>
            <el-button type="success" size="mini">回复</el-button>
        </div>
        <div class="comment">
            {{text}}
        </div>
    </div>
</template>

<script>
    export default{
        props:{
            logo:{
                type:String,
            },
            name:{
                type:String,
                default:'Kkui'
            },
            date:{
                type:String,
                default:'2020-07-01 21:18'
            },
            text:{
                type:String,
                default:'The sunblock was handed to the girl before practice, but the burned skin was proof she did not apply it.'
            }
        },

        data(){
            return{
                default_logo:"https://api.uomg.com/api/rand.avatar?sort=动漫女&format=images", //头像
                
            }
        }
    }
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
}
.tmeplate{
    padding: 20px 35px 10px 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.box{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.user_logo{
    border-radius: 50%;
    height: 60px;
    width: 60px;
}
.infromation{
    margin-left: 20px;
}
.infromation i{
    color: #4c4948;
    font-size: 14px;
}
.infromation h5{
    font-size: 16px;
}
.el-button{
    height: 30px;
}
.comment{
    font-size: 16px;
    padding-bottom: 10px;
}
</style>