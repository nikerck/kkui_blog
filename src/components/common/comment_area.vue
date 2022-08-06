<template>
    <div class="container">
        <div class="mount">共计{{commentMount}}条评论</div>
        <div style="height: 1px; border-bottom:#7badfe solid 1px ;"></div>
        <div class="box">
            <Comment_template></Comment_template>
        </div>
    </div>
</template>

<script>
import Comment_template from "./comment_template.vue";
    export default{
    data() {
        return {
            commentMount: 18, //评论数
        };
    },
    components: { Comment_template }
}
</script>


<style scoped>
.container{
    margin:40px 32px 0;
}
.mount{
    color:#4c4948;
    margin-bottom: 10px;
    margin-left: 8px;
}

</style>