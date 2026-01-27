<template>
  <section id="home" class="pt-24 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Drive with
            <span class="text-primary">Confidence</span>
          </h1>
          <p class="text-xl text-gray-600 leading-relaxed">
            Making driving easy since 2008. We've helped 3000+ students in Melbourne transform from nervous beginners to confident, skilled drivers ready for anything the road throws at them.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <button class="btn-primary text-lg">
              Start Your Journey
            </button>
            <button class="btn-secondary text-lg">
              View Services
            </button>
          </div>
          <div class="flex items-center space-x-6 text-gray-600">
            <div class="flex items-center space-x-2">
              <Phone class="w-5 h-5" />
              <span>+61 430 191 324</span>
            </div>
            <div class="flex items-center space-x-2">
              <MapPin class="w-5 h-5" />
              <span>Melbourne, VIC</span>
            </div>
          </div>
        </div>
        
        <div class="relative">
          <div class="absolute inset-0 bg-primary rounded-2xl transform rotate-3 opacity-20"></div>
          <div class="relative bg-white rounded-2xl shadow-2xl p-8">
            <div class="aspect-video bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg flex items-center justify-center">
              <Car class="w-32 h-32 text-primary" />
            </div>
            <div class="mt-6 text-center">
              <h3 class="text-2xl font-bold text-gray-900">Professional Training</h3>
              <p class="text-gray-600 mt-2">Dual-control vehicles for your safety</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Car, Phone, MapPin } from 'lucide-vue-next'
</script>
