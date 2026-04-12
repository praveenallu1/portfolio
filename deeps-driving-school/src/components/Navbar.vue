<template>
  <nav
    class="fixed top-0 w-full z-50 border-b border-gray-200/70 bg-white/90 backdrop-blur shadow-sm"
    aria-label="Primary"
    @keydown.esc="closeMobileMenu"
  >
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <router-link to="/" class="flex items-center space-x-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white">
          <img
            src="/images/hero/515245978_1304293228367403_8546177120491534100_n.jpg"
            alt="Deep's Driving School"
            class="h-10 w-auto object-contain"
            width="160"
            height="40"
            decoding="async"
          >
          <span class="text-xl font-bold text-gray-800 hidden sm:block">Deep's Driving School</span>
          <span class="text-xl font-bold text-gray-800 sm:hidden">DDS</span>
        </router-link>
        
        <div class="hidden lg:flex space-x-6">
          <router-link
            to="/"
            class="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            exact-active-class="text-primary font-semibold"
          >
            Home
          </router-link>
          <router-link
            to="/about"
            class="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            exact-active-class="text-primary font-semibold"
          >
            About
          </router-link>
          <router-link
            to="/services"
            class="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            exact-active-class="text-primary font-semibold"
          >
            Services
          </router-link>
          <router-link
            to="/pricing"
            class="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            exact-active-class="text-primary font-semibold"
          >
            Pricing
          </router-link>
          <router-link
            to="/victoria-license-guide"
            class="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            exact-active-class="text-primary font-semibold"
          >
            License Guide
          </router-link>
          <router-link
            to="/contact"
            class="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            exact-active-class="text-primary font-semibold"
          >
            Contact
          </router-link>
        </div>
        
        <a
          href="tel:+61430191324"
          class="btn-primary hidden lg:inline-flex items-center text-sm px-4 py-2 whitespace-nowrap"
        >
          Call 0430 191 324
        </a>
        
        <button
          type="button"
          @click="toggleMobileMenu"
          class="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          :aria-expanded="mobileMenuOpen"
          aria-controls="mobile-menu"
        >
          <span class="sr-only">{{ mobileMenuOpen ? 'Close menu' : 'Open menu' }}</span>
          <Menu v-if="!mobileMenuOpen" class="w-6 h-6" aria-hidden="true" />
          <X v-else class="w-6 h-6" aria-hidden="true" />
        </button>
      </div>
      
      <div v-if="mobileMenuOpen" id="mobile-menu" class="lg:hidden pb-4 border-t border-gray-200/70">
        <div class="flex flex-col pt-4 space-y-1">
          <router-link
            to="/"
            class="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            exact-active-class="text-primary font-semibold"
            @click="closeMobileMenu"
          >
            Home
          </router-link>
          <router-link
            to="/about"
            class="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            exact-active-class="text-primary font-semibold"
            @click="closeMobileMenu"
          >
            About
          </router-link>
          <router-link
            to="/services"
            class="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            exact-active-class="text-primary font-semibold"
            @click="closeMobileMenu"
          >
            Services
          </router-link>
          <router-link
            to="/pricing"
            class="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            exact-active-class="text-primary font-semibold"
            @click="closeMobileMenu"
          >
            Pricing
          </router-link>
          <router-link
            to="/victoria-license-guide"
            class="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            exact-active-class="text-primary font-semibold"
            @click="closeMobileMenu"
          >
            License Guide
          </router-link>
          <router-link
            to="/contact"
            class="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            exact-active-class="text-primary font-semibold"
            @click="closeMobileMenu"
          >
            Contact
          </router-link>

          <div class="pt-4 space-y-3">
            <router-link
              :to="{ path: '/contact' }"
              class="btn-primary w-full text-center block"
              @click="closeMobileMenu"
            >
              Book a Lesson
            </router-link>
            <a href="tel:+61430191324" class="btn-outline w-full text-center block">
              Call 0430 191 324
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'

const mobileMenuOpen = ref(false)
const route = useRoute()

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

watch(() => route.fullPath, () => {
  mobileMenuOpen.value = false
})
</script>
