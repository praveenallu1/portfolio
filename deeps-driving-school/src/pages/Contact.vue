<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-5xl font-bold text-gray-900 mb-6">
            Get in <span class="text-primary">Touch</span>
          </h1>
          <p class="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Ready to start your driving journey? Contact us today and take the first step towards confident driving. 
            Our friendly team is here to answer your questions and help you choose the right program.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <div class="bg-white px-6 py-3 rounded-lg shadow-md">
              <span class="text-primary font-semibold">Quick Response</span>
            </div>
            <div class="bg-white px-6 py-3 rounded-lg shadow-md">
              <span class="text-primary font-semibold">7 Days a Week</span>
            </div>
            <div class="bg-white px-6 py-3 rounded-lg shadow-md">
              <span class="text-primary font-semibold">Free Consultation</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Information -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-gray-900 text-center mb-16">Contact Information</h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="card text-center hover:scale-105 transition-transform min-h-[400px] flex flex-col">
            <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Phone</h3>
            <p class="text-xl text-primary font-semibold mb-4">+61 430 191 324</p>
            <p class="text-gray-600 mb-4">Call us for immediate assistance</p>
            <p class="text-sm text-gray-500 mb-4">Available 7 days a week</p>
            <div class="mt-auto">
              <a href="tel:+61430191324" class="btn-primary w-full">Call Now</a>
            </div>
          </div>
          
          <div class="card text-center hover:scale-105 transition-transform min-h-[400px] flex flex-col">
            <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Email</h3>
            <p class="text-xl text-primary font-semibold mb-4">info@deepsdrivingschool.com.au</p>
            <p class="text-gray-600 mb-4">Send us your questions</p>
            <p class="text-sm text-gray-500 mb-4">We respond within 24 hours</p>
            <div class="mt-auto">
              <a href="mailto:info@deepsdrivingschool.com.au" class="btn-primary w-full">Send Email</a>
            </div>
          </div>
          
          <div class="card text-center hover:scale-105 transition-transform min-h-[400px] flex flex-col">
            <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Service Area</h3>
            <p class="text-xl text-primary font-semibold mb-4">South East Melbourne</p>
            <p class="text-gray-600 mb-4">Multiple pickup locations</p>
            <p class="text-sm text-gray-500 mb-4">Box Hill to Frankston</p>
            <div class="mt-auto">
              <button type="button" class="btn-primary w-full" @click="viewAreas">View Areas</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-gray-900 text-center mb-16">Send us a Message</h2>
        
        <div class="max-w-2xl mx-auto">
          <div id="contact-form" class="card scroll-mt-28">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-gray-700 font-semibold mb-2">First Name *</label>
                  <input 
                    v-model="form.firstName" 
                    type="text" 
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John"
                  >
                </div>
                
                <div>
                  <label class="block text-gray-700 font-semibold mb-2">Last Name *</label>
                  <input 
                    v-model="form.lastName" 
                    type="text" 
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Smith"
                  >
                </div>
              </div>
              
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-gray-700 font-semibold mb-2">Phone *</label>
                  <input 
                    v-model="form.phone" 
                    type="tel" 
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="04xx xxx xxx"
                  >
                </div>
                
                <div>
                  <label class="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input 
                    v-model="form.email" 
                    type="email" 
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  >
                </div>
              </div>
              
              <div>
                <label class="block text-gray-700 font-semibold mb-2">Service Interested In *</label>
                <select 
                  v-model="form.service" 
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a service</option>
                  <option value="driving-lessons">Driving Lessons</option>
                  <option value="test-package">VicRoads Test Package</option>
                  <option value="medical-assessment">Medical Assessment</option>
                  <option value="refresher">Refresher Course</option>
                  <option value="advanced">Advanced Skills Training</option>
                  <option value="not-sure">Not Sure - Need Advice</option>
                </select>
              </div>
              
              <div>
                <label class="block text-gray-700 font-semibold mb-2">Suburb *</label>
                <input 
                  v-model="form.suburb" 
                  type="text" 
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="e.g., Box Hill, Caulfield, etc."
                >
              </div>
              
              <div>
                <label class="block text-gray-700 font-semibold mb-2">Preferred Contact Method *</label>
                <div class="flex space-x-4">
                  <label class="flex items-center">
                    <input 
                      v-model="form.contactMethod" 
                      type="radio" 
                      value="phone"
                      class="mr-2"
                    >
                    <span>Phone</span>
                  </label>
                  <label class="flex items-center">
                    <input 
                      v-model="form.contactMethod" 
                      type="radio" 
                      value="email"
                      class="mr-2"
                    >
                    <span>Email</span>
                  </label>
                  <label class="flex items-center">
                    <input 
                      v-model="form.contactMethod" 
                      type="radio" 
                      value="either"
                      class="mr-2"
                    >
                    <span>Either</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label class="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea 
                  v-model="form.message" 
                  rows="4" 
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tell us about your driving goals, any questions you have, or preferred lesson times..."
                ></textarea>
              </div>
              
              <div>
                <label class="flex items-center">
                  <input 
                    v-model="form.newsletter" 
                    type="checkbox" 
                    class="mr-2"
                  >
                  <span class="text-gray-600">Send me driving tips and special offers</span>
                </label>
              </div>
              
              <button type="submit" class="btn-primary w-full text-lg" :disabled="isSubmitting">
                <span v-if="isSubmitting">Sending...</span>
                <span v-else>Send Message</span>
              </button>
            </form>
            
            <div v-if="showSuccess" class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p class="text-green-700 font-semibold">
                Thank you for your message! We'll contact you within 24 hours to discuss your driving lessons.
              </p>
            </div>
            
            <div v-if="showError" class="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p class="text-red-700 font-semibold">
                Sorry, there was an error sending your message. Please call us directly at +61 430 191 324.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Business Hours -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-gray-900 text-center mb-16">Business Hours</h2>
        
        <div class="max-w-2xl mx-auto">
          <div class="card">
            <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">Lesson Availability</h3>
            
            <div class="space-y-4">
              <div class="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div class="flex items-center">
                  <Calendar class="w-5 h-5 text-primary mr-3" />
                  <span class="font-semibold text-gray-900">Monday - Friday</span>
                </div>
                <span class="text-primary font-bold">7:00 AM - 7:00 PM</span>
              </div>
              
              <div class="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div class="flex items-center">
                  <Calendar class="w-5 h-5 text-primary mr-3" />
                  <span class="font-semibold text-gray-900">Saturday</span>
                </div>
                <span class="text-primary font-bold">8:00 AM - 6:00 PM</span>
              </div>
              
              <div class="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div class="flex items-center">
                  <Calendar class="w-5 h-5 text-primary mr-3" />
                  <span class="font-semibold text-gray-900">Sunday</span>
                </div>
                <span class="text-primary font-bold">8:00 AM - 5:00 PM</span>
              </div>
            </div>
            
            <div class="mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 class="text-lg font-semibold text-gray-900 mb-3">Flexible Scheduling</h4>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center">
                  <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
                  <span>Early morning and evening lessons available</span>
                </li>
                <li class="flex items-center">
                  <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
                  <span>Weekend lessons for busy schedules</span>
                </li>
                <li class="flex items-center">
                  <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
                  <span>Same-day bookings when available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="py-20 bg-gray-50 scroll-mt-28">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-gray-900 text-center mb-16">Frequently Asked Questions</h2>
        
        <div class="max-w-3xl mx-auto space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" class="card">
            <button 
              @click="toggleFAQ(index)"
              type="button"
              class="w-full text-left flex justify-between items-center p-6 hover:bg-gray-50 transition-colors rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              :aria-expanded="faq.isOpen"
              :aria-controls="`faq-answer-${index}`"
            >
              <h3 class="text-lg font-semibold text-gray-900">{{ faq.question }}</h3>
              <ChevronDown 
                :class="{'rotate-180': faq.isOpen}" 
                class="w-5 h-5 text-primary transition-transform"
              />
            </button>
            <div v-if="faq.isOpen" :id="`faq-answer-${index}`" class="px-6 pb-6">
              <p class="text-gray-600">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-primary">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold text-white mb-6">Ready to Start Driving?</h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Take the first step towards your Victorian driver license. Contact us today for a free consultation!
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+61430191324" class="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary">
            <Phone class="w-5 h-5 inline mr-2" />
            Call Now: +61 430 191 324
          </a>
          <button @click="scrollToForm()" type="button" class="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary">
            Send Message
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { Phone, Mail, MapPin, Calendar, CheckCircle, ChevronDown } from 'lucide-vue-next'

const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)
const route = useRoute()

const form = reactive({
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  service: '',
  suburb: '',
  contactMethod: '',
  message: '',
  newsletter: false
})

const faqs = ref([
  {
    question: "Do you offer automatic and manual lessons?",
    answer: "Yes, we offer both automatic and manual driving lessons. Some of our instructors are qualified to teach both, while others specialize in one type. Let us know your preference when booking.",
    isOpen: false
  },
  {
    question: "What areas do you service?",
    answer: "We service South East Melbourne including Box Hill, Blackburn, Doncaster, Glen Waverley, Caulfield, Brighton, Moorabbin, Frankston, Dandenong, and surrounding suburbs. Contact us to confirm we cover your area.",
    isOpen: false
  },
  {
    question: "Do you provide the car for the VicRoads driving test?",
    answer: "Yes! Our test packages include use of our dual-control training vehicle for your VicRoads driving test. This is highly recommended as you'll be familiar with the car.",
    isOpen: false
  },
  {
    question: "How many lessons will I need?",
    answer: "This varies depending on your experience and learning pace. Beginners typically need 10-15 lessons, while those with some experience may need 5-8 lessons. We'll assess you during the first lesson and provide a personalized recommendation.",
    isOpen: false
  },
  {
    question: "Can I get picked up from home/school/work?",
    answer: "Yes, we offer pickup and drop-off service within our service areas. We can pick you up from home, school, work, or other convenient locations for your lesson.",
    isOpen: false
  },
  {
    question: "What's your cancellation policy?",
    answer: "We require 24 hours notice for cancellations to avoid charges. Lessons cancelled with less than 24 hours notice may incur a fee. We understand emergencies happen and will work with you when possible.",
    isOpen: false
  }
])

const toggleFAQ = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}

const scrollToForm = ({ focus = true } = {}) => {
  const el = document.getElementById('contact-form')
  if (!el) return

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' })

  if (focus) {
    const focusTarget = el.querySelector('input, select, textarea')
    if (focusTarget instanceof HTMLElement) {
      focusTarget.focus({ preventScroll: true })
    }
  }
}

const viewAreas = async () => {
  if (faqs.value[1]) {
    faqs.value[1].isOpen = true
  }

  await nextTick()
  const el = document.getElementById('faq')
  if (!el) return

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' })
}

const VALID_SERVICES = new Set([
  'driving-lessons',
  'test-package',
  'medical-assessment',
  'refresher',
  'advanced',
  'not-sure'
])

const applyServiceFromQuery = async () => {
  const raw = route.query.service
  const service = Array.isArray(raw) ? raw[0] : raw
  if (typeof service !== 'string' || !VALID_SERVICES.has(service)) return

  form.service = service
  await nextTick()
  scrollToForm({ focus: false })
}

onMounted(() => {
  void applyServiceFromQuery()
})

watch(() => route.query.service, () => {
  void applyServiceFromQuery()
})

const handleSubmit = async () => {
  isSubmitting.value = true
  showError.value = false
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Show success message
    showSuccess.value = true
    
    // Reset form
    Object.keys(form).forEach(key => {
      if (typeof form[key] === 'boolean') {
        form[key] = false
      } else {
        form[key] = ''
      }
    })
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
    
  } catch (error) {
    showError.value = true
  } finally {
    isSubmitting.value = false
  }
}
</script>
