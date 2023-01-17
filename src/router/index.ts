import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";


const routes: RouteRecordRaw[] = [

    
    // {
    //     path: "/",
    //     name: "Searcher",
    //     component: () => import("../components/Searcher.vue"),
    // },
    {
        path: "/",
        name: "Home",
        component: () => import("../components/Home.vue"),
    },
    {
        path: "/miniApp/",
        name: "MiniApp",
        component: () => import("../components/MiniApp.vue"),
    },
  


    
    //   {
    //     path: "/home",
    //     name: "Home",
    //     component: () => import("~/views/home/index.vue"),
    //   },
    //   {
    //     path: "/hero",
    //     name: "Hero",
    //     component: () => import("~/views/home/components/Hero.vue"),
    //   },
    //   {
    //     path: "/StoreTest",
    //     name: "StoreTest",
    //     component: () => import("~/views/home/components/StoreTest.vue"),
    //   },
    //   {
    //     path: "/:pathMatch(.*)*",
    //     redirect: "/404",
    //   },
];

const index = createRouter({
    history: createWebHistory(),
    routes,
});


export default index;

