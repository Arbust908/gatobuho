import NotFound from './views/NotFound.vue';
import Home from './views/Index.vue';
import Precio from './views/Precio.vue';
import Contacto from './views/Contacto.vue';

export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/precio', component: Precio, meta: { title: 'Precio' } },
  { path: '/contacto', component: Contacto, meta: { title: 'Contacto' } },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    meta: { title: 'Page not found' },
  },
];
