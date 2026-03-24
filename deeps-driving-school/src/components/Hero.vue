<template>
  <section id="home" class="pt-24 min-h-screen flex items-center relative overflow-hidden">
    <!-- Background with pattern -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
    
    <!-- Animated background elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    <div class="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
    
    <!-- Grid pattern overlay -->
    <div class="absolute inset-0 opacity-10" style="background-image: linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent); background-size: 50px 50px;"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
          <!-- Logo -->
          <div class="mb-6">
            <img 
              src="/images/hero/515245978_1304293228367403_8546177120491534100_n.jpg" 
              alt="Deep's Driving School Logo"
              class="h-20 w-auto object-contain"
            />
          </div>
          
          <h1 class="text-5xl md:text-6xl font-bold text-white leading-tight">
            Drive with
            <span class="text-cyan-400">Confidence</span>
          </h1>
          <p class="text-xl text-gray-300 leading-relaxed">
            Making driving easy since 2008. We've helped 3000+ students in Melbourne transform from nervous beginners to confident, skilled drivers ready for anything the road throws at them.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <button class="btn-primary text-lg hover:scale-105 transition-transform">
              Start Your Journey
            </button>
            <button class="btn-secondary text-lg hover:scale-105 transition-transform">
              View Services
            </button>
          </div>
          <div class="flex items-center space-x-6 text-gray-300">
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
        
        <div class="relative group">
          <div class="absolute inset-0 bg-cyan-500 rounded-3xl transform rotate-3 opacity-30 blur-2xl group-hover:opacity-40 transition-opacity duration-300"></div>
          <div class="relative rounded-3xl shadow-2xl overflow-hidden border-2 border-white/20 hover:border-cyan-400/50 transition-all duration-300 group-hover:shadow-cyan-500/50">
            <img 
              src="/images/hero/560135005_1388880566575335_9062816134465055749_n.jpg" 
              alt="Deep's Driving School Training Vehicle"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 class="text-2xl font-bold">Professional Training</h3>
              <p class="text-gray-200 mt-2">Dual-control vehicles for your safety</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Phone, MapPin } from 'lucide-vue-next'
</script>
