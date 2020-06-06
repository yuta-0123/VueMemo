import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        memos:[
            
        ]
    },
    mutations:{
        save(state,memo){
            var max = state.memos[state.memos.length-1].id
            memo.id = max + 1
            state.memos.push(memo)
        }
    }
})
