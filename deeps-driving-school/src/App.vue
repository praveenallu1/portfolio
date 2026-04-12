<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] bg-white text-gray-900 px-4 py-2 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-white"
    >
      Skip to content
    </a>
    <Navbar />
    <main id="main-content" class="flex-1" tabindex="-1">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>
