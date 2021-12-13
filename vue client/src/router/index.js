/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import HomeMain from "../components/HomeMain.vue";
import Level from "../components/Level.vue";
import Subject from "../components/Subject.vue";
import Skills from "../components/Skills.vue";
import Sample from "../components/Sample.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  
  {
    path:"/Register",
    name:"Register",
    component: Register,
   
  },
  {
    path:"/HomeMain",
    name:"HomeMain",
    component: HomeMain,
    children:[
      {
        path:"/Level",
        name:"Level",
        component: Level,
      },
      {
        path:"/Skills",
        name:"Skills",
        component: Skills,
      },
      {
        path:"/Subject",
        name:"Subject",
        component: Subject,
      },
  ]
  },
  
  
  
  {
    path:"/Sample",
    name:"Sample",
    component: Sample,
  },
  
  
];

const router = new VueRouter({
  routes,
});

export default router;

// {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },