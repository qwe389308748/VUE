import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home';
import auth from './utils/auth'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    name:'home'
  },
  {
    path: '/home',
    component: Home,
    // alias: '/',
  },
  {
    path: '/learn',
    component: () => import('./views/Learn'),
    name:'learn'
  },
  {
    path: '/student',
    component: () => import('./views/Student'),
    name:'student'
  },
  {
    path: '/about',
    component: () => import('./views/About'),
    name:'about'
  },
  {
    path: '/activity',
    component: () => import('./views/Activity'),
    name:'activity',
    // redirect:'/activity/academic',
    // redirect:{name:'academic'},
    redirect(){
        return {
            name:'academic'
        }
    },
    meta:{
      requiresLogin: true,
    },
    children: [
        // {
        //     path:'',
        //     component:()=>{'./views/Academic'}
        // },
        {
          path: 'academic',
          name: 'academic',
          component: () => import('./views/Academic'),
        },
        {
          path: 'personal',
          name: 'personal',
          component: () => import('./views/Personal'),
        },
        {
          path: 'download',
          name: 'download',
          component: () => import('./views/Download'),
        }
      ]
  },
  {
    path:'/Question/:id',
    name:'Question',
    component:()=>import('./views/Question.vue')
  },
  // {
  //   path:'/login',
  //   name:'Login',
  //   component:()=>{'./views/Login.vue'}
  // },
  {
    path: '/login',
    name:'login',
    component: () => import('./views/Login'),
  }
];


const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  const isRequiresLogin = to.matched.some(itme => itme.meta.requiresLogin)
  if(isRequiresLogin){
    const liLogin = auth.isLogin();
    if(liLogin){
      next();
    }else{
      const isToLogin = window.confirm('要登录后才能跳转，现在登录吗');
      isToLogin?next('./login'):next(false);
    }
  }else{
    next()
  }
  
});


export default router