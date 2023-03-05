
export const state = () => ([])

export const getters = {
    
}

export const mutations = {
    scrapInit(state,scrapList) {
        state.push(...scrapList)
    },
    addScrap(state,placeInfo) {
        console.log('placeInfo: ', placeInfo);
        state.push(placeInfo);
    },
    deleteScrap(state,scrapInfo) {
        console.log('before state: ', state);
        // const newState = state.filter(item => item.docId !== scrapInfo.docId) 
        // state = [...newState]
        const deleteIndex = state.findIndex(item => item.docId === scrapInfo.docId) 
        state.splice(deleteIndex, 1)
        console.log('after state: ', state);
        
    }
    
}

export const actions = {
    
}
