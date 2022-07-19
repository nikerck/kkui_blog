<style lang="css" src="@/assets/css/loginRegisterview.css" scoped></style>

<template>
    <div class="container">
        
        <div class="box">
            <div :class="[select == true?'login-box':'login-box slide-up']">
                <h2 class="login-title" @click="toLogin">
                    <span>已经有账号？</span>登录
                </h2>
                <div class="input-box">
                    <input type="text" placeholder="账号" >
                    <input type="password" placeholder="密码">
                </div>
                <button>登录</button>
                <span class="forgetPw">忘记密码</span>
            </div>

            <div :class="[select == false?'register-box':'register-box slide-up']">
                <div class="center">
                    <h2 class="register-title" @click="toRegister">
                        <span>还没有账号？</span>注册
                    </h2>
                    <div class="input-box">
                        <input type="text" placeholder="账号" >
                        <input type="password" placeholder="密码">
                        <input type="password" placeholder="确认密码">
                        <input type="email" placeholder="电子邮箱">
                        <div class="code">
                            <input type="text" maxlength="5" placeholder="验证码">
                            <button class="getCode">获取验证码</button>
                    </div>
                    <!-- 邀请码 -->
                </div>
                <button>注册</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
           return{
            select:true
           }
        },
        methods: {
            toRegister(){
                this.$data.select = false
            },
            toLogin(){
                this.$data.select = true
            }
        },

    }
</script>





