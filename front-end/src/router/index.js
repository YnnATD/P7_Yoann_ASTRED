// import module
import { createRouter, createWebHistory } from "vue-router";

// import des views
import Signup from '../views/Signup'
import Login from '../views/Login' 
import Account from '../views/Account'
import Modify from '../views/Modify'

// tableau des routes
const routes = [
    {
     name : 'signup',
     path: '/login',
     component: Signup,
    },
    {
        name : 'login',
        path: '/',
        component: Login,
    },
    {
        name: 'account',
        path: '/profile',
        component: Account
    },
    {
        name: 'modify',
        path: '/edit',
        component: Modify
    }
];

// creation du router
const router = createRouter({
    history: createWebHistory(),
    routes
});

// export router
export default router