import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Home from "./components/pages/Home";
import About from "./components/pages/About";

const routes = [
    {
        path:'/hello',
        component:Home
    },
    {
        path:'/my-vue',
        component:About
    }
]

export default new VueRouter({
    mode:'history',
    routes,
})