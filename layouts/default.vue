<template>
  <div class="inner">
    <Header></Header>
    <!-- <slot></slot> -->
    <Nuxt/>
    <Footer></Footer>
    <Navigation></Navigation>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'
import Navigation from '@/components/navigation/Navigation.vue';
export default {
    components : {
        Header,
        Footer,
        Navigation
    },
    beforeCreate() {
      // console.log('test')
      const auth = this.$store.state.auth
      const scrap = this.$store.state.scrap
    },
    mounted() {
      this.$fire.auth.onAuthStateChanged(async(user) => {
        if (user) {
          // console.log(user)          
          // const currentUser = this.$fire.auth.currentUser
          // console.log('currentUser: ', currentUser);
          const {email,uid} = user
          const userInfo = {email,uid}
          // console.log(userInfo)       
          this.$store.commit('auth/login',userInfo)

          const getList = await this.$fire.firestore
          .collection('scrap')
          .where('userId','==',uid)
          .get()

          const scrapList = []
          getList.forEach((doc) => scrapList.push({
            ...doc.data(),
            docId:doc.id
          }))
          console.log("scrapList",scrapList)

          this.$store.commit('scrap/scrapInit',scrapList)
          
          console.log('this.$store.state.auth: ', this.$store.state.auth);
          
        } else {
          console.log('user is singed out!')
        }
      })
    }
}
</script>

<style>

</style>