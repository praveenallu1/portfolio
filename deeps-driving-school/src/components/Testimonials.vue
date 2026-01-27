<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Hear from our students who transformed from nervous beginners to confident drivers
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div class="card">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <User class="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 class="font-semibold text-gray-900">Sarah Chen</h4>
              <div class="flex text-yellow-400">
                <Star v-for="i in 5" :key="i" class="w-4 h-4 fill-current" />
              </div>
            </div>
          </div>
          <p class="text-gray-600 italic">
            "I was extremely nervous about driving, but my instructor was incredibly patient. The step-by-step approach helped me build confidence. Passed my test on the first attempt!"
          </p>
          <div class="mt-4 text-sm text-gray-500">Passed March 2024</div>
        </div>
        
        <div class="card">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <User class="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 class="font-semibold text-gray-900">Michael Rodriguez</h4>
              <div class="flex text-yellow-400">
                <Star v-for="i in 5" :key="i" class="w-4 h-4 fill-current" />
              </div>
            </div>
          </div>
          <p class="text-gray-600 italic">
            "The test package was worth every dollar. The pre-test training covered exactly what I needed. The instructor knew all the test routes and gave me great tips."
          </p>
          <div class="mt-4 text-sm text-gray-500">Passed February 2024</div>
        </div>
        
        <div class="card">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <User class="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 class="font-semibold text-gray-900">Emily Johnson</h4>
              <div class="flex text-yellow-400">
                <Star v-for="i in 5" :key="i" class="w-4 h-4 fill-current" />
              </div>
            </div>
          </div>
          <p class="text-gray-600 italic">
            "After failing my test twice with another school, I came to Deep's. The instructors identified my weak spots and helped me improve. Passed on my next attempt!"
          </p>
          <div class="mt-4 text-sm text-gray-500">Passed January 2024</div>
        </div>
      </div>
      
      <div class="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
        <div class="text-center">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Join Our Success Story</h3>
          <p class="text-gray-600 mb-6">Over 3000 students have gained confidence and independence through our programs</p>
          <div class="flex justify-center space-x-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-primary">98%</div>
              <div class="text-gray-600">Pass Rate</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-primary">4.9/5</div>
              <div class="text-gray-600">Average Rating</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-primary">3000+</div>
              <div class="text-gray-600">Happy Students</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { User, Star } from 'lucide-vue-next'
</script>
