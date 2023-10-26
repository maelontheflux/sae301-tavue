<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header class="bg-graywhite text-black py-4">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex items-center">
        <RouterLink to="/" class="text-left text-black"><img src="/images/LOGO_Noir.svg" alt="Logo" class=" w-28 h-auto "></RouterLink>
      </div>
      <div class="flex space-x-4">
        <RouterLink to="/" class="">Accueil</RouterLink>
        <RouterLink to="/personnalisation" class="">Votre création</RouterLink>
        <RouterLink to="#" class="">Collection</RouterLink>
      </div>
      <div class="flex items-center space-x-4">
        <div class="relative group">
          <RouterLink to="#" class=""><img src="/images/panier-icon.svg" alt="icon d'un panier" class=" w-8 h-auto "></RouterLink>

        </div>
        <div class="flex items-center space-x-2">
          <RouterLink to="/login" class=""><img src="/images/user-icon.svg" alt="icon d'utilisateur" class=" w-8 h-auto "></RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>