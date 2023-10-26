<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Map from '@/components/MapView.vue';
</script>

<template>
    <div class="relative w-full">
        <img src="../../public/images/lunette_trailler.gif" alt="Photo animé présentant des lunettes"
            class="w-full h-full object-cover">
        <div class="absolute inset-0 flex items-center justify-center text-graywhite text-2xl font-semibold">
            <div class="text-center">
                <div>
                </div>
            </div>
        </div>
    </div>


    <div class="max-w-3xl mx-auto mt-52 ">
        <div class="flex">
            <div class="flex-1" style="margin-left: -30px; margin-right: 30px;">
                <p class="text-black">
                    Chez TaVue, nous croyons en l'élégance intemporelle et en l'authenticité française.
                    Notre philosophie est de vous offrir des lunettes qui reflètent votre personnalité tout en incarnant le
                    style raffiné, minimaliste et épuré qui nous caractérise.
                    Nous mettons le pouvoir de la création entre vos mains, car nous comprenons que chaque paire de lunettes
                    est une expression unique de votre individualité.
                </p>
            </div>

            <div class="flex-1" style="margin-right: 100px;">
                <img src="../../public/images/img_lunette_1.webp" alt="Image"
                    style="width: 855px; object-fit: cover; margin-left: auto; margin-right: 0;">
            </div>
        </div>
    </div>


    <div class="max-w-3xl mx-auto">
        <div class="flex">
            <div class="flex-1" style="margin-left: 100px;">
                <img src="../../public/images/img_lunette_2.webp" alt="Image"
                    style="width: 855px; object-fit: cover; margin-left: 0; margin-right: auto;">
            </div>

            <div class="flex-1" style="margin-right: -30px; margin-left: 30px;">
                <p class="text-black">
                    Chez TaVue, nous croyons en l'élégance intemporelle et en l'authenticité française.
                    Notre philosophie est de vous offrir des lunettes qui reflètent votre personnalité tout en incarnant le
                    style raffiné, minimaliste et épuré qui nous caractérise.
                    Nous mettons le pouvoir de la création entre vos mains, car nous comprenons que chaque paire de lunettes
                    est une expression unique de votre individualité.
                </p>
                <RouterLink to="/personnalisation" class=""><button
                        class="bg-greygreen hover:bg-greygreen text-graywhite font-bold py-2 px-4 mt-4">Créer ma
                        paire</button>
                </RouterLink>
            </div>
        </div>
    </div>

    <div class="text-center text-5xl mt-12 mb-12">
        <p class="text-bleu inline-block">Nos gammes de lunettes</p>
    </div>

    <div class="grid grid-cols-3 text-center gap-8 mt-5 mb-5">
        <div class="w-358 h-278 bg-graywhite text-black m-4 p-5">

            <p class="text-2xl font-medium">RB4147</p>
            <img src="../../public/images/modèle_RB4147.svg" alt="Image"
                style="width: 855px; object-fit: cover; margin-left: 0; margin-right: auto;">
        </div>
        <!-- Contenu du premier rectangle -->


        <div class="w-358 h-278 bg-graywhite text-black m-4 p-5 my-auto">
            <p class="text-2xl font-medium">WAYFARER</p>
            <img src="../../public/images/modèle_WAYFARER.svg" alt="Image"
                style="width: 855px; object-fit: cover; margin-left: 0; margin-right: auto;">
        </div>
        <!-- Contenu du deuxième rectangle -->

        <div class="w-358 h-278 bg-graywhite text-black m-4 p-5 my-auto">
            <p class="text-2xl font-medium">State Street</p>
            <img src="../../public/images/modèle_state_street.svg" alt="Image"
                style="width: 855px; object-fit: cover; margin-left: 0; margin-right: auto;">
        </div>
        <!-- Contenu du troisième rectangle -->
    </div>
    <div>
        <Map />
    </div>

    <p class="w-1157px h-116px text-3xl font-medium text-center text-black">Avis des clients</p>

    <div class="grid grid-cols-3 text-center gap-8 mt-5 mb-5">
        <div class="w-358 h-278 bg-greygreen text-graywhite m-4 p-5">
            <p class="text-2xl font-medium">Mattéo</p>
            <p class="mt-4 text-s font-medium">Super paire et livraison très rapide !</p>
            <!-- Contenu du premier rectangle -->
        </div>
        <div class="w-358 h-278 bg-greygreen text-graywhite m-4 p-5 my-auto">
            <p class="text-2xl font-medium">Lisandre</p>
            <p class="mt-4 text-s font-medium">Livraison rapide et lunette de très bonne qualité.</p>
            <!-- Contenu du deuxième rectangle -->
        </div>
        <div class="w-358 h-278 bg-greygreen text-graywhite m-4 p-5 my-auto">
            <p class="text-2xl font-medium">Lucas</p>
            <p class="mt-4 text-s font-medium">Je recommande sans hésiter !</p>
            <!-- Contenu du troisième rectangle -->
        </div>
    </div>
</template>

<style scoped></style>
