import { createStore } from "vuex"
import { albumStore } from "./albums.js"
import { photoStore } from "./photos.js"

export const store = createStore({
    modules: {
        albumStore,
        photoStore,
        
    }
})