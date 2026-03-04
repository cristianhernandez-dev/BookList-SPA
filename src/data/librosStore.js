import { ref } from 'vue'

export const libros = ref([
  {
    id: 1,
    titulo: 'El Principito',
    autor: 'Antoine de Saint-Exupéry',
    categoria: 'Ficción',
    descripcion: 'Clásico breve.',
  },
])

export function agregarLibro(nuevo) {
  const id = Date.now()
  libros.value.push({ id, ...nuevo })
}

export function eliminarLibro(id) {
  libros.value = libros.value.filter(l => l.id !== id)
}

export function buscarLibroPorId(id) {
  return libros.value.find(l => String(l.id) === String(id))
}
