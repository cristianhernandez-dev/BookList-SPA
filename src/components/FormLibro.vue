<script setup>
import { reactive } from 'vue'
const emit = defineEmits(['agregar'])

const form = reactive({
  titulo: '',
  autor: '',
  categoria: 'Ficción',
  descripcion: '',
})

function limpiar() {
  form.titulo = ''
  form.autor = ''
  form.categoria = 'Ficción'
  form.descripcion = ''
}

function enviar() {
  const titulo = form.titulo.trim()
  const autor = form.autor.trim()
  if (!titulo || !autor) return

  emit('agregar', {
    titulo,
    autor,
    categoria: form.categoria,
    descripcion: form.descripcion.trim(),
  })

  limpiar()
}
</script>

<template>
  <form @submit.prevent="enviar" style="display:grid; gap:10px; max-width:520px;">
    <label>
      Título
      <input v-model="form.titulo" @keyup.enter="enviar" placeholder="Ej: Clean Code" />
    </label>

    <label>
      Autor
      <input v-model="form.autor" @keyup.enter="enviar" placeholder="Ej: Robert C. Martin" />
    </label>

    <label>
      Categoría
      <select v-model="form.categoria">
        <option>Ficción</option>
        <option>No ficción</option>
        <option>Educación</option>
        <option>Historia</option>
        <option>Tecnología</option>
        <option>Novela</option>
        <option>Autoayuda</option>
      </select>
    </label>

    <label>
      Descripción (opcional)
      <textarea v-model="form.descripcion" rows="3" placeholder="Notas..."></textarea>
    </label>

    <div style="display:flex; gap:8px;">
      <button type="submit">Agregar</button>
      <button type="button" @click.once="limpiar">Limpiar (once)</button>
    </div>

    <small style="opacity:.75;">
      Vista previa reactiva: {{ form.titulo }} / {{ form.autor }} / {{ form.categoria }}
    </small>
  </form>
</template>

<style scoped>
input, select, textarea { width: 100%; padding: 8px; margin-top: 4px; }
button { padding: 8px 12px; }
label { font-size: 14px; }
</style>