import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import ListaLibros from '../views/ListaLibros.vue'
import CatalogoLibros from '../views/CatalogoLibros.vue'
import DetalleLibro from '../views/DetalleLibro.vue'

const routes = [
  {
    path: '/',
    component: InicioView
  },
  {
    path: '/catalogo',
    component: CatalogoLibros
  },
  {
    path: '/libros',
    component: ListaLibros
  },
  {
    path: '/libros/:id',
    component: DetalleLibro,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router