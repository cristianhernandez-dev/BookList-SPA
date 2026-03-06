<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['agregar-libro'])

const nuevoLibro = reactive({
  titulo: '',
  autor: '',
  categoria: '',
  descripcion: ''
})

const agregarLibro = () => {
  if (!nuevoLibro.titulo.trim() || !nuevoLibro.autor.trim() || !nuevoLibro.categoria.trim()) {
    alert('Completa los campos obligatorios.')
    return
  }

  emit('agregar-libro', {
    id: Date.now(),
    titulo: nuevoLibro.titulo,
    autor: nuevoLibro.autor,
    categoria: nuevoLibro.categoria,
    descripcion: nuevoLibro.descripcion
  })

  nuevoLibro.titulo = ''
  nuevoLibro.autor = ''
  nuevoLibro.categoria = ''
  nuevoLibro.descripcion = ''
}
</script>

<template>
  <section class="form-section">
    <h2>Agregar libro</h2>

    <form class="form-libro" @submit.prevent="agregarLibro">
      <input
        v-model="nuevoLibro.titulo"
        type="text"
        placeholder="Título del libro"
        @keyup.enter="agregarLibro"
      />

      <input
        v-model="nuevoLibro.autor"
        type="text"
        placeholder="Autor"
      />

      <select v-model="nuevoLibro.categoria">
        <option disabled value="">Seleccione una categoría</option>
        <option>Ficción</option>
        <option>No Ficción</option>
        <option>Historia</option>
        <option>Ciencia</option>
        <option>Educación</option>
        <option>Derecho de Familia</option>
        <option>Novela</option>
      </select>

      <textarea
        v-model="nuevoLibro.descripcion"
        rows="4"
        placeholder="Descripción del libro"
      ></textarea>

      <button type="submit">Agregar libro</button>
    </form>

    <div class="preview">
      <h3>Vista previa</h3>
      <p><strong>Título:</strong> {{ nuevoLibro.titulo }}</p>
      <p><strong>Autor:</strong> {{ nuevoLibro.autor }}</p>
      <p><strong>Categoría:</strong> {{ nuevoLibro.categoria }}</p>
      <p><strong>Descripción:</strong> {{ nuevoLibro.descripcion }}</p>
    </div>
  </section>
</template>

<style scoped>
.form-section {
  margin-bottom: 30px;
}

.form-section h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-libro {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 600px;
  margin: 0 auto 24px;
}

.form-libro input,
.form-libro select,
.form-libro textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
}

.form-libro button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  font-size: 15px;
}

.form-libro button:hover {
  background-color: #369b6e;
}

.preview {
  max-width: 600px;
  margin: 0 auto;
  background-color: #f8f9fb;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 16px;
}

.preview h3 {
  margin-top: 0;
}
</style>
