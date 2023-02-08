<template>
  <div>
    <div class="main-page ">
        <section class="main-sc01 contents">
        <!-- <button @click="clickEvt">click</button> -->
            <Search></Search>
        </section>
        <section class="main-sc02">
            <div class="map-wrap" id="map">
                map area
            </div>
            <div class="list-wrap">
                <ul>
                    <li>
                        <p>list1</p>
                        <div class="option-wrap">
                            <a href="">스크랩</a>
                            <a href="">더보기</a>
                        </div>
                    </li>
                    <li>
                        <p>list1</p>
                        <div class="option-wrap">
                            <a href="">스크랩</a>
                            <a href="">더보기</a>
                        </div>
                    </li>
                    <li>
                        <p>list1</p>
                        <div class="option-wrap">
                            <a href="">스크랩</a>
                            <a href="">더보기</a>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>    
  </div>
</template>

<script>
import Search from '@/components/search/Search.vue'
export default {
    data() {
        return {
            map: null
        }
    },
    components: {
        Search
    },
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

        window.kakao.maps.load(this.initMap);
    },
    methods: {
        async clickEvt() {
            await this.$fire.firestore.collection("POST").doc().set({
                name: "name1",
                title: "title1",
                content: "content1"
            })
        },
        initMap() {
            const container = document.getElementById("map"); 
            const options = {
                center: new window.kakao.maps.LatLng(33.450701, 126.570667), 
                level: 5,
            };
            const map = new window.kakao.maps.Map(container, options);
            this.map = map;
        },
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/pages/main.scss";
</style>