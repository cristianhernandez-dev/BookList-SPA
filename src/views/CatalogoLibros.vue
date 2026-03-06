<script setup>
import Libro from '../components/Libro.vue'
import { libros } from '../data/libros'

const eliminarLibro = (id) => {
  libros.value = libros.value.filter(libro => libro.id !== id)
}
</script>

<template>
  <section>
    <h2 class="titulo-lista">Catálogo de libros</h2>

    <p v-if="libros.length === 0" class="sin-libros">
      No hay libros disponibles.
    </p>

    <transition-group
      v-else
      name="lista"
      tag="div"
      class="grid-libros"
    >
      <Libro
        v-for="libro in libros"
        :key="libro.id"
        :libro="libro"
        @eliminar="eliminarLibro"
      />
    </transition-group>
  </section>
</template>

<style scoped>
.titulo-lista {
  text-align: center;
  margin: 10px 0 25px;
}

.sin-libros {
  text-align: center;
  color: #777;
}

.grid-libros {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  margin-top: 10px;
}

.lista-enter-active,
.lista-leave-active {
  transition: all 0.35s ease;
}

.lista-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.lista-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
