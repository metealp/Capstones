<template>
    <layout>
        <template v-slot:header>
            Header
        </template>

        <template v-slot:sidebar>
            <album v-for="album in cdAlbumList" :key="album.id" :album="album"
            />
        </template>

        <template v-slot:content>
            <router-view />
        </template>

    </layout>
</template>

<script>
import Layout from './Layout.vue';
import Album from './Album.vue'

export default {
    components: {
        Layout,
        Album,
    },
    async created() {
        await this.$store.dispatch('albumStore/fetchAlbums')
        // this.fetchPhotosForAlbum(this.$route.params.id)
    },
    watch: {
        $route: {
            handler(val){
                console.log(val);
                this.fetchPhotosForAlbum(val.params.id)
            },
            immediate:true,
            
        }
    },

    computed: {
        cdAlbumList () {
            return this.$store.state.albumStore.albumList
        }
    },
    methods: {
        fetchPhotosForAlbum(albumId){
            this.$store.dispatch('photoStore/fetchPhotosForAlbum', {id: albumId })
        }
    }
}
</script>

<style>

* {
    box-sizing: border-box;
}

body {
    margin: 0;
}


</style>