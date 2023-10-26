<script setup>
 import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="footer-container bg-graywhite text-black p-16 flex items-center justify-between">
    <div class="flex flex-col"> <!-- Conteneur pour le logo et les icônes -->
      <!-- Logo au-dessus à gauche -->
      <div class="footer-logo mb-24">
        <RouterLink to="/" class="text-left text-black"><img src="/images/LOGO_Noir.svg" alt="Logo dans le pied de page" class="w-40 h-auto" /></RouterLink>
      </div>

      <!-- Icônes Instagram, Twitter et Facebook alignées sous le logo -->
      <div class="footer-social-icons flex space-x-4">
        <a href="https://instagram.com" class="footer-icon">
          <img src="/images/icon-instagram.svg" alt="Instagram" class="w-10 h-auto" />
        </a>
        <a href="https://facebook.com" class="footer-icon">
          <img src="/images/icon-facebook.svg" alt="Facebook" class="w-10 h-auto" />
        </a>
        <a href="https://twitter.com" class="footer-icon">
          <img src="/images/icon-twitter.svg" alt="Twitter" class="w-10 h-auto" />
        </a>
      </div>
    </div>
    
    <!-- Liens cliquables au milieu alignés horizontalement -->
    <div class="footer-links flex flex-row space-x-64"> <!-- Ajustez space-x-6 pour un espacement plus large -->
      <div class="footer-links-left flex flex-col space-y-2"> <!-- Ajustez space-y-2 -->
        <p class="text-lg font-bold">Navigation</p>
        <RouterLink to="/" class="text-left text-black">Accueil</RouterLink>
        <RouterLink to="/personnalisation" class="text-left text-black">Votre création</RouterLink>
        <RouterLink to="#" class="text-left text-black">Collection</RouterLink>
      </div>

      <div class="footer-links-center flex flex-col space-y-2"> <!-- Ajustez space-y-2 -->
        <p class="text-lg font-bold">Légal</p>
        <RouterLink to="#" class="text-left text-black">Politique de confidentialité</RouterLink>
        <RouterLink to="#" class="text-left text-black">Termes & Conditions</RouterLink>
        <RouterLink to="#" class="text-left text-black">Mentions légales</RouterLink>
        <RouterLink to="#" class="text-left text-black">Données personnelles</RouterLink>
        <RouterLink to="#" class="text-left text-black">Cookies</RouterLink>
      </div>

      <div class="footer-links-right flex flex-col space-y-2"> <!-- Ajustez space-y-2 -->
        <p class="text-lg font-bold">Livraisons & Paiement</p>
        <RouterLink to="#" class="text-left text-black">Fabriquer et livré depuis la France</RouterLink>
        <RouterLink to="#" class="text-left text-black">Avis Client</RouterLink>
        <RouterLink to="#" class="text-left text-black">Livraisons & Écologie</RouterLink>
        <RouterLink to="#" class="text-left text-black">Facture</RouterLink>
        <RouterLink to="#" class="text-left text-black">Option de paiement</RouterLink>
        <RouterLink to="#" class="text-left text-black">Frais de port</RouterLink>

      </div>
    </div>

    <!-- Espace vide pour respecter la mise en forme -->
    <div></div>
  </div>
</template>

<script>
export default {
name: 'FooterView'
// Vous pouvez ajouter des méthodes, des données, etc. ici si nécessaire.
}
</script>

<style scoped>
/* Vous pouvez ajouter des styles CSS supplémentaires ici si nécessaire. */
</style>