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
}
</script>

<style>

</style>