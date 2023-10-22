import Main from "@/pages/Main";
import PostsPage from "@/pages/PostsPage";
import PostPageWithStore from "@/pages/PostPageWithStore";
import PostIdPage from '@/pages/PostIdPage'
import About from "@/pages/About";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/posts",
    component: PostsPage,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/posts/:id",
    component: PostIdPage,
  },
  {
    path: "/store",
    component: PostPageWithStore,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;