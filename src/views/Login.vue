<template>
    <div class="login">
        <button @click="handleClick">{{ beText }}</button>
    </div>  
</template>

<script>
import  auth from '../utils/auth'
export default {
    data() {
        return {
            isLogin:auth.isLogin()
        }
    },
    methods: {
        handleClick(){
            if(this.isLogin){
                auth.cancelLogin();
            }else{
                auth.login();
                const isGoBack = window.confirm('登录成功,要回到原来的界面吗？')
                if(isGoBack){
                    this.$router.go(-1);
                }
            }
        }
    },
    computed:{
        beText(){
            return this.isLogin?'取消登录':'登录'
        }
    }
}
</script>