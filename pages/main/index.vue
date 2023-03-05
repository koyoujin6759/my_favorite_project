<template>
  <div>
    <div class="main-page ">
        <section class="main-sc01 contents">
        <!-- <button @click="clickEvt">click</button> -->
            <!-- <Search></Search> -->
            <div class="search-box-wrap">
                <input v-model="search" type="text"  placeholder="검색어를 입력하세요. ex) 강남역맛집">
                <button @click="placeSearch()">검색</button>
            </div>
        </section>
        <section class="main-sc02">
            <div class="map-wrap" id="map">
                map area
            </div>
            <div class="list-wrap">
                <ul>
                    <li v-for="(item,idx) in list" :key="idx"> 
                        <p>{{ item.place_name }}</p>
                        <div class="option-wrap">
                            <span @click="scrap(item)">스크랩</span>
                            <a :href="item.place_url" target="_blank">더보기</a>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>    
  </div>
</template>

<script>
export default {
    
    data() {
        return {
            map: null,
            list: '',
            search:''
        }
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
            this.placeSearch()
        },
        placeSearch() {
            const infowindow = new window.kakao.maps.InfoWindow({zIndex:1})
            const ps = new window.kakao.maps.services.Places();
            
            const placesSearchCB = (data, status, pagination) => {
                if (status === window.kakao.maps.services.Status.OK) {
                    console.log(data);
                    this.list = data;
                    // console.log(this.list)
                    const bounds = new window.kakao.maps.LatLngBounds();
                    
                    for (let i=0; i<data.length; i++) {
                        displayMarker(data[i], infowindow);
                        bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
                    }

                    this.map.setBounds(bounds);
                }
            }

            const displayMarker = (place, infowindow) => {
                const marker = new window.kakao.maps.Marker({
                    map: this.map,
                    position: new window.kakao.maps.LatLng(place.y, place.x)
                });

                window.kakao.maps.event.addListener(marker,'click', ()=> {
                    infowindow.setContent('<div style="padding:5px; font-size:12px;">' +  place.place_name + '</div>');
                    infowindow.open(this.map,marker);
                })
            }
            let realSearch = this.search ? this.search : '강남역 맛집'
            if(!realSearch.includes('맛집')) realSearch += ' 맛집'
            ps.keywordSearch(realSearch, placesSearchCB);
            // console.log(this.search)

        },
        async scrap(placeInfo) {
            // console.log('this.$store.auth: ', this.$store.state.auth.uid);
            const newPlaceInfo = {...placeInfo, userId:this.$store.state.auth.uid}
            await this.$fire.firestore
            .collection('scrap')
            .doc()
            .set(newPlaceInfo)
            this.$store.commit('scrap/addScrap', newPlaceInfo)
            // this.$store.state.scrap
            console.log('this.$store.state.scrap: ', this.$store.state.scrap);
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/pages/main.scss";
    @import "@/assets/scss/components/search.scss";
</style>