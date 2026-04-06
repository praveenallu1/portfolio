<template>
  <section id="home" class="hero-section pt-24 gradient-bg-dark">
    <!-- Animated Background Elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    <div class="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
    
    <!-- Grid Pattern Overlay -->
    <div class="absolute inset-0 opacity-5" style="background-image: linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent); background-size: 50px 50px;"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-8 animate-slide-in-left">
          <!-- Logo -->
          <div class="mb-6 animate-fade-in-up" style="animation-delay: 0.1s">
            <img 
              src="/images/hero/515245978_1304293228367403_8546177120491534100_n.jpg" 
              alt="Deep's Driving School Logo"
              class="h-20 w-auto object-contain drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
            />
          </div>
          
          <!-- Main Heading -->
          <div class="animate-fade-in-up" style="animation-delay: 0.2s">
            <h1 class="text-6xl md:text-7xl font-black text-white leading-tight mb-4">
              Drive with
              <span class="gradient-text">Confidence</span>
            </h1>
            <div class="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
          </div>
          
          <!-- Description -->
          <p class="text-xl text-gray-300 leading-relaxed animate-fade-in-up" style="animation-delay: 0.3s">
            Making driving easy since 2008. We've helped 3000+ students in Melbourne transform from nervous beginners to confident, skilled drivers ready for anything the road throws at them.
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style="animation-delay: 0.4s">
            <router-link to="/contact" class="btn-primary text-lg px-8 py-4 inline-block text-center">
              Start Your Journey
            </router-link>
            <router-link to="/services" class="btn-outline text-lg px-8 py-4 inline-block text-center">
              View Services
            </router-link>
          </div>
          
          <!-- Contact Info -->
          <div class="flex flex-col sm:flex-row gap-6 text-gray-300 animate-fade-in-up" style="animation-delay: 0.5s">
            <a href="tel:+61430191324" class="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-300">
              <Phone class="w-5 h-5" />
              <span>+61 430 191 324</span>
            </a>
            <div class="flex items-center space-x-2">
              <MapPin class="w-5 h-5" />
              <span>Melbourne, VIC</span>
            </div>
          </div>
        </div>
        
        <!-- Right Image -->
        <div class="relative animate-fade-in-up group" style="animation-delay: 0.3s">
          <!-- Glow Effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl transform rotate-3 opacity-30 blur-2xl group-hover:opacity-40 transition-opacity duration-300"></div>
          
          <!-- Image Card -->
          <div class="relative rounded-3xl shadow-2xl overflow-hidden border-2 border-white/20 hover:border-cyan-400/50 transition-all duration-300 group-hover:shadow-glow-lg">
            <img 
              src="/images/hero/560135005_1388880566575335_9062816134465055749_n.jpg" 
              alt="Deep's Driving School Training Vehicle"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            
            <!-- Text Overlay -->
            <div class="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 class="text-3xl font-bold mb-2">Professional Training</h3>
              <p class="text-gray-200 text-lg">Dual-control vehicles for your safety</p>
              <div class="mt-4 flex items-center space-x-2">
                <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span class="text-sm text-cyan-400">Available 7 days a week</span>
              </div>
            </div>
          </div>
          
          <!-- Floating Badge -->
          <div class="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-full font-bold shadow-lg animate-pulse-glow">
            98% Pass Rate
          </div>
        </div>
      </div>
      
      <!-- Stats Row -->
      <div class="grid grid-cols-3 gap-4 mt-20 animate-fade-in-up" style="animation-delay: 0.6s">
        <div class="glass rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
          <div class="text-3xl font-bold text-cyan-400 mb-2">3000+</div>
          <div class="text-gray-300">Students Trained</div>
        </div>
        <div class="glass rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
          <div class="text-3xl font-bold text-cyan-400 mb-2">16+</div>
          <div class="text-gray-300">Years Experience</div>
        </div>
        <div class="glass rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
          <div class="text-3xl font-bold text-cyan-400 mb-2">4.9/5</div>
          <div class="text-gray-300">Star Rating</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Phone, MapPin } from 'lucide-vue-next'
</script>
