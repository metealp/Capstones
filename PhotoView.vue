<template>
    <div>
        <!-- <h3> Content </h3> -->
        <img v-for="photo in PhotosList" :key="photo.id" :src="photo.thumbnailUrl" alt="">
    </div>
</template>

<script>
export default {
    computed: {
        PhotosList (){
            return this.$store.state.photoStore.photosList
        }
    },
    mounted () {
        console.log(this.PhotosList)
    }

}
</script>

<style scoped>
    img {
        display: inline-flex;
    }
</style>