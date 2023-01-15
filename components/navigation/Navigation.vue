<template>
    <div class="navi-bar-wrap">
         <ul class="navi-bar">
            <li v-for="(menu,idx) in menus" :key="idx">
                <router-link :to="menu.url"><i :class="menu.icon"></i><br/>{{menu.name}}</router-link>
            </li>
         </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menus: [
                {
                    url:"/",
                    icon:"fa-solid fa-house",
                    name:"홈"
                },
                {
                    url:"/",
                    icon:"fa-solid fa-star",
                    name:"스크랩"
                },
                {
                    url:"/login",
                    icon:"fa-solid fa-user",
                    name:"마이페이지"
                },
            ]
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss">
    @import "@/assets/scss/components/navigation.scss";
</style>