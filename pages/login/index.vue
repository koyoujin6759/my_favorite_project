<template>
    <div class="login-wrap">
        <h2 class="mgbt20">로그인</h2>
        <div class="login-form-wrap">
            <form>
                <div class="login-input-wrap mgbt10">
                    <input v-model="userEmail" type="email" required="required" name="userEmail" placeholder="이메일을 입력해주세요" />
                </div>
                <div v-if="emailErrMsg" class="login-error-msg">
                    <p>{{emailErrMsg}}</p>
                </div>
                <div class="login-input-wrap mgbt10">
                    <input v-model="userPassword" type="password" required="required" name="userPassword" placeholder="패스워드를 입력해주세요" />
                </div>
                <div v-if="pwErrMsg" class="login-error-msg">
                    <p>{{pwErrMsg}}</p>
                </div>
                <div class="login-submit-wrap">
                    <button :disabled="!isValid" class="btn-login" type="button" @click="OnClickLoginButton">로그인</button>
                </div>
            </form>
        </div>
        <div class="mgtp30 join-txt-wrap">
            <span>아직 회원이 아니신가요?</span>
            <a href="/join">회원가입</a>
        </div>
    </div>
</template>

<script>
import value from '@/mixin/value.js';
import {validEmail} from '@/utils/validation.util'
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
    computed: {
        isValid() {
            const isValueCheck = this.userEmail && this.userPassword 
            const validRes = !this.emailErrMsg && !this.pwErrMsg

            return isValueCheck && validRes
        }
    },
    watch:{
        userEmail(currentValue) {
            // console.log(currentValue)
            if(!currentValue) {
                this.emailErrMsg = '이메일을 입력해주세요.'
            } else if(!validEmail(currentValue)) {
                this.emailErrMsg = '올바르지 않은 이메일 형식입니다.'
            } else {
                this.emailErrMsg = ''
            }            
        },
        userPassword(currentValue) {
            if(!currentValue) {
                this.pwErrMsg = '패스워드를 입력해주세요'
            } else {
                this.pwErrMsg = ''
            }
        },
        userPasswordRepeat(currentValue) {
            if(currentValue !== this.userPassword) {
                this.pwRepeatErrMsg = '패스워드가 일치하지 않습니다.'
            } else {
                this.pwRepeatErrMsg = ''
            }
        }
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
        async Login() {           
            try {
                const auth = this.$fire.auth
                const res = await auth.signInWithEmailAndPassword(
                    this.userEmail,
                    this.userPassword
                )
                console.log(res)
                const {email,uid} = res.user
                const userInfo = {email, uid}
                this.$store.commit('auth/setAuthState',userInfo)
                console.log('this.$store.state.auth',this.$store.state.auth)
                this.$router.push('/main');
            } catch(error) {
                console.log(error)
            }           
           
        }
    },
};
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/pages/login.scss";
</style>