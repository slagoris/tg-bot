export default [
    {
        path: '/',
        name: 'home',
        meta: {title: 'Язык'},
        component: () => import('../pages/HomePage.vue'), 
    },
    {
        path: '/city',
        name: 'city',
        meta: {title: 'Город'},
        component: () => import('../pages/CitySelection.vue'), 
    },
    {
        path: '/menu',
        name: 'menu',
        meta: {title: 'Обмен валют'},
        component: () => import('../pages/Menu.vue'), 
    },
    //
]  // {
//     path: '/',
//     name: 'panel',
//     meta: { layout: 'default', auth: true, },
//     children: [],
//     component: () => import('@/views/Panel/EndToEnd.vue'),
// },
