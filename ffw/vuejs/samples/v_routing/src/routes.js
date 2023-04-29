import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import Users from './components/user/Users.vue';
import User from './components/user/User.vue';
import Home from './components/Home.vue';
import Sum from './components/Sum.vue';

export const routes= [
    { path: '', component: Home },
    { path: '/users', component: Users },
    { path: '/user/:id', component: User, children: [
            { path: '', component: User },
            { path: 'detail', component: UserDetail },
            { path: 'edit', component: UserEdit },
        ]
    },
    { path:'/sum', component: Sum, name: 'sum' }
];
