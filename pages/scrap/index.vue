<template>
    <div>
        <ul>
            <li v-for="(item,idx) in list" :key="idx"> 
                <p>{{ item.place_name }}</p>
                <div>
                    <button @click="remove(item)">삭제</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

    data() {
        return {
           
        };
    },
    computed: {
        list() {
            return this.$store.state.scrap
        }
    },

    mounted() {
        
    },

    methods: {
        async remove(item) {
            console.log(item)
            await this.$fire.firestore
                .collection('scrap')
                .doc(item.docId)
                .delete()
            this.$store.commit('scrap/deleteScrap', item)
        }
    },
};
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/pages/scrap.scss";
</style>