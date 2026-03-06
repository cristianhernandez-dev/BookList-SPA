<script setup>
import { ref } from 'vue'
import FormLibro from '../components/FormLibro.vue'
import Libro from '../components/Libro.vue'

const libros = ref([
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
])

const agregarLibro = (libro) => {
  libros.value.push(libro)
}

const eliminarLibro = (id) => {
  libros.value = libros.value.filter(libro => libro.id !== id)
}
</script>

<template>
  <section>
    <FormLibro @agregar-libro="agregarLibro" />

    <h2 class="titulo-lista">Listado de libros</h2>

    <p v-if="libros.length === 0" class="sin-libros">
      No hay libros disponibles.
    </p>

    <div v-else class="grid-libros">
      <Libro
        v-for="libro in libros"
        :key="libro.id"
        :libro="libro"
        @eliminar="eliminarLibro"
      />
    </div>
  </section>
</template>

<style scoped>
.titulo-lista {
  text-align: center;
  margin: 30px 0 20px;
}

.sin-libros {
  text-align: center;
  color: #777;
}

.grid-libros {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
}
</style>
