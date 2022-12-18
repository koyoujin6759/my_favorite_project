<template>
  <div>
    <div class="main-page">
        main
        <button @click="clickEvt">click</button>
    </div>    
  </div>
</template>

<script>
export default {
    async mounted() {
        const db = this.$fire.firestore;

        const snapShot = await db 
            .collection("POST")
            .where("name", "==", "name1")
            .get();
        const postList = [];

        snapShot.forEach((doc) => {
            postList.push({
                id: doc.id,
                ...doc.data(),
            })
        })
        console.log("postList:", postList)

        const dbcSnpashot = await db 
            .collection("POST")
            .doc("VVDOs02oFOmgQ42MBGXM")
            .get();
        const docData = {
            id: dbcSnpashot.id,
            ...dbcSnpashot.data(),
        }
        console.log("docData:", docData.name);
    },
    methods: {
        async clickEvt() {
            await this.$fire.firestore.collection("POST").doc().set({
                name: "name1",
                title: "title1",
                content: "content1"
            })
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/pages/main.scss";
</style>