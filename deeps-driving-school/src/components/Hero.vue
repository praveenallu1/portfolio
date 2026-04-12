<template>
  <section id="home" class="hero-section pt-24 gradient-bg-dark">
    <!-- Animated Background Elements -->
    <div aria-hidden="true" class="pointer-events-none absolute top-0 right-0 w-80 h-80 sm:w-96 sm:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
    <div aria-hidden="true" class="pointer-events-none absolute bottom-0 left-0 w-80 h-80 sm:w-96 sm:h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    <div aria-hidden="true" class="pointer-events-none absolute top-1/2 left-1/2 w-80 h-80 sm:w-96 sm:h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
    
    <!-- Grid Pattern Overlay -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 opacity-5" style="background-image: linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent); background-size: 50px 50px;"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-8 animate-slide-in-left">
          <div class="flex items-center gap-4 animate-fade-in-up" style="animation-delay: 0.1s">
            <img
              src="/images/hero/515245978_1304293228367403_8546177120491534100_n.jpg"
              alt="Deep's Driving School"
              class="h-16 sm:h-20 w-auto object-contain drop-shadow-lg"
              width="240"
              height="80"
              decoding="async"
            >
            <div class="hidden sm:block h-10 w-px bg-white/20"></div>
            <p class="hidden sm:block text-sm font-semibold tracking-wide text-cyan-200/90 uppercase">
              Melbourne Driving Lessons
            </p>
          </div>
          
          <!-- Main Heading -->
          <div class="animate-fade-in-up" style="animation-delay: 0.2s">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              Drive with
              <span class="gradient-text">Confidence</span>
            </h1>
            <div class="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
          </div>
          
          <!-- Description -->
          <div class="space-y-5 animate-fade-in-up" style="animation-delay: 0.3s">
            <p class="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Professional, patient instruction in Melbourne for learner permit training and VicRoads test preparation — automatic and manual lessons available.
            </p>
            <ul class="grid sm:grid-cols-2 gap-3 text-gray-200/90 text-sm sm:text-base">
              <li class="flex items-start gap-2">
                <CheckCircle class="w-5 h-5 text-cyan-300 mt-0.5" aria-hidden="true" />
                <span>Dual-control vehicles for safety</span>
              </li>
              <li class="flex items-start gap-2">
                <CheckCircle class="w-5 h-5 text-cyan-300 mt-0.5" aria-hidden="true" />
                <span>Pickup & drop-off in South East Melbourne</span>
              </li>
              <li class="flex items-start gap-2">
                <CheckCircle class="w-5 h-5 text-cyan-300 mt-0.5" aria-hidden="true" />
                <span>Test route practice & mock tests</span>
              </li>
              <li class="flex items-start gap-2">
                <CheckCircle class="w-5 h-5 text-cyan-300 mt-0.5" aria-hidden="true" />
                <span>Available 7 days a week</span>
              </li>
            </ul>
          </div>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style="animation-delay: 0.4s">
            <router-link :to="{ path: '/contact', query: { service: 'driving-lessons' } }" class="btn-primary text-lg px-8 py-4 inline-block text-center">
              Book a Lesson
            </router-link>
            <router-link to="/pricing" class="btn-outline-light text-lg px-8 py-4 inline-block text-center">
              View Pricing
            </router-link>
          </div>
          
          <!-- Contact Info -->
          <div class="flex flex-col sm:flex-row gap-6 text-gray-300 animate-fade-in-up" style="animation-delay: 0.5s">
            <a href="tel:+61430191324" class="flex items-center space-x-2 hover:text-cyan-300 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-md px-1 py-1">
              <Phone class="w-5 h-5" />
              <span>Call 0430 191 324</span>
            </a>
            <div class="flex items-center space-x-2">
              <MapPin class="w-5 h-5" />
              <span>South East Melbourne, VIC</span>
            </div>
          </div>
        </div>
        
        <!-- Right Image -->
        <div class="relative animate-fade-in-up group" style="animation-delay: 0.3s">
          <!-- Glow Effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl transform rotate-3 opacity-30 blur-2xl group-hover:opacity-40 transition-opacity duration-300"></div>
          
          <!-- Image Card -->
          <div class="relative rounded-3xl shadow-2xl overflow-hidden border-2 border-white/20 hover:border-cyan-400/50 transition-all duration-300 group-hover:shadow-glow-lg">
            <div class="relative aspect-[4/3]">
              <img
                src="/images/hero/560135005_1388880566575335_9062816134465055749_n.jpg"
                alt="Training vehicle used for driving lessons"
                class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                width="1200"
                height="900"
                decoding="async"
                fetchpriority="high"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            
              <!-- Text Overlay -->
              <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                <h3 class="text-2xl sm:text-3xl font-bold mb-2">Professional Training</h3>
                <p class="text-gray-200 text-base sm:text-lg">Dual-control vehicles for your safety</p>
                <div class="mt-4 flex items-center space-x-2">
                  <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span class="text-sm text-cyan-300">Available 7 days a week</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Floating Badge -->
          <div class="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-full font-bold shadow-lg animate-pulse-glow">
            98% Pass Rate
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Phone, MapPin, CheckCircle } from 'lucide-vue-next'
</script>
