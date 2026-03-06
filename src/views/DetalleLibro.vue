<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { libros } from '../data/libros'

const route = useRoute()

const libro = computed(() =>
  libros.value.find((l) => l.id === Number(route.params.id))
)
</script>

<template>
  <section class="detalle">
    <h2>Detalle del libro</h2>

    <div v-if="libro" class="card-detalle">
      <p><strong>Título:</strong> {{ libro.titulo }}</p>
      <p><strong>Autor:</strong> {{ libro.autor }}</p>
      <p><strong>Categoría:</strong> {{ libro.categoria }}</p>
      <p><strong>Descripción:</strong> {{ libro.descripcion }}</p>
    </div>

    <p v-else>No se encontró el libro.</p>

    <router-link to="/libros" class="volver">
      Volver a la lista
    </router-link>
  </section>
</template>

<style scoped>
.detalle {
  text-align: center;
  padding: 30px 20px;
}

.card-detalle {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  background: #f8f9fb;
  border: 1px solid #e5e7eb;
  text-align: left;
}

.card-detalle p {
  margin: 10px 0;
}

.volver {
  display: inline-block;
  margin-top: 20px;
  text-decoration: none;
  background-color: #42b883;
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
}

.volver:hover {
  background-color: #369b6e;
}
</style>
