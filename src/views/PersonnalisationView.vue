<script>
export default {
  data() {
    return {
      selectedModel: {}, // Votre modèle par défaut
      models: [
        { id: 1, name: 'RB4147', img: 'path_to_image' },
        // ... autres modèles
      ],
      selectedMonture: '', // Votre monture par défaut
      montures: [
        'Menthe glacé', 'Ocre sacré', 'Marron B13', 'Clairvoyant', 'Minuit'
      ],
      // ... de même pour les branches et verres
    };
  },
  components: {
    CustomizationOption: {
      props: ['title', 'options', 'value'],
      template: `
        <div class="flex flex-col mr-4 mb-4">
          <h3 class="text-lg font-semibold mb-2">{{ title }}</h3>
          <div class="flex">
            <button v-for="option in options" :key="option" @click="$emit('input', option)" class="mr-2 p-2 border rounded">
              {{ option }}
            </button>
          </div>
        </div>
      `
    }
  }
};
</script>

<template>
  <div class="flex flex-col items-center p-6">
    <h1 class="text-2xl font-bold mb-6">Choisissez votre style</h1>
    <h2 class="text-xl mb-4">TaVue Project One</h2>

    <div class="flex mb-6">
      <img :src="selectedModel.img" alt="Modèle de lunette" class="w-32 h-24 mr-4">
      <div class="flex flex-col">
        <h3 class="text-lg font-semibold mb-2">Modèle</h3>
        <div class="flex">
          <button v-for="model in models" :key="model.id" @click="selectedModel = model" class="mr-2 p-2 border rounded">
            {{ model.name }}
          </button>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap justify-between w-full mb-6">
      <CustomizationOption title="Monture" :options="montures" v-model="selectedMonture" />
      <CustomizationOption title="Branches" :options="branches" v-model="selectedBranche" />
      <CustomizationOption title="Verre" :options="verres" v-model="selectedVerre" />
    </div>

    <div class="flex justify-between w-full">
      <span>-10% sur votre première commande</span>
      <div class="flex">
        <span class="mr-4">90€</span>
        <button class="bg-blue-500 text-white px-4 py-2 rounded">Ajouter au panier</button>
      </div>
    </div>
  </div>
</template>

<style>
/* Vous pouvez ajouter des styles spécifiques à Tailwind ici si nécessaire */
</style>
```