const routes = [
    {
        to: '/',
        name: 'Home',
        component: import('./routes/Home.svelte'),
    },
    {
        to: '/:id',
        name: 'Post',
        component: import('./routes/Post.svelte'),
    },
    {
        to: 'https://github.com/heywoodlh/the-empire.systems/tree/master/src/archive',
        name: 'Archive',
    },
    {
        to: '/contact',
        name: 'Contact',
        component: import('./routes/Contact.svelte'),
    },
    {
        to: '*',
        name: '404',
        component: import('./routes/NotFound.svelte'),
    },
];

export default routes;
