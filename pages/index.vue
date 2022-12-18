<template>
  <div>
    <Main></Main>
  </div>
  
</template>

<script>
import Main from '/pages/main/index'
export default {
  name: 'IndexPage',
  components: {
    Main
  },
  // async mounted() {
  //   console.log('this.$fire: ', this.$fire);
  //   await this.$fire.firestore.setDoc
  // }
}
</script>
