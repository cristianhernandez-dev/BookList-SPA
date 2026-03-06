<template>
  <section class="inicio">
    <h2>Bienvenido a BookList</h2>
    <p>
      Administra tu catálogo de libros de forma simple, interactiva y ordenada.
    </p>

    <router-link to="/libros" class="btn-ir">
      Ver libros
    </router-link>
  </section>
</template>

<style scoped>
.inicio {
  text-align: center;
  padding: 40px 20px;
}

.inicio h2 {
  margin-bottom: 12px;
}

.inicio p {
  max-width: 600px;
  margin: 0 auto 20px;
  color: #666;
  line-height: 1.6;
}

.btn-ir {
  display: inline-block;
  text-decoration: none;
  background-color: #42b883;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  transition: 0.3s;
}

.btn-ir:hover {
  background-color: #369b6e;
}
</style>
