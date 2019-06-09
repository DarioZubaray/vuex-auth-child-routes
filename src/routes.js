export default [{
    path: '/',
    redirect: '/login'
}, {
    path: '/login',
    name: 'login',
    component: () =>
        import ('./views/Login.vue')
}, {
    path: '/secret',
    name: 'secret',
    meta: { requiresAuth: true },
    component: () =>
        import ('./views/secrets/Secret.vue'),
    children: [{
        path: 'notes',
        name: 'notes',
        component: () =>
            import ('./views/secrets/Notes.vue')
    }]
}]