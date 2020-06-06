<template>
    <div class="editor">
        <!-- v-model：テキストアリアの内容とストアが直接結びつく。保存ボタンが機能しない。 -->
        <!-- memo.body=>memoBody -->
        <textarea name="memo" v-model="memoBody"></textarea>
        <button @click="save">保存</button>
    </div>
</template>
<script>
export default {
    name:"edit",
    // 画面が呼び出されたときに表示する。
      data:function(){
        return {
            memoBody:''
        }
    },
    // コンポーネントが呼び出された時に、現在の値を取得する
    mounted:function(){
        let id = this.$router.params["id"];
        let memo = this.$store.state.memos.find(memo=>memo.id==id); 
        this.memoBody = memo.body;
    },
    // 算出プロパティ：データそのものに何らかの処理を与えたものをプロパティにする
    // キャッシュ：仮にページを更新しても前の入力値が変わらなければ、memoが呼び出されてもfunction()以下の処理は実行されず、前に算出したプロパティの値がそのまま出力される。
    computed:{
        memo:function(){
            let id = this.$router.params["id"];
            return this.$store.state.memos.find(memo=>memo.id==id); 
        }
    },
    // saveを押したときの処理
    // 計算結果をキャッシュしないので、一度計算を行った場合も関数を呼び出される度に再計算を行う
    methods:{
        save:function(){
            this.$store.commit("update",{
                id:this.memo.id,
                body:this.memo.body
            });
            this.$router.push("/");
        }
    }
};
</script>
