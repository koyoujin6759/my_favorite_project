<template>
  <div>
    <header>
        <div class="header-inner">
            <i class="fa-solid fa-arrow-left btn-prev"></i>
            <h1 class="logo"><router-link to="/">FAVORiTE</router-link></h1> 
            <div class="user">
              <span>login</span>
              <span>{{getUser.email}}</span>
            </div>           
        </div>        
    </header> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      userState:false,
    }
  },  
  computed: {
    getUser() {
      return this.$store.getters['auth/getUser'];
    }
  },
  mounted() {
    
  },
  
  
}
</script>

<style lang="scss">
    @import "@/assets/scss/components/header.scss";
</style>