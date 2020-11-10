<template>
    <layout>
        <template v-slot:header>
            Header
        </template>

        <template v-slot:sidebar>
            <div v-for="album in cdAlbumList" :key="album">
                {{ album.id }}
            </div>
        </template>

        <template v-slot:content>
            Content
        </template>

    </layout>
</template>

<script>
import Layout from './Layout.vue'
import { mapState } from 'vuex'

export default {
    components: {
        Layout,
    },
    async created() {
        await this.$store.dispatch('albumStore/fetchAlbums')
    },

    computed: {
        cdAlbumList () {
            console.log(this.$store.state.albumStore)
            return this.$store.state.albumStore.albumList
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