<template>
  <router-link :to="albumLink">
      {{ album.title }}
  </router-link>
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
        const albumLink = `${props.album.id}`
        const click = () => {
        }

        return {
            click,
            albumLink
        }
    }
}
</script>

<style scoped>
a {
    background: darkcyan;
    color: white;
    border: none;
    padding: 10px;
    margin: 5px;
    font-size: 15px;
    border-radius: 5px;
    transition: .1s;
    display: block;
    text-align: center;
    text-decoration: none;
    
}

a:hover{
    filter: brightness(120%);
    cursor: pointer;
    transition: .1s;
}
</style>