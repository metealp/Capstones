<template>
    <div>
        <!-- <img v-for="photo in PhotosList" :key="photo.id" :src="photo.thumbnailUrl" alt=""> -->
        Content
    </div>
</template>

<script>
export default {
    computed: {
        PhotosList (){
            return this.$store.state.photoStore.photosList
        }
    }

}
</script>

<style scoped>
    img {
        display: inline-flex;
    }
</style>