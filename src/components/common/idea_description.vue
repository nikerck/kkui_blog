<template>
    <div class="container">
        <div class="box">
            <div>
                <span class="key">文章作者:</span>
                <span><a :href="home_link"> {{auther}}</a></span>
            </div>
             <div>
                <span class="key">文章链接:</span>
                <span><a target="_blank" :href="link"> {{link}}</a></span>
            </div>
             <div>
                <span class="key">版权声明:</span>
                <span> 本博客所有文章除特别声明外，均采用 <a target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> 许可协议。转载请注明来自 <a :href="home_link">Kkui</a> 的小站 !</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                auther:"Kkui",
                link:"https://www.baidu.com",     
                home_link:""  
            }
        }
    }
</script>

<style scoped>
.container{
    border: 1px solid #d1d2d4;
    border-radius: 3px;
    padding: 0px 16px;
}

.box{
    border: 1px solid var(#eeeeee);
}
.box .key{
    
    color: #7badfe;
    font-weight: bold;
}
.box a{
    color: #99a9bf;
}
.box span{
    font-size: 14px;
}
.box div{
    margin: 10px 0px;
}

</style>