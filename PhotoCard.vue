<template>
    <span>
        <img :src="photo.thumbnailUrl" alt="">
    </span>
</template>

<script>
export default {
    props: {
        photo: Object,
    },

}
</script>

<style scoped>
    img {
        display: inline-flex;
    }
</style>