import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from "vue-router";

import Layout from '../layout/index.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component:Layout,
        redirect: '/page1',
        children: [
            {
                path: '/page1',
                name: 'page1',
                component: () => import('../views/page1.vue')
            },
            {
                path: '/page2',
                name: 'page2',
                component: () => import('../views/page2.vue')
            },
            {
                path: '/svgDrag',
                name: 'svgDrag',
                component: () => import('../views/svg/drag.vue')
            },
            {
                path: '/svg',
                name: 'svg',
                component: () => import('../views/svg/svg.vue')
            },
            {
                path: '/canvas',
                name: 'canvas',
                component: () => import('../views/canvas/test.vue')
            },
            {
                path: '/ani',
                name: 'ani',
                component: () => import('../views/canvas/ani.vue')
            },
            {
                path: '/png',
                name: 'png',
                component: () => import('../views/canvas/png.vue')
            },
            {
                path: '/pixi',
                name: 'pixi',
                component: () => import('../views/canvas/pixi.vue')
            },
            {
                path: '/dw',
                name: 'dw',
                component: () => import('../views/canvas/dw.vue')
            }
        ]
    }
]

const router: Router = createRouter({
    history: createWebHashHistory('/'),
    routes,
})

export default router