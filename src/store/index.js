import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        memos:[
            
        ]
    },
    mutations:{
        // 新しいメモの追加
        save(state,memo){
            var max = state.memos[state.memos.length-1].id
            memo.id = max + 1
            state.memos.push(memo)
        },
        // メモの更新
        update(state,data){
            var X = state.memos.find(memo=>memo.id==data.id);
            X.body=data.body
        }
    }
})
