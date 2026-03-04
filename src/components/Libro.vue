<script setup>
defineProps({ libro: { type: Object, required: true } })
const emit = defineEmits(['eliminar'])
</script>

<template>
  <article style="border:1px solid #ddd; padding:12px; border-radius:8px;">
    <h3 style="margin:0 0 6px;">{{ libro.titulo }}</h3>
    <p style="margin:0;">Autor: <strong>{{ libro.autor }}</strong></p>
    <p style="margin:4px 0 0;">Categoría: <strong>{{ libro.categoria }}</strong></p>

    <div style="margin-top:10px; display:flex; gap:10px;">
      <RouterLink :to="`/libros/${libro.id}`">Ver detalle</RouterLink>
      <button @click="emit('eliminar', libro.id)">Eliminar</button>
    </div>
  </article>
</template>
