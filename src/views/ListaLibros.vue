<script setup>
import { computed, ref } from 'vue'
import FormLibro from '../components/FormLibro.vue'
import Libro from '../components/Libro.vue'

import { libros, agregarLibro, eliminarLibro } from '../data/librosStore'

const filtro = ref('')

const librosFiltrados = computed(() => {
  const q = filtro.value.trim().toLowerCase()
  if (!q) return libros.value
  return libros.value.filter(l =>
    l.autor.toLowerCase().includes(q) || l.categoria.toLowerCase().includes(q)
  )
})
</script>

<template>
  <section>
    <h1>Lista de libros</h1>

    <div style="margin:12px 0;">
      <label>
        Filtrar por autor o categoría:
        <input v-model="filtro" placeholder="Ej: ficción, historia, robert..." />
      </label>
    </div>

    <FormLibro @agregar="agregarLibro" />

    <hr style="margin:18px 0;" />

    <p v-if="librosFiltrados.length === 0">
      No hay libros disponibles (o el filtro no encontró resultados).
    </p>

    <div v-else style="display:grid; gap:12px; max-width:720px;">
      <Libro
        v-for="libro in librosFiltrados"
        :key="libro.id"
        :libro="libro"
        @eliminar="eliminarLibro"
      />
    </div>
  </section>
</template>

<style scoped>
input { width: 100%; max-width:520px; padding: 8px; margin-top: 4px; }
</style>
