<template>
  <header style="display:flex; gap:12px; align-items:center; padding:16px; border-bottom:1px solid #ddd;">
    <strong>BookList SPA</strong>
    <nav style="display:flex; gap:10px;">
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/libros">Libros</RouterLink>
    </nav>
  </header>

  <main style="padding:16px;">
    <RouterView />
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
