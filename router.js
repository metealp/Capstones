import { createRouter, createWebHistory } from "./node_modules/vue-router/dist/vue-router.esm-browser.js"
import PhotoApp from './PhotoApp.vue'
import PhotoView from './PhotoView.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name:'root',
            path: '/',
            component: PhotoApp,
            children: [ 
                {
                    name: 'photos',
                    path: ':id',
                    component: PhotoView,
                }
            ]
        }
    ]
})