import { createRouter, createWebHistory } from 'vue-router'

//注册路由
const routes = [
    {
        path: '/',
        name: 'App',
        component: () => import('../App.vue')
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
