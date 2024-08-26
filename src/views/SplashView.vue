<script setup lang="ts">
import sm_background from '@/assets/images/sm_background.png';
import rick_and_morty from '@/assets/images/rick_and_morty_logo.png';
</script>

<template>
  <section class="splash_wrapper bg-dark">
    <img :src="sm_background" alt="">
    <div class="splash_wrapper__overlay"></div>
    <section class="splash_wrapper__info">
      <img :src="rick_and_morty" alt="">
      <h1 class="lg">Bienvenido a Rick and Morty</h1>
      <p class="text-small">En esta prueba, evaluaremos su capacidad para construir la aplicación mediante el análisis de código y la
        reproducción del siguiente diseño.</p>
      <button @click="$router.push('/home')" class="bg-primary text-small primary-button">Continuar</button>
    </section>
  </section>
</template>

<style scoped lang="scss">
.splash_wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;


  > img {
    object-fit: contain;
    width: 100%;
    height: 100vh;
  }

  &__overlay {
    background: rgba(0, 0, 0, 0.6);
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 2;
    position: fixed;
  }

  &__info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    font-size: 3rem;
    z-index: 3;

    > img {
      width: 600px;
      animation: slowScale 5s infinite ease-in-out;
    }
  }

  @keyframes slowScale {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05); /* Slightly larger */
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>
