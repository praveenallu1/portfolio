<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-4 gap-8">
        <div class="text-center group">
          <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Users class="w-10 h-10 text-white" />
          </div>
          <div class="text-4xl font-bold text-gray-900 mb-2">3000+</div>
          <div class="text-gray-600">Happy Students</div>
        </div>
        
        <div class="text-center group">
          <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Calendar class="w-10 h-10 text-white" />
          </div>
          <div class="text-4xl font-bold text-gray-900 mb-2">2008</div>
          <div class="text-gray-600">Established</div>
        </div>
        
        <div class="text-center group">
          <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Award class="w-10 h-10 text-white" />
          </div>
          <div class="text-4xl font-bold text-gray-900 mb-2">98%</div>
          <div class="text-gray-600">Pass Rate</div>
        </div>
        
        <div class="text-center group">
          <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Clock class="w-10 h-10 text-white" />
          </div>
          <div class="text-4xl font-bold text-gray-900 mb-2">15+</div>
          <div class="text-gray-600">Years Experience</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Users, Calendar, Award, Clock } from 'lucide-vue-next'
</script>
