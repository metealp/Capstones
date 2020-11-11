export const photoStore = {
    namespaced: true,

    state(){
        return {
            photosList: [],
            loading: false,
            photoCache: {

            }
        }
    },

    mutations: {
        setPhotosList(state, {photos, albumId}){
            state.photosList = photos
            state.photoCache[albumId] = photos
        },
        setLoading(state, loading){
            state.loading = loading;
        }
    },

    actions: {
        async fetchPhotosForAlbum(ctx, { id }){
            if(ctx.state.photoCache[id]){
                ctx.commit("setPhotosList", {photos: ctx.state.photoCache[id], albumId: id})
                return
            }
            ctx.commit('setLoading', true)

            const res = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
            const data = await res.json()
            ctx.commit("setPhotosList", {photos: data, albumId: id})

            ctx.commit('setLoading', false)

        }
    },
}