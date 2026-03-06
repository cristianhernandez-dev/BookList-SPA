<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <section class="detalle">
    <h2>Detalle del libro</h2>
    <p><strong>ID del libro:</strong> {{ route.params.id }}</p>

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
