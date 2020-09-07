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
    path: '/login',
    component: () => import('layouts/Login.vue'),
    children: [
      { path: '', component: () => import('pages/login/UsersLogin.vue') },
    ],
  },
  {
    path: '/admin',
    component: () => import('layouts/Admin.vue'),
    children: [
      { path: '', component: () => import('pages/admin/Index.vue') },
    ],
  },
  {
    path: '/admin/login',
    component: () => import('layouts/Login.vue'),
    children: [
      { path: '', component: () => import('pages/login/AdminLogin') },
    ],
  },
  {
    path: '/admin/projetos',
    component: () => import('layouts/Admin.vue'),
    children: [
      { path: '', component: () => import('pages/admin/projects/Projects.vue') },
      { path: 'adicionar', component: () => import('pages/admin/projects/CreateProject.vue') },
      { path: ':id', component: () => import('pages/admin/projects/EditProject.vue') },
    ],
  },
  {
    path: '/admin/categorias',
    component: () => import('layouts/Admin.vue'),
    children: [
      { path: '', component: () => import('pages/admin/categories/Categories.vue') },
    ],
  },
  {
    path: '/admin/posts',
    component: () => import('layouts/Admin.vue'),
    children: [
      { path: '', component: () => import('pages/admin/posts/Posts.vue') },
    ],
  },
  {
    path: '/admin/posts/comentarios',
    component: () => import('layouts/Admin.vue'),
    children: [
      { path: '', component: () => import('pages/admin/comments/Comments.vue') },
    ],
  },
  {
    path: '/admin/administradores',
    component: () => import('layouts/Admin.vue'),
    children: [
      { path: '', component: () => import('pages/admin/admin/AdminUsers.vue') },
      { path: 'adicionar', component: () => import('pages/admin/admin/CreateAdmin.vue') },
      { path: ':id', component: () => import('pages/admin/admin/EditAdmin.vue') },
    ],
  },
  {
    path: '/admin/leitores',
    component: () => import('layouts/Admin.vue'),
    children: [
      { path: '', component: () => import('pages/admin/readers/Readers.vue') },
    ],
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
