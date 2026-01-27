<template>
  <section id="pricing" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          No hidden fees. Quality driving education at competitive prices
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="card hover:scale-105 transition-transform">
          <h3 class="text-xl font-bold text-gray-900 mb-4">1-Hour Lesson</h3>
          <div class="text-3xl font-bold text-primary mb-4">$65</div>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-center"><Check class="w-4 h-4 text-green-500 mr-2" />Professional instructor</li>
            <li class="flex items-center"><Check class="w-4 h-4 text-green-500 mr-2" />Dual-control vehicle</li>
            <li class="flex items-center"><Check class="w-4 h-4 text-green-500 mr-2" />Flexible scheduling</li>
          </ul>
        </div>
        
        <div class="card hover:scale-105 transition-transform">
          <h3 class="text-xl font-bold text-gray-900 mb-4">90-Minute Lesson</h3>
          <div class="text-3xl font-bold text-primary mb-4">$95</div>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-center"><Check class="w-4 h-4 text-green-500 mr-2" />Extended practice time</li>
            <li class="flex items-center"><Check class="w-4 h-4 text-green-500 mr-2" />More skill coverage</li>
            <li class="flex items-center"><Check class="w-4 h-4 text-green-500 mr-2" />Better value</li>
          </ul>
        </div>
        
        <div class="card hover:scale-105 transition-transform border-2 border-primary relative">
          <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm">
            Popular
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">5-Lesson Package</h3>
          <div class="text-3xl font-bold text-primary mb-4">$310</div>
          <div class="text-green-600 font-semibold mb-2">Save $15</div>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-center"><Check class="w-4 h-4 text-green-500 mr-2" />Valid for 1 month</li>
            <li class="flex items-center"><Check class="w-4 h-4 text-green-500 mr-2" />Structured learning</li>
            <li class="flex items-center"><Check class="w-4 h-4 text-green-500 mr-2" />Progress tracking</li>
          </ul>
        </div>
        
        <div class="card hover:scale-105 transition-transform border-2 border-primary relative">
          <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm">
            Best Value
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">10-Lesson Package</h3>
          <div class="text-3xl font-bold text-primary mb-4">$600</div>
          <div class="text-green-600 font-semibold mb-2">Save $50</div>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-center"><Check class="w-4 h-4 text-green-500 mr-2" />Valid for 3 months</li>
            <li class="flex items-center"><Check class="w-4 h-4 text-green-500 mr-2" />Complete training</li>
            <li class="flex items-center"><Check class="w-4 h-4 text-green-500 mr-2" />Test preparation</li>
          </ul>
        </div>
      </div>
      
      <div class="mt-12 grid md:grid-cols-2 gap-8">
        <div class="card">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Test Packages</h3>
          <div class="space-y-4">
            <div class="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 class="font-semibold">Drive Test + 1-Hour Lesson</h4>
                <p class="text-gray-600 text-sm">Pre-test training + car for test</p>
              </div>
              <div class="text-2xl font-bold text-primary">$250</div>
            </div>
            <div class="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 class="font-semibold">Drive Test + 2-Hour Lesson</h4>
                <p class="text-gray-600 text-sm">Extended practice + car for test</p>
              </div>
              <div class="text-2xl font-bold text-primary">$280</div>
              <div class="text-green-600 text-sm">Save $35</div>
            </div>
          </div>
        </div>
        
        <div class="card">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Medical Assessment</h3>
          <div class="space-y-4">
            <div class="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 class="font-semibold">Medical Assessment Training</h4>
                <p class="text-gray-600 text-sm">1-hour session</p>
              </div>
              <div class="text-2xl font-bold text-primary">$80</div>
            </div>
            <div class="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 class="font-semibold">Medical Assessment through OT</h4>
                <p class="text-gray-600 text-sm">Comprehensive assessment</p>
              </div>
              <div class="text-2xl font-bold text-primary">$150</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Check } from 'lucide-vue-next'
</script>
