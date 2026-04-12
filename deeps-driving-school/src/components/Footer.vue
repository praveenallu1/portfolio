<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-4 gap-8">
        <div>
          <router-link
            to="/"
            class="inline-flex items-center space-x-2 mb-4 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
          >
            <Car class="w-8 h-8 text-white" aria-hidden="true" />
            <span class="text-xl font-bold">Deep's Driving School</span>
          </router-link>
          <p class="text-gray-400 mb-4">
            Making driving easy since 2008. Building confident, skilled drivers for life.
          </p>
          <div class="flex space-x-4">
            <a
              href="https://www.facebook.com/deepsdrivingschool"
              target="_blank"
              rel="noreferrer"
              class="text-gray-400 hover:text-white transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              aria-label="Deep's Driving School on Facebook"
            >
              <Facebook class="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li><router-link to="/" class="text-gray-400 hover:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">Home</router-link></li>
            <li><router-link to="/about" class="text-gray-400 hover:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">About</router-link></li>
            <li><router-link to="/services" class="text-gray-400 hover:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">Services</router-link></li>
            <li><router-link to="/pricing" class="text-gray-400 hover:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">Pricing</router-link></li>
            <li><router-link to="/victoria-license-guide" class="text-gray-400 hover:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">License Guide</router-link></li>
            <li><router-link to="/contact" class="text-gray-400 hover:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">Contact</router-link></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">Services</h4>
          <ul class="space-y-2">
            <li><router-link to="/services" class="text-gray-400 hover:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">Driving Lessons</router-link></li>
            <li><router-link to="/services" class="text-gray-400 hover:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">Test Packages</router-link></li>
            <li><router-link to="/services" class="text-gray-400 hover:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">Medical Assessment</router-link></li>
            <li><router-link to="/services" class="text-gray-400 hover:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">Refresher Courses</router-link></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">Contact Info</h4>
          <ul class="space-y-2 text-gray-400">
            <li class="flex items-center">
              <Phone class="w-4 h-4 mr-2" aria-hidden="true" />
              <a
                href="tel:+61430191324"
                class="hover:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              >
                0430 191 324
              </a>
            </li>
            <li class="flex items-center">
              <Mail class="w-4 h-4 mr-2" aria-hidden="true" />
              <a
                href="mailto:info@deepsdrivingschool.com.au"
                class="hover:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              >
                info@deepsdrivingschool.com.au
              </a>
            </li>
            <li class="flex items-center">
              <MapPin class="w-4 h-4 mr-2" aria-hidden="true" />
              South East Melbourne, VIC
            </li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-8 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            © {{ year }} Deep's Driving School. All rights reserved.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Car, Facebook, Phone, Mail, MapPin } from 'lucide-vue-next'

const year = new Date().getFullYear()
</script>
