<template>
  <div class="app-container">
    <header class="app-header">
      <h1>BookList SPA</h1>
      <p>Gestor interactivo de libros con Vue</p>

      <nav class="navbar">
        <router-link to="/">Inicio</router-link>
        <router-link to="/libros">Lista de Libros</router-link>
      </nav>
    </header>

    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f4f6f8;
  color: #333;
}

* {
  box-sizing: border-box;
}

#app {
  width: 100%;
}

.app-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 24px;
}

.app-header {
  text-align: center;
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  margin-bottom: 24px;
}

.app-header h1 {
  margin: 0 0 8px;
}

.app-header p {
  margin: 0 0 18px;
  color: #666;
}

.navbar {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.navbar a {
  text-decoration: none;
  background-color: #42b883;
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  transition: 0.3s;
}

.navbar a:hover {
  background-color: #369b6e;
}

.navbar .router-link-exact-active {
  background-color: #2c8f67;
}

.main-content {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}
</style>
