<template>
    <div class="login-wrap">
        <h2 class="mgbt20">회원가입</h2>
        <div class="login-form-wrap">
            <form>
                <div class="login-input-wrap mgbt10">
                    <input v-model="userEmail" type="email" required="required" placeholder="이메일을 입력해주세요" />
                </div>
                <div v-if="emailErrMsg" class="login-error-msg">
                    <p>{{emailErrMsg}}</p>
                </div>
                <div class="login-input-wrap password mgbt10">
                    <input v-model="userPassword" type="password" required="required" placeholder="패스워드를 입력해주세요" />
                    <div class="option-wrap">
                        <i v-if="!pwState" @click="pwView" class="fa-solid fa-eye-slash hide" ></i>
                        <i v-else @click="pwView" class="fa-solid fa-eye-slash show" ></i>
                    </div>          
                </div>
                <div v-if="pwErrMsg" class="login-error-msg">
                    <p>{{pwErrMsg}}</p>
                </div>
                <div class="login-input-wrap password mgbt10">
                    <input v-model="userPasswordRepeat" type="password" required="required" placeholder="패스워드를 다시 입력해주세요" />
                </div>
                <div v-if="pwRepeatErrMsg" class="login-error-msg">
                    <p>{{pwRepeatErrMsg}}</p>
                </div>
                <div class="login-submit-wrap">
                    <button :disabled="!isValid" type="button" class="btn-login" @click="signUp">회원가입</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
// import value from '@/mixin/value.js';
import {validEmail} from '@/utils/validation.util'
export default {
    // mixins:[value],
    data() {
        return {
            userEmail: '',
            userPassword: '',  
            userPasswordRepeat: '', 
            emailErrMsg: '',  
            pwErrMsg:'',
            pwRepeatErrMsg:'',
            pwState:false,
        };
    },
    computed: {
        isValid() {
            const isValueCheck = this.userEmail && this.userPassword && this.userPasswordRepeat
            const validRes = !this.emailErrMsg && !this.pwErrMsg && !this.pwRepeatErrMsg

            return isValueCheck && validRes
        }
    },
    watch: {
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
        pwView() {
            this.pwState = !this.pwState 
        },
        async signUp() {
            try {
                const auth = this.$fire.auth
                const res = await auth.createUserWithEmailAndPassword(
                    this.userEmail, 
                    this.userPassword
                )
                console.log(res)
            } catch(error) {
                console.log(error)
            }
            
        },
    },
};
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/pages/login.scss";
</style>