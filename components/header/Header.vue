<template>
  <div>
    <header>
        <div class="header-inner">
            <i class="fa-solid fa-arrow-left btn-prev"></i>
            <h1 class="logo"><router-link to="/">FAVORiTE</router-link></h1> 
            <div class="user">
                <!-- <router-link to="/login" v-if="!auth.email">login</router-link>
                <router-link to="/login" v-else>logout</router-link> -->
                <p v-if="!auth.email" @click="login()">login</p>
                <p v-else @click="logout()">logout</p>
            </div>           
        </div>      
    </header> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },  
  asyncData(){},
  computed: {
    auth() {
      return this.$store.state.auth
    },
  },
  mounted() {
    
  },  
  methods: {
    login() {
      this.$router.push('/login');
    },
    async logout() {
      try {
          const auth = this.$fire.auth
          await auth.signOut(
            this.$store.commit('auth/logout'),
            this.$router.push('/main')
          )          
      } catch(error) {
          console.log(error)
      }          
    }
  }
  
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/header.scss";
</style>