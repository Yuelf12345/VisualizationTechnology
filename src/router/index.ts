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
                path: '/canvas',
                name: 'canvas',
                component: () => import('../views/canvas/test.vue')
            },
            {
                path: '/png',
                name: 'png',
                component: () => import('../views/canvas/png.vue')
            }
        ]
    }
]

const router: Router = createRouter({
    history: createWebHashHistory('/'),
    routes,
})

export default router