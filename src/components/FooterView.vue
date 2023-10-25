<script setup>
 
</script>

<template>
  <div class="footer-container bg-graywhite text-black p-16 flex items-center justify-between">
    <div class="flex flex-col"> <!-- Conteneur pour le logo et les icônes -->
      <!-- Logo au-dessus à gauche -->
      <div class="footer-logo mb-24">
        <img src="../../public/images/LOGO_Noir.svg" alt="Logo dans le pied de page" class="w-40 h-auto" />
      </div>

      <!-- Icônes Instagram, Twitter et Facebook alignées sous le logo -->
      <div class="footer-social-icons flex space-x-4">
        <a href="https://instagram.com" class="footer-icon">
          <img src="../../public/images/icon-instagram.svg" alt="Instagram" class="w-10 h-auto" />
        </a>
        <a href="https://facebook.com" class="footer-icon">
          <img src="../../public/images/icon-facebook.svg" alt="Facebook" class="w-10 h-auto" />
        </a>
        <a href="https://twitter.com" class="footer-icon">
          <img src="../../public/images/icon-twitter.svg" alt="Twitter" class="w-10 h-auto" />
        </a>
      </div>
    </div>
    
    <!-- Liens cliquables au milieu alignés horizontalement -->
    <div class="footer-links flex flex-row space-x-64"> <!-- Ajustez space-x-6 pour un espacement plus large -->
      <div class="footer-links-left flex flex-col space-y-2"> <!-- Ajustez space-y-2 -->
        <p class="text-lg font-bold">Navigation</p>
        <a href="/your-link" class="text-left text-black">Accueil</a>
        <a href="/your-link" class="text-left text-black">Votre création</a>
        <a href="/your-link" class="text-left text-black">Collection</a>
      </div>

      <div class="footer-links-center flex flex-col space-y-2"> <!-- Ajustez space-y-2 -->
        <p class="text-lg font-bold">Légal</p>
        <a href="/another-link" class="text-left text-black">Politique de confidentialité</a>
        <a href="/another-link" class="text-left text-black">Termes & Conditions</a>
        <a href="/another-link" class="text-left text-black">Mentions légales</a>
        <a href="/another-link" class="text-left text-black">Données personnelles</a>
        <a href="/another-link" class="text-left text-black">Cookies</a>
      </div>

      <div class="footer-links-right flex flex-col space-y-2"> <!-- Ajustez space-y-2 -->
        <p class="text-lg font-bold">Livraisons & Paiement</p>
        <a href="/another-link" class="text-left text-black">Fabriquer et livré depuis la France</a>
        <a href="/another-link" class="text-left text-black">Avis Client</a>
        <a href="/another-link" class="text-left text-black">Livraisons & Écologie</a>
        <a href="/another-link" class="text-left text-black">Facture</a>
        <a href="/another-link" class="text-left text-black">Option de paiement</a>
        <a href="/another-link" class="text-left text-black">Frais de port</a>
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