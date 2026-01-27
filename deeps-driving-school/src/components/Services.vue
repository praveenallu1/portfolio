<template>
  <section id="services" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          From nervous beginners to experienced drivers needing a refresher, we have the perfect program for everyone
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div class="card group">
          <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
        
        <div class="card group">
          <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
        
        <div class="card group">
          <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
      
      <div class="mt-12 text-center">
        <div class="card inline-block max-w-md">
          <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <RefreshCw class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Refresher Course</h3>
          <p class="text-gray-600 mb-6">
            Available upon request. Perfect for licensed drivers who want to refine skills, regain confidence, or adjust to Victorian road rules.
          </p>
          <button class="btn-primary">Contact for Details</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Car, ClipboardCheck, Heart, RefreshCw, CheckCircle } from 'lucide-vue-next'
</script>
