<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <Car class="w-8 h-8 text-white" />
            <span class="text-xl font-bold">Deep's Driving School</span>
          </div>
          <p class="text-gray-400 mb-4">
            Making driving easy since 2008. Building confident, skilled drivers for life.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <Facebook class="w-5 h-5" />
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <Instagram class="w-5 h-5" />
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <Youtube class="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li><a href="#home" class="text-gray-400 hover:text-white transition-colors">Home</a></li>
            <li><a href="#services" class="text-gray-400 hover:text-white transition-colors">Services</a></li>
            <li><a href="#pricing" class="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#victoria-guide" class="text-gray-400 hover:text-white transition-colors">Victoria License Guide</a></li>
            <li><a href="#contact" class="text-gray-400 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">Services</h4>
          <ul class="space-y-2">
            <li><a href="#services" class="text-gray-400 hover:text-white transition-colors">Driving Lessons</a></li>
            <li><a href="#services" class="text-gray-400 hover:text-white transition-colors">Test Packages</a></li>
            <li><a href="#services" class="text-gray-400 hover:text-white transition-colors">Medical Assessment</a></li>
            <li><a href="#services" class="text-gray-400 hover:text-white transition-colors">Refresher Courses</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">Contact Info</h4>
          <ul class="space-y-2 text-gray-400">
            <li class="flex items-center">
              <Phone class="w-4 h-4 mr-2" />
              +61 430 191 324
            </li>
            <li class="flex items-center">
              <Mail class="w-4 h-4 mr-2" />
              info@deepsdrivingschool.com.au
            </li>
            <li class="flex items-center">
              <MapPin class="w-4 h-4 mr-2" />
              South East Melbourne, VIC
            </li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-8 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            © 2024 Deep's Driving School. All rights reserved.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Car, Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-vue-next'
</script>
