<script setup>
import { onMounted, ref } from 'vue';

// Import pocketbase
import PocketBase from 'pocketbase'
// Objet pocketBase
var pocketbase_ip = "";
if (import.meta.env.MODE === "production")
pocketbase_ip = "https://tavue.maelgrosjean.fr:443/";
else pocketbase_ip = "http://127.0.0.1:8090/";
const pb = new PocketBase(pocketbase_ip);

const currentUser = ref();
const username = ref("");
const password = ref("");
const fullName = ref("");

const loginMode = ref(true);

onMounted(async () => {

  pb.authStore.onChange(() => {
    currentUser.value = pb.authStore.model;
  }, true);
});

const doLogout = () => {
  pb.authStore.clear();
  currentUser.value = null;
};

const doLogin = async () => {
  try {
    const authData = await pb.collection('users').authWithPassword(username.value, password.value);
    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);
    console.log(pb.authStore.model);
  } catch (error) {
    alert(error.message);
  }
};

const doCreateAccount = async () => {
  try {
    const data = {
      "username": `user_${self.crypto.randomUUID().split("-")[0]}`,
      "email": username.value,
      "emailVisibility": true,
      "password": password.value,
      "passwordConfirm": password.value,
      "name": fullName.value,
    };

    const record = await pb.collection('users').create(data);
    await doLogin();
  } catch (error) {
    alert(error.message);
  }
};

const doGoogleLogin = async () => {
  await pb.collection("users").authWithOAuth2({ provider: "google" });
      if (pb.authStore.isValid) {
        document.getElementById("status").innerHTML = "You are now logged in";
        connected = true;
        currentUser = pb.authStore.model;
      }
};

const doGitHubLogin = async () => {
  await pb.collection("users").authWithOAuth2({ provider: "github" });
      if (pb.authStore.isValid) {
        document.getElementById("status").innerHTML = "You are now logged in";
        connected = true;
        currentUser = pb.authStore.model;
  }
};
</script>


<template>
  <div class="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div v-if="currentUser">
        <h1>Welcome {{ currentUser?.name }}</h1>
        <div>
          <button type="button" @click="doLogout"
            class="bg-greygreen px-3 py-2 text-sm font-semibold text-graygraywhite shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-greygreen">Logout</button>
        </div>
      </div>
      <div v-else>
        <h1>{{ loginMode ? "LOGIN" : "CREATE ACCOUNT" }}</h1>
        <div class="sm:col-span-2 sm:col-start-1 mt-4">
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Email Address</label>
          <div class="mt-2">
            <input v-model="username" type="text" name="username" id="username" autocomplete="none"
              placeholder="Enter Email Address "
              class="px-2 block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-greygreen sm:text-sm sm:leading-6">
          </div>
        </div>
        <div class="sm:col-span-2 sm:col-start-1 mt-2">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div class="mt-2">
            <input v-model="password" type="password" name="password" id="password" autocomplete="none"
              placeholder="Enter Password "
              class="px-2 block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-greygreen sm:text-sm sm:leading-6">
          </div>
        </div>
        <div v-if="loginMode">
          <div class="sm:col-span-2 sm:col-start-1 mt-2">
            <button type="button" @click="doLogin"
              class="mr-3 bg-greygreen px-3 py-2 text-sm font-semibold text-graywhite shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-greygreen">Login</button>

            <button type="button" @click="loginMode = false"
              class="bg-greygreen px-3 py-2 text-sm font-semibold text-graywhite shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-greygreen">Créer
              Compte</button>
          </div>
        </div>
        <div v-else>
          <div class="sm:col-span-2 sm:col-start-1 mt-2">
            <label for="fullName" class="block text-sm font-medium leading-6 text-gray-900">Nom</label>
            <div class="mt-2">
              <input v-model="fullName" type="text" name="fullName" id="fullName" autocomplete="none"
                placeholder="Enter Full Name "
                class="px-2 block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-greygreen sm:text-sm sm:leading-6">
            </div>
          </div>
          <div class="sm:col-span-2 sm:col-start-1 mt-2">
            <button type="button" @click="doCreateAccount"
              class="mr-3 bg-greygreen px-3 py-2 text-sm font-semibold text-graywhite shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-greygreen">Enregistrer
              nouvel utilisateur</button>

            <button type="button" @click="loginMode = true"
              class="bg-red-600 px-3 py-2 text-sm font-semibold text-graywhite shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Annuler</button>
          </div>
        </div>

        <!-- Bouton de connexion Google -->
        <div class="sm:col-span-2 sm:col-start-1 mt-2">
          <div
            class="w-full py-2 px-4 bg-greygreen hover:bg-blanc text-graywhite font-semibold border border-blanc hover:text-noir flex items-center justify-start">
            <img class="w-8 h-8 mr-2" src="/images/google.svg" alt="icone google">
            <button type="button" @click="doGoogleLogin" class="w-full flex items-center justify-start text-graywhite">Se
              connecter avec Google</button>
          </div>
        </div>

        <!-- Bouton de connexion GitHub -->
        <div class="sm:col-span-2 sm:col-start-1 mt-2">
          <div
            class="w-full py-2 px-4 bg-greygreen hover:bg-blanc text-graywhite font-semibold border border-blanc hover:text-noir flex items-center justify-start">
            <img class="w-8 h-8 mr-2" src="/images/github.svg" alt="GitHub">
            <button type="button" @click="doGitHubLogin"
              class="w-full flex items-center justify-start text-graywhite">Connectez-vous avec GitHub</button>
          </div>
        </div>



      </div>
    </div>
</div></template>