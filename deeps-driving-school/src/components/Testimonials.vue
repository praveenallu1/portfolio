<template>
  <section class="py-20 relative overflow-hidden">
    <!-- Background with pattern -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>
    
    <!-- Animated background elements -->
    <div aria-hidden="true" class="pointer-events-none absolute top-20 right-0 w-80 h-80 sm:w-96 sm:h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
    <div aria-hidden="true" class="pointer-events-none absolute bottom-0 left-0 w-80 h-80 sm:w-96 sm:h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-16">
        <!-- Logo -->
        <div class="mb-8 flex justify-center">
          <img 
            src="/images/hero/515245978_1304293228367403_8546177120491534100_n.jpg" 
            alt="Deep's Driving School Logo"
            class="h-16 w-auto object-contain"
          />
        </div>
        
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Hear from our students who transformed from nervous beginners to confident drivers
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="card group overflow-hidden"
        >
          <!-- Image Container -->
          <div class="relative aspect-[4/3] overflow-hidden rounded-lg mb-4 bg-gray-100">
            <img
              :src="testimonial.image"
              :alt="`Photo of ${testimonial.name}`"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              decoding="async"
              width="800"
              height="600"
            >
            <div aria-hidden="true" class="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"></div>
          </div>
          
          <!-- Content -->
          <div class="flex items-start gap-4 mb-4">
            <div class="flex-1">
              <h4 class="font-semibold text-gray-900 text-lg">{{ testimonial.name }}</h4>
              <div class="flex items-center gap-1 text-yellow-400 mt-1">
                <span class="sr-only">Rated 5 out of 5</span>
                <Star v-for="i in 5" :key="i" class="w-4 h-4 fill-current" aria-hidden="true" />
              </div>
            </div>
            <div class="text-sm text-gray-500 font-medium whitespace-nowrap">{{ testimonial.date }}</div>
          </div>
          
          <p class="text-gray-700 italic leading-relaxed line-clamp-3">
            “{{ testimonial.quote }}”
          </p>
        </div>
      </div>
      
      <div class="mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 relative overflow-hidden">
        <!-- Background pattern -->
        <div aria-hidden="true" class="pointer-events-none absolute inset-0 opacity-10" style="background-image: linear-gradient(45deg, transparent 25%, rgba(255,255,255,.1) 25%, rgba(255,255,255,.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,.1) 75%, rgba(255,255,255,.1)); background-size: 40px 40px;"></div>
        
        <div class="text-center relative z-10">
          <h3 class="text-2xl font-bold text-white mb-4">Join Our Success Story</h3>
          <p class="text-blue-100 mb-6">Over 3000 students have gained confidence and independence through our programs</p>
          <div class="flex flex-wrap justify-center gap-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-white">98%</div>
              <div class="text-blue-100">Pass Rate</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">4.9/5</div>
              <div class="text-blue-100">Average Rating</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">3000+</div>
              <div class="text-blue-100">Happy Students</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Star } from 'lucide-vue-next'
const testimonials = [
  {
    name: 'Sarah Chen',
    image: '/images/testimonials/536271054_1348442023952523_664128665075831423_n.jpg',
    quote: 'I was extremely nervous about driving, but my instructor was incredibly patient. The step-by-step approach helped me build confidence. Passed my test on the first attempt!',
    date: 'Passed March 2024'
  },
  {
    name: 'Michael Rodriguez',
    image: '/images/testimonials/586400412_1431507298979328_3896695301324636299_n.jpg',
    quote: 'The test package was worth every dollar. The pre-test training covered exactly what I needed. The instructor knew all the test routes and gave me great tips.',
    date: 'Passed February 2024'
  },
  {
    name: 'Emily Johnson',
    image: '/images/testimonials/539197707_1351200613676664_2187587730816813545_n.jpg',
    quote: 'After failing my test twice with another school, I came to Deep\'s. The instructors identified my weak spots and helped me improve. Passed on my next attempt!',
    date: 'Passed January 2024'
  },
  {
    name: 'James Wilson',
    image: '/images/testimonials/646856680_1519748836821840_5500423109852698159_n.jpg',
    quote: 'Professional, friendly, and effective. The instructors really care about their students. I felt safe and supported throughout my entire learning journey.',
    date: 'Passed December 2023'
  },
  {
    name: 'Lisa Anderson',
    image: '/images/testimonials/588054423_1434770581986333_7773403600267259357_n.jpg',
    quote: 'Best decision I made! The dual-control car made me feel secure, and the personalized approach to teaching was exactly what I needed.',
    date: 'Passed November 2023'
  },
  {
    name: 'David Thompson',
    image: '/images/testimonials/601526203_1455241559939235_5718153740406999085_n.jpg',
    quote: 'Highly recommend Deep\'s Driving School. The instructors are knowledgeable, patient, and genuinely invested in your success.',
    date: 'Passed October 2023'
  }
]
</script>
