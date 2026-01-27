<template>
  <nav class="fixed top-0 w-full bg-white shadow-md z-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <div class="flex items-center space-x-2">
          <Car class="w-8 h-8 text-primary" />
          <span class="text-xl font-bold text-gray-800">Deep's Driving School</span>
        </div>
        
        <div class="hidden md:flex space-x-8">
          <router-link to="/" class="text-gray-600 hover:text-primary transition-colors">Home</router-link>
          <router-link to="/services" class="text-gray-600 hover:text-primary transition-colors">Services</router-link>
          <router-link to="/pricing" class="text-gray-600 hover:text-primary transition-colors">Pricing</router-link>
          <router-link to="/victoria-license-guide" class="text-gray-600 hover:text-primary transition-colors">Victoria License Guide</router-link>
          <router-link to="/contact" class="text-gray-600 hover:text-primary transition-colors">Contact</router-link>
        </div>
        
        <button class="btn-primary hidden md:block">
          Call Now: +61 430 191 324
        </button>
        
        <button @click="toggleMobileMenu" class="md:hidden">
          <Menu class="w-6 h-6" />
        </button>
      </div>
      
      <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t">
        <div class="flex flex-col space-y-4">
          <router-link to="/" class="text-gray-600 hover:text-primary">Home</router-link>
          <router-link to="/services" class="text-gray-600 hover:text-primary">Services</router-link>
          <router-link to="/pricing" class="text-gray-600 hover:text-primary">Pricing</router-link>
          <router-link to="/victoria-license-guide" class="text-gray-600 hover:text-primary">Victoria License Guide</router-link>
          <router-link to="/contact" class="text-gray-600 hover:text-primary">Contact</router-link>
          <button class="btn-primary">Call Now: +61 430 191 324</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { Car, Menu } from 'lucide-vue-next'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>
