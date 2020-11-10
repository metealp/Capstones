export const photoStore = {
    namespaced: true,

    state(){
        return {
            photosList: []
        }
    },

    mutations: {
        setPhotosList(state, payload){
            state.photosList = payload
            console.log(payload);
        }
    },

    actions: {
        async fetchPhotosForAlbum(ctx, { album }){
            console.log(album);

            const res = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`)
            const data = await res.json()
            ctx.commit("setPhotosList", data)
        }
    },
}