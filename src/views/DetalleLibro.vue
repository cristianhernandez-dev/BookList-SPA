<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { buscarLibroPorId } from '../data/librosStore'

const route = useRoute()
const id = computed(() => route.params.id)

const libro = computed(() => buscarLibroPorId(id.value))
</script>

<template>
  <section>
    <h1>Detalle del libro</h1>

    <p v-if="!libro">
      No existe un libro con ID <strong>{{ id }}</strong>.
    </p>

    <div v-else style="border:1px solid #ddd; padding:12px; border-radius:8px; max-width:720px;">
      <h2 style="margin-top:0;">{{ libro.titulo }}</h2>
      <p>Autor: <strong>{{ libro.autor }}</strong></p>
      <p>Categoría: <strong>{{ libro.categoria }}</strong></p>
      <p v-if="libro.descripcion">Descripción: {{ libro.descripcion }}</p>
      <p v-show="!libro.descripcion" style="opacity:.7;">Sin descripción</p>
    </div>

    <p style="margin-top:12px;">
      <RouterLink to="/libros">← Volver a la lista</RouterLink>
    </p>
  </section>
</template>
