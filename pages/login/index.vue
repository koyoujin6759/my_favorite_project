<template>
    <div class="login-wrap">
        <h2 class="mgbt20">로그인</h2>
        <div class="login-form-wrap">
            <form>
                <div class="login-input-wrap mgbt10">
                    <input v-model="userEmail" type="email" required="required" name="userEmail" placeholder="이메일을 입력해주세요" ></input>
                </div>
                <div class="login-error-msg">
                    <p>{{emailErrMsg}}</p>
                </div>
                <div class="login-input-wrap mgbt10">
                    <input v-model="userPassword" type="password" required="required" name="userPassword" placeholder="패스워드를 입력해주세요" ></input>
                </div>
                <div class="login-error-msg">
                    <p>{{pwErrMsg}}</p>
                </div>
                <div class="login-submit-wrap">
                    <button class="btn-login" v-on:click="OnClickLoginButton">로그인</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import value from '@/mixin/value.js';
export default {
    mixins:[value],
    data() {
        return {
            userEmail: '',
            userPassword: '',  
            emailErrMsg: '',  
            pwErrMsg:'',
        };
    },

    mounted() {
        
    },

    methods: {
         OnClickLoginButton() {
            let checkUserInfo = false;
            if(!this.userEmail && !this.userPassword) {
                this.emailErrMsg = '이메일을 입력해주세요.'
                return;
            }            
            
            if(!this.userEmail) {
                this.emailErrMsg = '이메일을 입력해주세요.'
                return;
            } else if(!this.validEmail(this.userEmail)) {
                this.emailErrMsg = '올바르지 않은 이메일형식입니다.'
                this.pwErrMsg = null;
                return;
            }  
            if(!this.userPassword) {
                this.pwErrMsg = '패스워드를 입력해주세요.'
                return;
            }     
            if(this.validEmail(this.userEmail) && this.userEmail && this.userPassword) {
                checkUserInfo = true;
            }
         
            if(checkUserInfo){
                this.Login();
            }
            
        },
    },
};
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/pages/login.scss";
</style>