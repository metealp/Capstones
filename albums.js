
export const albumStore = {
    namespaced: true,

    state(){
        return {
            albumList: []
        }
    },

    mutations: {
        setAlbums(state, payload){
            state.albumList = payload
        }
    },

    actions: {
        async fetchAlbums(ctx){
            const res = await fetch('https://jsonplaceholder.typicode.com/albums')
            const data = await res.json()
            ctx.commit("setAlbums", data)
        }
    },
}