<template>
  <div id="home">
    <ul>
      <li v-for="memo in newst" :key="memo.id">
        {{memo.body}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:"home",
  computed:{
    newst:function(){
      return this.$store.state.memos.slice().reverse();
    }
  }
}
</script>
