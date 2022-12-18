<template>
  <div>
    <Header></Header>
    <!-- <slot></slot> -->
    <Nuxt/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'
export default {
    components : {
        Header,
        Footer
    },
}
</script>

<style>

</style>