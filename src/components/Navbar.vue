<template>


  <nav style="background-color:#043055; text-align: center;">
    <div class="container-fluid">

      <ul class="nav navbar-nav" style="text-align: center;">
        <li>
          <RouterLink to="/"><strong><span style="color:#f5b800">Quem Sou</span></strong></RouterLink>
        </li>
        <li>
          <RouterLink to="/OQueFaco"><strong><span style="color:#f5b800">O que Faço</span></strong></RouterLink>
        </li>
        <li>
          <RouterLink to="/Hobbies"><strong><span style="color:#f5b800">Hobbies</span></strong></RouterLink>
        </li>
      </ul>
    </div>
  </nav>


</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const menuAberto = ref(false)
</script>
