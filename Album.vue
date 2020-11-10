<template>
  <button @click="click">
      {{ album.title }}
  </button>
</template>

<script>
import { useStore } from 'vuex'
export default {
    props: {
        album: {
            type: Object
        },
    },

    setup(props){
        const store = useStore()
        
        const click = () => {
            store.dispatch('photoStore/fetchPhotosForAlbum', {album: props.album })
        }

        return {
            click
        }
    }
}
</script>

<style scoped>
button {
    background: darkcyan;
    color: white;
    border: none;
    padding: 10px;
    margin: 5px;
    font-size: 15px;
    border-radius: 5px;
    transition: .1s;
}

button:hover{
    filter: brightness(120%);
    cursor: pointer;
    transition: .1s;
}
</style>