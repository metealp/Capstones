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
            <photo-card v-for="photo in cdPhotosList" :key="photo.id" :photo="photo"
            />
        </template>

    </layout>
</template>

<script>
import Layout from './Layout.vue';
import Album from './Album.vue'
import PhotoCard from './PhotoCard.vue'
import { mapState } from 'vuex';

export default {
    components: {
        Layout,
        Album,
        PhotoCard,
    
    },
    async created() {
        await this.$store.dispatch('albumStore/fetchAlbums')
    },

    computed: {
        cdAlbumList () {
            return this.$store.state.albumStore.albumList
        },
        cdPhotosList (){
            return this.$store.state.photoStore.photosList
        }
        // ...mapState("albumStore", {
        //     albumList: state => state.albumList
        // })
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