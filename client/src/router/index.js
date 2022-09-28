import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FaqView from "../views/FaqView.vue";
import ContactView from "../views/ContactView.vue";
import MenuView from "../views/MenuView.vue";
import ProfileView from "../views/ProfileView.vue";
import Page from "../components/Auth/Page.vue";
import Page404 from "../views/Page404.vue";
import AdminDashboard from "../views/AdminDashboard.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/menu",
    name: "menu",
    component: MenuView,
  },
  {
    path: "/faq",
    name: "faq",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: FaqView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/login",
    name: "loginPage",
    component: Page,
  },
  {
    path: "/404",
    name: "Page404",
    component: Page404,
  },
  {
    path: "/admin/dashboard",
    name: "admin_dashboard",
    component: AdminDashboard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
  },
});

export default router;
