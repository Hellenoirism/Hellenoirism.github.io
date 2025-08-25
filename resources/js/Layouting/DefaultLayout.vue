<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="relative min-h-screen w-full">
    <!-- Background image -->
    <div 
      class="absolute inset-0 bg-cover bg-center" 
      style="background-image: url('/img/logopiece.jfif');">
    </div>

    <!-- Content layer -->
    <div class="relative backdrop-blur-lg min-h-screen w-full z-10 flex flex-col">
      <Header />
      <main class="flex-1">
        <router-view />
      </main>
      <Footer />
    </div>
  </div>
</template>
