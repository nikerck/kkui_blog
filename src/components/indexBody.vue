<style lang="css" src="@/assets/css/indexBody.css" scoped></style>

<template>
    <div class="container">
        <div class="box" v-for="(blogData,index) in blogDatas" :key="index" >
            <div class="box-head" >
                {{blogData.title}}
            </div>
            <div class="box-body" >
                <div> <!-- 限制长度79个字符 多余用省略号代替 -->
                    {{blogData.body}}
                </div>
                <div class="img" v-if="blogData.img != ''" style="cursor: pointer;">
                    <img :src="blogData.img" >
                </div>
            </div>
            <div class="box-bottom" >
                {{blogData.time}} {{blogData.auther}}
            </div>
        </div>
    </div>
</template>


<script>
    export default{
        data(){
            return{
                //实例数据
                blogDatas:[
                    {
                        title:"第一篇blog记录",
                        body:"我觉得这是一个好开始，至少不是坏的开始，我觉得这是一个好开始，至少不是坏的开始，我觉得这是一个好开始，至少不是坏的开始，我觉得这是一个好开始，至少不是坏的开始",
                        img:"",//url链接 所有图片在后端以一个新的api访问
                        time:"2022.7.2",
                        auther:"不知名路人",
                    },
                    {
                        title:"关于如何摆",
                        body:"我觉得这是一个好开始，至少不是坏的开始，我觉得这是一个好开始，至少不是坏的开始，我觉得这是一个好开始，至少不是坏的开始，我觉得这是一个好开始，至少不是坏的开始",
                        img:"https://ts1.cn.mm.bing.net/th/id/R-C.140982fb92ba73ec746b0fb24439c094?rik=NSgfupbFWd1HNw&riu=http%3a%2f%2fwww.51wendang.com%2fpic%2fad8d861180e68ca5d04e0d08%2f2-810-jpg_6-1080-0-0-1080.jpg&ehk=XNZ92zEPfW0l224Sf2FtnkFkINH5Ac5c0p44y3itrrg%3d&risl=&pid=ImgRaw&r=0",//url链接 所有图片在后端以一个新的api访问
                        time:"2022.7.2",
                        auther:"不知名路人",
                    },
                     {
                        title:"第一篇blog记录",
                        body:"我觉得这是一个好开始，至少不是坏的开始，我觉得这是一个好开始，至少不是坏的开始，我觉得这是一个好开始，至少不是坏的开始，我觉得这是一个好开始，至少不是坏的开始",
                        img:"",//url链接 所有图片在后端以一个新的api访问
                        time:"2022.7.2",
                        auther:"不知名路人",
                    }
                
                ]
            }
        },
        metheds:{
            
        }

    }

</script>



<style scoped>
.container{
    padding-top: 80px;

    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: hsla(0,0%,98%,.8); */
    background-image: url("@/assets/bg.svg");
    background-size: cover;
}
.box{
    max-width: 600px;
    min-width: 500px;
    width: 60%;
    box-shadow:3px 3px 5px 3px #d1d2d4;
    border-radius: 5px;

    margin-top: 20px;
    margin-bottom: 10px;
    padding: 20px;

    background-color: white;
    overflow: hidden;
    
    transition: 0.2s ease;
    animation-name: drop;
    animation-duration: 1s;
}
.box:hover{
    overflow: hidden;
    transform: scaleX(1.015) scaleY(1.015);
    box-shadow:3px 3px 10px 3px #d1d2d4
}
.box-head{
    font-size: 22px;
    cursor: pointer;
}
.box-head:hover{
    color: #7badfe;
}

.box-body{
    color: #50505c;
    padding-top: 20px;
    padding-bottom: 10px;
    display: flex;
    
    justify-content: center;
    
}
.box-body,.box-bottom{
    cursor: default;
}
.box-body img, .box-body .img{
    padding: 0px 8px;
    width: 100%;
    object-fit: cover;
}


@keyframes drop{
    0%{
        margin-top: 0px;
    }
    100%{
        margin-top: 20px;
    }
}
</style>