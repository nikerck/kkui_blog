<template>
    <div class="container">
        <div class="edit_box">
            <div class="information">
                <input type="text" placeholder="昵称"/>
                <input type="email" placeholder="邮箱"/>
            </div>
            <textarea placeholder="想说点什么呢" class="comment_area"></textarea>
            <div class="vrow">
                <div class="emoji">Emoji表情</div>
                <el-button type="primary">发送</el-button>
            </div>
            <div class="vemojis" >
                <div class="vemoji" v-for="emoji in emojis" :key="emoji">{{emoji}}</div>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default{
        data(){
            return{
                emojis:[
                '😀', '😄', '😅', '🤣', '😂', '😉', '😊', '😍', '😘', '😜',
                '😝', '😏', '😒', '🙄', '😔', '😴', '😷', '🤮', '🥵', '😎',
                '😮', '😰', '😭', '😱', '😩', '😡', '💀', '👽', '🤓', '🥳',
                '😺', '😹', '😻', '🤚', '💩', '👍', '👎', '👏', '🙏', '💪'
                ],
            }
        }
    }
</script>

<style scoped>
.container{
    
}
.edit_box{
    /* border: 2px solid #d1d2d4; */
    border: 1px solid #d1d2d4;
    border-radius: 3px;
    padding: 10px 16px;
}
.information{
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 10px;
}
.information input{
    height: 32px;
    width:50%;
    padding: 10px 5px;
    font-size: 14px;

    outline: none;
    border: none;
    border-bottom: #d1d2d4 1px dashed;
}
.information input:focus{
    outline: none;
    border-bottom:#ff7242 1px dashed;
}
.comment_area{
    min-width: 100%;
    max-width: 100%;
    min-height: 110px;
    max-height: 300px;
    outline: none;
    border: none;
    font-size:14px;
}   
.vrow{
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
}
.vrow .emoji{
    border: 1px solid #d1d2d4;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    display: flex;
    align-items: center;
    padding: 0 5px;
    font-size: 14px;
}
.vrow .el-button{
    width: 100px;
}
.vemojis{
    width: 100%;
    max-height: 145px;
    margin-top: 20px;
    display: flex;
    
    flex-direction: row;
    flex-wrap: wrap;
}
.vemoji{
    width: 26px;
    height: 26px;
    cursor:pointer;
}
</style>