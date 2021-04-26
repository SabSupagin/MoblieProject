import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import login from "@/components/login.vue";
import stock from "@/components/Stock.vue";
import history from "@/components/History.vue";
import createorder from "@/components/createorder.vue";
import editproduct from "@/components/editproduct.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/stock",
    name: "stock",
    component: stock,
  },
  {
    path: "/history",
    name: "history",
    component: history,
  },
  {
    path: "/createorder",
    name: "createorder",
    component: createorder,
  },
  {
    path: "/editproduct",
    name: "editproduct",
    component: editproduct,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;