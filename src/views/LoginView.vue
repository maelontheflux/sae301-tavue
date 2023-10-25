<script setup>
</script>

<template>
<body>
    <div class="flex justify-center items-center h-screen">
        <div class="flex space-x-4">
            <div class="max-w-md p-4 bg-graywhite">
                <h2 class="text-2xl font-semibold mb-4">Se Connecter</h2>
                <p class="text-sm text-black mb-4">Si vous avez un compte, connectez-vous avec votre adresse mail.</p>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-black">Mail</label>
                    <input class="w-full px-3 py-2 rounded-md border border-greygreen bg-graywhite" type="text">
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-black">Mot de passe</label>
                    <input class="w-full px-3 py-2 rounded-md border border-greygreen bg-graywhite" type="password">
                </div>
                <div class="flex items-center justify-between">
                    <button class="w-24 bg-greygreen text-graywhite py-2 hover:bg-greygreen">Connexion</button>
                    <p class="text-sm text-gray-500">
                        <a href="#">Mot de passe oublié ?</a>
                    </p>
                </div>
                <!-- Bouton "Connexion avec Google" -->
                <button class="w-full bg-greygreen text-graywhite py-2 mt-4 hover:bg-greygreen">Connexion avec Google</button>
            </div>
            
            <div class="max-w-md p-4 bg-graywhite">
                <h2 class="text-2xl font-semibold mb-4">Nouveau client ?</h2>
                <p class="text-sm text-black mb-4">La création d'un compte présente de nombreux avantages !</p>

                <div class="mb-4">
                    <label class="block text-sm font-medium text-black">Nom</label>
                    <input class="w-full px-3 py-2 rounded-md border border-greygreen bg-graywhite" type="text">
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-black">Mail</label>
                    <input class="w-full px-3 py-2 rounded-md border border-greygreen bg-graywhite" type="text">
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-black">Mot de passe</label>
                    <input class="w-full px-3 py-2 rounded-md border border-greygreen bg-graywhite" type="password">
                </div>
                <button class="w-full bg-greygreen text-graywhite py-2 hover:bg-greygreen">Inscription</button>
                   <!-- Bouton "Connexion avec Google" -->
                   <button class="w-full bg-greygreen text-graywhite py-2 mt-4 hover:bg-greygreen">Connexion avec Google</button>
            </div>
        </div>
    </div>
</body>
</template>