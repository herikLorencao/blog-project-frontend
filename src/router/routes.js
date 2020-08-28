const routes = [
  {
    path: '/',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    ],
  },
  {
    path: '/projetos',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: '', component: () => import('pages/Projects.vue') },
    ],
  },
  {
    path: '/admin',
    component: () => import('layouts/Admin.vue'),
    children: [
      { path: 'projetos', component: () => import('pages/admin/Projects.vue') },
      { path: 'categorias', component: () => import('pages/admin/Categories.vue') },
      { path: 'posts', component: () => import('pages/admin/Posts.vue') },
      { path: 'posts/comentarios', component: () => import('pages/admin/Comments.vue') },
      { path: 'administradores', component: () => import('pages/admin/AdminUsers.vue') },
      { path: 'leitores', component: () => import('pages/admin/Readers.vue') },
    ],
  },
  {
    path: '/login',
    component: () => import('layouts/Login.vue'),
    children: [
      { path: '', component: () => import('pages/UsersLogin.vue') },
    ],
  },
  {
    path: '/admin/login',
    component: () => import('layouts/Login.vue'),
    children: [
      { path: '', component: () => import('pages/AdminLogin') },
    ],
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
