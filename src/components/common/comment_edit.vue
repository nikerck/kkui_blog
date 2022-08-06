<template>
    <div class="container">
        <div class="comment-head">
            <div class="commentIcon">
                <i class="el-icon-s-comment"></i>
            </div>
            <span>评论</span>
        </div>
        <div class="edit_box">
            <div class="information">
                <input type="text" placeholder="昵称"/>
                <input type="email" placeholder="邮箱"/>
            </div>
            <textarea v-model="text" placeholder="想说点什么呢" class="comment_area"></textarea>
            <div class="vrow">
                <button :class="[vemoji_btn == false ? 'emoji' : 'emoji select']" @click="switchEmojis">Emoji表情</button>
                <el-button type="primary">发送</el-button>
            </div>
            <div :class="[vemoji_btn == false? 'vemojis bg' : 'vemojis']" >
                <div class="vemoji" v-for="emoji in emojis" :key="emoji" @click="addEmoji({emoji})" >{{emoji}}</div>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default{
        data(){
            return{
                text:"",

                emojis:[
                '😀','😃','😄','😁','😆' ,
                '😅','😂','🤣','☺️' ,'😊' ,
                '😇','🙂','🙃','😉','😌' ,
                '😍','🥰','😘','😗','😙' ,
                '😚','😋','😛','😝','😜' ,
                '🤪','🤨','🧐','🤓','😎' ,
                '🤩','🥳','😏','😒' ,
                '😞','😔','😟','😕','🙁' ,
                '☹️','😣','😖','😫','😩' ,
                '🥺','😢','😭','😤','😠' ,
                '😡','🤬','🤯','😳','🥵' ,
                '🥶','😱','😨','😰','😥' ,
                '😓','🤗','🤔','🤭','🤫' ,
                '🤥','😶','😐','😑','😬' ,
                '🙄','😯','😦','😧','😮' ,
                '😲','🥱','😴','🤤','😪' ,
                '😵','🤐','🥴','🤢','🤮' ,
                '🤧','😷','🤒','🤕','🤑' ,
                '🤠','😈','👿','👹','👺' ,
                '🤡','💩','👻','💀','☠️' ,
                '👽','👾','🤖','🎃','😺' ,
                '😸','😹','😻','😼','😽' ,
                '🙀','😿','😾',   

                '👋','🤚','🖐','✋','🖖', 
                '👌', '🤏','✌️','🤞', '🤟',
                '🤘','🤙','👈','👉','👆', 
                '🖕','👇','☝️','👍','👎', 
                '✊','👊','🤛','🤜','👏', 
                '🙌','👐','🤲','🤝','🙏', 
                '✍️','💅','🤳','💪','🦾', 
                '🦵','🦿','🦶','👣','👂', '🦻' ,
                '👃','🧠','🦷', '🦴' ,
                '👀','👁','👅','👄','💋', '🩸',
                 ],
                vemoji_btn:false    //表情框是否开启  
            }
        },
        methods:{
            switchEmojis:function(){
                this.$data.vemoji_btn = !this.$data.vemoji_btn
            },
            addEmoji:function(e){
                this.$data.text += e.emoji
            }
        }
    }
</script>

<style scoped>
.container{
    
}
.comment-head{
    height: 40px;
    margin: 0 0 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.comment-head .commentIcon{
   font-size: 32px;
}
.comment-head span{
    font-size:20px;
    font-weight: 600;
    color: #4c4948;
}


.edit_box{
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
    background-color: white;
    border: 1px solid #d1d2d4;
    border-radius: 8px;
    cursor: pointer;
    padding: 0 5px;
    font-size: 14px;
}
.vrow .select{
    border: 1px solid #7badfe;
    color: #7badfe;
}

.vrow .el-button{
    width: 100px;
}
.vemojis{
    width: 100%;
    max-height: 145px;
    margin-top: 20px;
    display: flex;
    
    overflow-y: scroll;
    flex-direction: row;
    flex-wrap: wrap;
}
.vemoji{
    width: 26px;
    height: 26px;
    cursor:pointer;
    
}
.bg{
    display: none;
}
</style>