<template>
  <section id="contact" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Ready to start your driving journey? Contact us today and take the first step towards confident driving
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-12">
        <div class="space-y-8">
          <div class="card">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            <div class="space-y-4">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Phone class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Phone</h4>
                  <p class="text-gray-600">+61 430 191 324</p>
                  <p class="text-sm text-gray-500">Available 7 days a week</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Mail class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Email</h4>
                  <p class="text-gray-600">info@deepsdrivingschool.com.au</p>
                  <p class="text-sm text-gray-500">We respond within 24 hours</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <MapPin class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Service Area</h4>
                  <p class="text-gray-600">South East Melbourne</p>
                  <p class="text-sm text-gray-500">Multiple pickup locations available</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="card">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Business Hours</h3>
            <div class="space-y-2">
              <div class="flex justify-between">
                <span class="text-gray-600">Monday - Friday</span>
                <span class="font-semibold">7:00 AM - 7:00 PM</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Saturday</span>
                <span class="font-semibold">8:00 AM - 6:00 PM</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Sunday</span>
                <span class="font-semibold">8:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="card">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label class="block text-gray-700 font-semibold mb-2">Name</label>
              <input 
                v-model="form.name" 
                type="text" 
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your full name"
              >
            </div>
            
            <div>
              <label class="block text-gray-700 font-semibold mb-2">Phone</label>
              <input 
                v-model="form.phone" 
                type="tel" 
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your phone number"
              >
            </div>
            
            <div>
              <label class="block text-gray-700 font-semibold mb-2">Email</label>
              <input 
                v-model="form.email" 
                type="email" 
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="your@email.com"
              >
            </div>
            
            <div>
              <label class="block text-gray-700 font-semibold mb-2">Service Interested In</label>
              <select 
                v-model="form.service" 
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select a service</option>
                <option value="driving-lessons">Driving Lessons</option>
                <option value="test-package">Driving Test Package</option>
                <option value="medical-assessment">Medical Assessment</option>
                <option value="refresher">Refresher Course</option>
              </select>
            </div>
            
            <div>
              <label class="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea 
                v-model="form.message" 
                rows="4" 
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Tell us about your driving goals..."
              ></textarea>
            </div>
            
            <button type="submit" class="btn-primary w-full text-lg" :disabled="isLoading">
              {{ isLoading ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
          
          <div v-if="showSuccess" class="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p class="text-green-700">Thank you for your message! We'll contact you within 24 hours.</p>
          </div>
          
          <div v-if="showError" class="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p class="text-red-700">There was an error sending your message. Please call us directly at +61 430 191 324</p>
          </div>
        </div>
      </div>
      
      <div class="mt-16 text-center">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">Ready to Start Driving?</h3>
        <p class="text-gray-600 mb-6">Call us now for immediate assistance or to book your first lesson</p>
        <a href="tel:+61430191324" class="btn-primary text-lg inline-block">
          <Phone class="w-5 h-5 inline mr-2" />
          Call Now: +61 430 191 324
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Phone, Mail, MapPin } from 'lucide-vue-next'

const form = ref({
  name: '',
  phone: '',
  email: '',
  service: '',
  message: ''
})

const showSuccess = ref(false)
const showError = ref(false)
const isLoading = ref(false)

const handleSubmit = async () => {
  isLoading.value = true
  
  try {
    // Send email via EmailJS
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        service_id: 'service_deeps_driving',
        template_id: 'template_contact_form',
        user_id: 'YOUR_EMAILJS_PUBLIC_KEY',
        template_params: {
          to_email: 'info@deepsdrivingschool.com.au',
          from_name: form.value.name,
          from_email: form.value.email,
          phone: form.value.phone,
          service: form.value.service,
          message: form.value.message,
          reply_to: form.value.email
        }
      })
    })
    
    if (response.ok) {
      showSuccess.value = true
      form.value = {
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      }
      
      setTimeout(() => {
        showSuccess.value = false
      }, 5000)
    } else {
      showError.value = true
      setTimeout(() => {
        showError.value = false
      }, 5000)
    }
  } catch (error) {
    console.error('Error sending email:', error)
    showError.value = true
    setTimeout(() => {
      showError.value = false
    }, 5000)
  } finally {
    isLoading.value = false
  }
}
</script>
