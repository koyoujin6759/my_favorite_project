
export const state = () => ({
    email:'',
    uid:'',
    isInit : false
})

export const getters = {
    getUser:(state,getters) => {
        console.log('state: ', state);
        
        return state
        
    }
}

export const mutations = {
    login(state,newUserInfo) {
        state = newUserInfo
        // console.log('new state: ', state);
        // state = {...state, ...newUserInfo}
    },
    setAuthState(state,userInfo) {
        const {email,uid} = userInfo

        state.email = email
        state.uid = uid
    },
    logout(state) {
        state.email = ''
        state.uid = ''
    },
    firebaseInitialAuth(state, {authUser,claims}) {
        if(!authUser) {
            state.isInit = true
            return
        }

        const {uid,email} = authUser
        state.uid = uid
        state.email = email
        state.isInit = true
    }
}

export const actions = {
    
}
