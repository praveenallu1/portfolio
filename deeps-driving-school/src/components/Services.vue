<template>
  <section id="services" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16 animate-fade-in-up">
        <h2 class="section-title">Our Services</h2>
        <p class="section-subtitle">
          From nervous beginners to experienced drivers needing a refresher, we have the perfect program for everyone
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <div class="card group border-l-4 border-l-transparent hover:border-l-primary animate-fade-in-up" style="animation-delay: 0.1s">
          <div class="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
            <Car class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Driving Lessons</h3>
          <p class="text-gray-600 mb-6">
            Perfect for focused sessions to improve specific skills or practice key driving techniques. Patient instructors guide you step-by-step.
          </p>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-center"><CheckCircle class="w-5 h-5 text-green-500 mr-2" />1-hour and 90-minute options</li>
            <li class="flex items-center"><CheckCircle class="w-5 h-5 text-green-500 mr-2" />Package deals available</li>
            <li class="flex items-center"><CheckCircle class="w-5 h-5 text-green-500 mr-2" />Flexible scheduling</li>
          </ul>
        </div>
        
        <div class="card group border-l-4 border-l-transparent hover:border-l-primary animate-fade-in-up" style="animation-delay: 0.2s">
          <div class="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
            <ClipboardCheck class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Driving Test Packages</h3>
          <p class="text-gray-600 mb-6">
            Includes pre-test training and practice, plus use of our dual-control car for the actual test. Maximize your chances of passing!
          </p>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-center"><CheckCircle class="w-5 h-5 text-green-500 mr-2" />Pre-test assessment</li>
            <li class="flex items-center"><CheckCircle class="w-5 h-5 text-green-500 mr-2" />Test route practice</li>
            <li class="flex items-center"><CheckCircle class="w-5 h-5 text-green-500 mr-2" />Car provided for test</li>
          </ul>
        </div>
        
        <div class="card group border-l-4 border-l-transparent hover:border-l-primary animate-fade-in-up" style="animation-delay: 0.3s">
          <div class="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
            <Heart class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Medical Assessment</h3>
          <p class="text-gray-600 mb-6">
            Specialized sessions to help drivers meet medical review requirements and regain confidence on the road. TAC funded assessments available.
          </p>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-center"><CheckCircle class="w-5 h-5 text-green-500 mr-2" />Medical review support</li>
            <li class="flex items-center"><CheckCircle class="w-5 h-5 text-green-500 mr-2" />TAC funded assessments</li>
            <li class="flex items-center"><CheckCircle class="w-5 h-5 text-green-500 mr-2" />Confidence rebuilding</li>
          </ul>
        </div>
      </div>
      
      <div class="mt-12 text-center animate-fade-in-up">
        <div class="card inline-block max-w-md border-2 border-primary">
          <div class="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <RefreshCw class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Refresher Course</h3>
          <p class="text-gray-600 mb-6">
            Available upon request. Perfect for licensed drivers who want to refine skills, regain confidence, or adjust to Victorian road rules.
          </p>
          <router-link to="/contact" class="btn-primary inline-block">Contact for Details</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Car, ClipboardCheck, Heart, RefreshCw, CheckCircle } from 'lucide-vue-next'
</script>
