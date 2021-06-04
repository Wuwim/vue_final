import Vue from "vue";
import VueRouter from "vue-router";

import Index from "@/views/Index.vue";
import Details from "../views/Details.vue";
import Products from "../views/Products";
import NotFound from "../views/NotFound";
import Cart from "../views/Cart";
import Login from "../views/Login";
import Register from "../views/Register";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", component: Index },
    { path: "/product/detail/:lid", component: Details ,props:true},
    { path:"/products",component:Products},
    { path :"/cart",component:Cart},
    { path :"/login",component:Login},
    { path :"/register",component:Register},
    { path :"*",component:NotFound},
  ],
});
export default router;
