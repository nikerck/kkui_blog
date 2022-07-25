

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


<style scoped>
*{
    padding: 0;
    margin: 0;
}

.container{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("@/assets/bg.svg");
    background-size: cover;
    background-position: right;
    transition: 0.3s ease;
}
.box{
    height: 500px;
    width: 350px;
    border-radius: 15px;
    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
    overflow: hidden;
    position: relative;
    box-shadow: 10px 10px 5px 5px #d1d2d4;
}
/* 登录box */
.login-box{
    
    width: 70%;
    z-index: 1;
    position: absolute;
    inset: 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    transition: 0.3s ease;
}
.login-title,.register-title{
    color: #000;
    font-size: 27px;
    text-align: center;
}
.login-title span,.register-title span{
    color: rgba(0,0,0,0.4);
    display: none;
}
.login-box .input-box,.register-box .input-box{
    background-color: #fff;
    overflow: hidden;
    margin-top: 20px;
    border-radius: 15px;
    visibility: visible;
    transition: 0.6s ease;
}
.login-box input,.register-box input{
    width: 100%;
    height: 30px;
    border: none;
    border-bottom: 1px solid rgba(0,0,0,0.4);
    font-size: 12px;
    padding: 8px 0;
    text-indent: 15px;
    outline: none;
}
.login-box input:last-child,.register-box input:last-child{
    border: none;
}
.login-box input::placeholder,.register-box input::placeholder{
    color: rgba(0,0,0,0.4);
}


.login-box button,.register-box button{
    width: 100%;
    padding: 15px 45px;
    margin: 15px 0;
    background: #7badfe;
    border: none;
    border-radius: 15px;
    color: rgba(255,255,255,0.8);
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
    opacity: 1;
    visibility: visible;
    transition: 0.3s ease;
}
.login-box button:active,.register-box button:active{
    
    background-color: rgba(0,0,0,0.4);
}
.login-box .forgetPw{
    
    color: #8590a6;
    align-items: center;
    position: absolute;
    right: 50%;
    bottom: 0px;
    transform: translate(50%);
    cursor:pointer;
}
.login-box .forgetPw:hover{
    color: #7badfe;
}

/* 注册box */
.register-box{
    
    position: absolute;
    inset: 0;
    top: 20%;
    background-color: #fff;
    transition: 0.3s ease;
    
}
.register-box::before{
    content: "";
    background-color: #fff;
    width: 200%;
    height: 250px;
    border-radius: 50%;
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
}
.register-box .center{
    width: 70%;
    position: absolute;
    z-index: 3;
    left: 50%;
    top: 45%;
    transform: translate(-50%,-50%);
}
.register-box .input-box{
    border: 1px solid rgba(0,0,0,0.4);
}
.code{
    height: 47px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.code input{
    width: 40%;
    border: none;
}
.code button{
    padding: 0;
    margin-right: 10px;
    width: 40%;
    height: 30px;
}

/* 注册登录区域收起 */
.login-box.slide-up .forgetPw,
.login-box.slide-up .input-box,
.login-box.slide-up button,
.register-box.slide-up .input-box,
.register-box.slide-up button{
    visibility: hidden;
    opacity: 0;
}
.register-box.slide-up{
    top: 90%;
    
}
.login-box.slide-up{
    
    top: 37%;
}

.login-box.slide-up .login-title,
.register-box.slide-up .register-title{
    font-size: 20px;
    cursor: pointer;
}

.login-box.slide-up span,   
.register-box.slide-up span{
    display: inline-block;
}

.register-box.slide-up .center{
    top: 10%;
    transform: translate(-50%,0%);
    
}


</style>


