
export const state = () => ({
    email:'',
    uid:'',
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
    }
}

export const actions = {
    
}
