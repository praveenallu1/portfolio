<template>
  <section id="victoria-guide" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Victoria License Guide</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Your complete roadmap to getting a Victorian driver's license
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <div class="card">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
              1
            </div>
            <h3 class="text-xl font-bold text-gray-900">Learner Permit</h3>
          </div>
          <p class="text-gray-600 mb-4">
            Start your journey by obtaining a learner permit. You must be at least 16 years old and pass a knowledge test.
          </p>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-center"><BookOpen class="w-4 h-4 text-blue-500 mr-2" />Study the road rules</li>
            <li class="flex items-center"><FileText class="w-4 h-4 text-blue-500 mr-2" />Pass the knowledge test</li>
            <li class="flex items-center"><Eye class="w-4 h-4 text-blue-500 mr-2" />Pass the eyesight test</li>
          </ul>
        </div>
        
        <div class="card">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
              2
            </div>
            <h3 class="text-xl font-bold text-gray-900">Learner Driving</h3>
          </div>
          <p class="text-gray-600 mb-4">
            Practice driving under supervision. You must log at least 120 hours of supervised driving experience.
          </p>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-center"><Clock class="w-4 h-4 text-blue-500 mr-2" />120 hours supervised driving</li>
            <li class="flex items-center"><Users class="w-4 h-4 text-blue-500 mr-2" />Fully licensed supervisor</li>
            <li class="flex items-center"><FileCheck class="w-4 h-4 text-blue-500 mr-2" />Log book requirements</li>
          </ul>
        </div>
        
        <div class="card">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
              3
            </div>
            <h3 class="text-xl font-bold text-gray-900">Probationary License</h3>
          </div>
          <p class="text-gray-600 mb-4">
            Pass the driving test to get your P1 or P2 probationary license. This allows you to drive independently with restrictions.
          </p>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-center"><Car class="w-4 h-4 text-blue-500 mr-2" />Pass the driving test</li>
            <li class="flex items-center"><AlertCircle class="w-4 h-4 text-blue-500 mr-2" />P1 license (red P plates)</li>
            <li class="flex items-center"><Shield class="w-4 h-4 text-blue-500 mr-2" />P2 license (green P plates)</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-white rounded-2xl shadow-xl p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-6">How We Help You Succeed</h3>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h4 class="text-lg font-semibold text-gray-900 mb-4">Learner Permit Preparation</h4>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <CheckCircle class="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span>Comprehensive road rule training covering all test topics</span>
              </li>
              <li class="flex items-start">
                <CheckCircle class="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span>Practice tests and mock exams to build confidence</span>
              </li>
              <li class="flex items-start">
                <CheckCircle class="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span>Study materials and resources provided</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold text-gray-900 mb-4">Driving Test Success</h4>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <CheckCircle class="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span>Test route familiarization in your local area</span>
              </li>
              <li class="flex items-start">
                <CheckCircle class="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span>Mock driving tests with detailed feedback</span>
              </li>
              <li class="flex items-start">
                <CheckCircle class="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span>Dual-control car provided for your actual test</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="mt-8 p-6 bg-blue-50 rounded-lg">
          <h4 class="text-lg font-semibold text-gray-900 mb-3">Key Requirements to Remember</h4>
          <div class="grid md:grid-cols-3 gap-4 text-gray-600">
            <div class="flex items-center">
              <Calendar class="w-5 h-5 text-blue-500 mr-2" />
              <span>Minimum age: 16 years</span>
            </div>
            <div class="flex items-center">
              <Clock class="w-5 h-5 text-blue-500 mr-2" />
              <span>120 supervised hours</span>
            </div>
            <div class="flex items-center">
              <FileText class="w-5 h-5 text-blue-500 mr-2" />
              <span>Log book completion</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-12 text-center">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your License Journey?</h3>
        <p class="text-gray-600 mb-6">Our experienced instructors guide you through every step</p>
        <button class="btn-primary text-lg">Get Started Today</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { BookOpen, FileText, Eye, Clock, Users, FileCheck, Car, AlertCircle, Shield, CheckCircle, Calendar } from 'lucide-vue-next'
</script>
