import { ref, watch } from 'vue'

const librosIniciales = JSON.parse(localStorage.getItem('libros')) || [
  {
    id: 1,
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    categoria: 'Ficción',
    descripcion: 'Una novela emblemática de la literatura latinoamericana.'
  },
  {
    id: 2,
    titulo: 'Don Quijote de la Mancha',
    autor: 'Miguel de Cervantes',
    categoria: 'Historia',
    descripcion: 'Una obra clásica de la literatura en español.'
  }
]

export const libros = ref(librosIniciales)

watch(
  libros,
  (nuevoValor) => {
    localStorage.setItem('libros', JSON.stringify(nuevoValor))
  },
  { deep: true }
)