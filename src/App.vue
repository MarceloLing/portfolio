<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'

</script>

<template>

  <header>
    <div class="wrapper">

    </div>

  </header>
  <Navbar />
  <RouterView />
</template>

<style scoped>
.Sobre {
  text-align: center;
  padding: 50px;
  max-width: 100%;
  margin: auto;
}

h1 {
  color: #f5b800;
  font-family: 'Akaya Telivigala'
}
</style>
