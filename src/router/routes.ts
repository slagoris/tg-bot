export default [
    // {
    //     path: '/',
    //     name: 'panel',
    //     meta: { layout: 'default', auth: true, },
    //     children: [],
    //     component: () => import('@/views/Panel/EndToEnd.vue'),
    // },
    {
        path: '',
        name: 'home',
        component: () => import('../pages/HomePage.vue'), 
    },
    {
        path: '/city',
        name: 'city',
        component: () => import('../pages/CitySelection.vue'), alias: '/'
    },
    
]
