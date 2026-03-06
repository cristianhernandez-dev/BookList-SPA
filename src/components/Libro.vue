<script setup>
defineProps({
  libro: Object
})

const emit = defineEmits(['eliminar'])
</script>

<template>
  <article class="libro-card">
    <h3>{{ libro.titulo }}</h3>
    <p><strong>Autor:</strong> {{ libro.autor }}</p>
    <p><strong>Categoría:</strong> {{ libro.categoria }}</p>
    <p v-show="libro.descripcion">
      <strong>Descripción:</strong> {{ libro.descripcion }}
    </p>

    <div class="acciones">
      <router-link :to="`/libros/${libro.id}`" class="btn-detalle">
        Ver detalle
      </router-link>

      <button class="btn-eliminar" @click="$emit('eliminar', libro.id)">
        Eliminar
      </button>
    </div>
  </article>
</template>

<style scoped>
.libro-card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.libro-card h3 {
  margin-top: 0;
  color: #2c3e50;
}

.libro-card p {
  margin: 8px 0;
  color: #555;
}

.acciones {
  margin-top: 16px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.btn-detalle,
.btn-eliminar {
  text-decoration: none;
  border: none;
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  font-size: 14px;
}

.btn-detalle {
  background-color: #42b883;
  color: white;
}

.btn-detalle:hover {
  background-color: #369b6e;
}

.btn-eliminar {
  background-color: #e74c3c;
  color: white;
}

.btn-eliminar:hover {
  background-color: #c0392b;
}
</style>
