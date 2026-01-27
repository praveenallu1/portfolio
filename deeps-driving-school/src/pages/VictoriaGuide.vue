<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-5xl font-bold text-gray-900 mb-6">
            Victoria Driver License <span class="text-primary">Complete Guide</span>
          </h1>
          <p class="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Your comprehensive roadmap to getting a Victorian driver license in 2024. 
            From learner permit to full license - we guide you through every VicRoads requirement.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#learner-permit" class="btn-primary text-lg">Start Learning Guide</a>
            <button @click="downloadPDF" class="btn-secondary text-lg">
              <Download class="w-5 h-5 inline mr-2" />
              Download Free PDF Guide
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Navigation -->
    <section class="py-8 bg-white sticky top-16 z-40 shadow-md">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-4">
          <a href="#learner-permit" class="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">Learner Permit</a>
          <a href="#supervised-driving" class="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">120 Hours Driving</a>
          <a href="#hazard-test" class="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">Hazard Test</a>
          <a href="#driving-test" class="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">Driving Test</a>
          <a href="#p1-license" class="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">P1 License</a>
          <a href="#p2-license" class="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">P2 License</a>
        </div>
      </div>
    </section>

    <!-- Learner Permit Section -->
    <section id="learner-permit" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bold text-gray-900 mb-6">Step 1: Get Your Learner Permit</h2>
            <p class="text-lg text-gray-600 mb-8">
              The first step towards your Victorian driver license is obtaining a learner permit. 
              You must be at least 16 years old and pass VicRoads requirements.
            </p>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen class="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">Study VicRoads Resources</h3>
                  <p class="text-gray-600">Master the 'Road to Solo Driving' handbook and practice with online tests.</p>
                  <button @click="downloadStudyGuide" class="text-primary hover:underline mt-2">
                    <Download class="w-4 h-4 inline mr-1" />
                    Download Study Checklist PDF
                  </button>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText class="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">Pass Knowledge Test</h3>
                  <p class="text-gray-600">32 multiple-choice questions, need 78% or higher to pass at VicRoads.</p>
                  <button @click="downloadPracticeTest" class="text-primary hover:underline mt-2">
                    <Download class="w-4 h-4 inline mr-1" />
                    Download Practice Test PDF
                  </button>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Eye class="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">Eyesight Test</h3>
                  <p class="text-gray-600">Simple vision screening at VicRoads customer service center.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
            <div class="bg-white rounded-xl p-6 shadow-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Learner Permit Requirements</h3>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <CheckCircle class="w-5 h-5 text-green-500 mr-3" />
                  <span>Minimum age: 16 years</span>
                </li>
                <li class="flex items-center">
                  <CheckCircle class="w-5 h-5 text-green-500 mr-3" />
                  <span>Pass VicRoads knowledge test</span>
                </li>
                <li class="flex items-center">
                  <CheckCircle class="w-5 h-5 text-green-500 mr-3" />
                  <span>Pass eyesight test</span>
                </li>
                <li class="flex items-center">
                  <CheckCircle class="w-5 h-5 text-green-500 mr-3" />
                  <span>Provide identification documents</span>
                </li>
                <li class="flex items-center">
                  <CheckCircle class="w-5 h-5 text-green-500 mr-3" />
                  <span>Pay VicRoads fee</span>
                </li>
              </ul>
              <div class="mt-6 p-4 bg-yellow-50 rounded-lg">
                <p class="text-sm text-gray-700">
                  <strong>Pro Tip:</strong> Book your test early as VicRoads centers can have waiting periods of 2-4 weeks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Supervised Driving Section -->
    <section id="supervised-driving" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Step 2: Complete 120 Supervised Hours</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Log 120 hours of supervised driving practice before taking your driving test
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="card">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">120 Hours Total</h3>
            <p class="text-gray-600 mb-4">Minimum supervised driving hours required by VicRoads</p>
            <ul class="space-y-2 text-gray-600">
              <li>• 10 hours night driving</li>
              <li>• Logged in official logbook</li>
              <li>• Signed by supervisor</li>
            </ul>
          </div>
          
          <div class="card">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Users class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Qualified Supervisor</h3>
            <p class="text-gray-600 mb-4">Must be supervised by a fully licensed driver</p>
            <ul class="space-y-2 text-gray-600">
              <li>• Full Victorian license</li>
              <li>• No alcohol in system</li>
              <li>• Seat beside learner</li>
            </ul>
          </div>
          
          <div class="card">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <FileCheck class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Log Book Requirements</h3>
            <p class="text-gray-600 mb-4">Official VicRoads log book must be completed</p>
            <ul class="space-y-2 text-gray-600">
              <li>• Date and time of each drive</li>
              <li>• Weather conditions</li>
              <li>• Road types and conditions</li>
            </ul>
          </div>
        </div>
        
        <div class="mt-12 bg-white rounded-2xl shadow-xl p-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">How We Help You Complete Your Hours</h3>
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h4 class="text-lg font-semibold text-gray-900 mb-4">Professional Driving Lessons</h4>
              <ul class="space-y-3 text-gray-600">
                <li class="flex items-start">
                  <CheckCircle class="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Each lesson counts 3x in your logbook (max 10 hours)</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle class="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Structured lessons covering all required skills</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle class="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Professional assessment of your progress</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-gray-900 mb-4">Log Book Guidance</h4>
              <ul class="space-y-3 text-gray-600">
                <li class="flex items-start">
                  <CheckCircle class="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Help with proper logbook completion</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle class="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Ensure all VicRoads requirements are met</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle class="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span>Practice in various driving conditions</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-6 text-center">
            <button @click="downloadLogbookTemplate" class="btn-primary">
              <Download class="w-5 h-5 inline mr-2" />
              Download Log Book Template PDF
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Hazard Test Section -->
    <section id="hazard-test" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bold text-gray-900 mb-6">Step 3: Pass Hazard Perception Test</h2>
            <p class="text-lg text-gray-600 mb-8">
              Before taking your driving test, you must pass the hazard perception test at VicRoads.
            </p>
            
            <div class="space-y-6">
              <div class="bg-blue-50 rounded-lg p-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Test Format</h3>
                <ul class="space-y-2 text-gray-600">
                  <li>• 28 video scenarios</li>
                  <li>• Touch screen response required</li>
                  <li>• Must identify hazards in real-time</li>
                  <li>• Pass mark: 54% or higher</li>
                </ul>
              </div>
              
              <div class="bg-green-50 rounded-lg p-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Common Hazards</h3>
                <ul class="space-y-2 text-gray-600">
                  <li>• Pedestrians crossing roads</li>
                  <li>• Vehicles emerging from side streets</li>
                  <li>• Changing traffic lights</li>
                  <li>• Cyclists and motorcyclists</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8">
            <div class="bg-white rounded-xl p-6 shadow-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Hazard Test Preparation</h3>
              <p class="text-gray-600 mb-6">We prepare you for the hazard perception test with:</p>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <CheckCircle class="w-5 h-5 text-green-500 mr-3" />
                  <span>Practice scenarios during lessons</span>
                </li>
                <li class="flex items-center">
                  <CheckCircle class="w-5 h-5 text-green-500 mr-3" />
                  <span>Hazard identification techniques</span>
                </li>
                <li class="flex items-center">
                  <CheckCircle class="w-5 h-5 text-green-500 mr-3" />
                  <span>Timing and response strategies</span>
                </li>
              </ul>
              <button @click="downloadHazardGuide" class="btn-primary w-full mt-6">
                <Download class="w-5 h-5 inline mr-2" />
                Download Hazard Test Guide PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Driving Test Section -->
    <section id="driving-test" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Step 4: Pass the VicRoads Driving Test</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            The final step - demonstrate your driving skills to the VicRoads testing officer
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div class="card">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Test Requirements</h3>
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span class="text-red-600 font-bold">1</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Vehicle Safety Check</h4>
                  <p class="text-gray-600">Demonstrate knowledge of car safety features and perform basic checks</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span class="text-red-600 font-bold">2</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">On-Road Driving</h4>
                  <p class="text-gray-600">30-minute drive including various road types and traffic conditions</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-3">
                <div class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span class="text-red-600 font-bold">3</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Maneuvers</h4>
                  <p class="text-gray-600">Parallel parking, three-point turn, and other required maneuvers</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="card">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Our Test Preparation</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <CheckCircle class="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Test Route Practice:</strong> Drive actual VicRoads test routes in your area</span>
              </li>
              <li class="flex items-start">
                <CheckCircle class="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Mock Tests:</strong> Full practice tests with detailed feedback</span>
              </li>
              <li class="flex items-start">
                <CheckCircle class="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Test Car Provided:</strong> Dual-control vehicle for your actual test</span>
              </li>
              <li class="flex items-start">
                <CheckCircle class="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span><strong>Pre-Test Briefing:</strong> Last-minute tips and confidence building</span>
              </li>
            </ul>
            
            <div class="mt-6 p-4 bg-blue-50 rounded-lg">
              <p class="text-sm text-gray-700">
                <strong>Success Rate:</strong> 98% of our students pass their driving test on the first attempt!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- P1 & P2 License Section -->
    <section id="p1-license" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Step 5: Get Your Probationary License</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            After passing your test, you'll receive your P1 or P2 probationary license
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div class="card border-2 border-red-200">
            <div class="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-white font-bold text-xl">P1</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Red P Plates</h3>
            <p class="text-gray-600 mb-6">First probationary license after passing your driving test</p>
            <ul class="space-y-2 text-gray-600">
              <li>• Duration: 12 months</li>
              <li>• Display red P plates</li>
              <li>• Zero blood alcohol limit</li>
              <li>• No towing trailers</li>
              <li>• No high-powered vehicles</li>
              <li>• Mobile phone restrictions</li>
            </ul>
          </div>
          
          <div class="card border-2 border-green-200">
            <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-white font-bold text-xl">P2</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Green P Plates</h3>
            <p class="text-gray-600 mb-6">Second probationary license after 12 months on P1</p>
            <ul class="space-y-2 text-gray-600">
              <li>• Duration: 3 years</li>
              <li>• Display green P plates</li>
              <li>• 0.05% blood alcohol limit</li>
              <li>• Can tow trailers</li>
              <li>• Some high-performance vehicles allowed</li>
              <li>• Reduced phone restrictions</li>
            </ul>
          </div>
        </div>
        
        <div class="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Full License Requirements</h3>
          <div class="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar class="w-8 h-8 text-blue-600" />
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">Age Requirement</h4>
              <p class="text-gray-600">Minimum 21 years OR</p>
              <p class="text-gray-600">3 years on P2 license</p>
            </div>
            <div>
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield class="w-8 h-8 text-blue-600" />
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">Good Driving Record</h4>
              <p class="text-gray-600">No serious offenses</p>
              <p class="text-gray-600">for 12 months</p>
            </div>
            <div>
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award class="w-8 h-8 text-blue-600" />
              </div>
              <h4 class="font-semibold text-gray-900 mb-2">Hazard Test</h4>
              <p class="text-gray-600">Pass advanced</p>
              <p class="text-gray-600">hazard perception test</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Download Resources Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Free Downloadable Resources</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guides and checklists to help you succeed
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="card hover:scale-105 transition-transform cursor-pointer" @click="downloadPDF">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Complete License Guide</h3>
            <p class="text-gray-600 mb-4">Step-by-step guide from learner to full license</p>
            <button class="text-primary hover:underline font-semibold">
              <Download class="w-4 h-4 inline mr-1" />
              Download PDF
            </button>
          </div>
          
          <div class="card hover:scale-105 transition-transform cursor-pointer" @click="downloadStudyGuide">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Study Checklist</h3>
            <p class="text-gray-600 mb-4">Complete checklist for knowledge test preparation</p>
            <button class="text-primary hover:underline font-semibold">
              <Download class="w-4 h-4 inline mr-1" />
              Download PDF
            </button>
          </div>
          
          <div class="card hover:scale-105 transition-transform cursor-pointer" @click="downloadLogbookTemplate">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <FileCheck class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Log Book Template</h3>
            <p class="text-gray-600 mb-4">Printable template for your 120 hours logbook</p>
            <button class="text-primary hover:underline font-semibold">
              <Download class="w-4 h-4 inline mr-1" />
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-primary">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold text-white mb-6">Ready to Start Your License Journey?</h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join 3000+ successful students who got their Victorian license with our expert guidance
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact" class="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
            Book Your First Lesson
          </router-link>
          <a href="tel:+61430191324" class="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
            Call Now: +61 430 191 324
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Download, BookOpen, FileText, Eye, Clock, Users, FileCheck, CheckCircle, Calendar, Shield, Award } from 'lucide-vue-next'

const downloadPDF = () => {
  // In a real app, this would trigger a PDF download
  console.log('Downloading Complete License Guide PDF')
  alert('PDF download would start here - Complete Victoria License Guide')
}

const downloadStudyGuide = () => {
  console.log('Downloading Study Checklist PDF')
  alert('PDF download would start here - Study Checklist')
}

const downloadPracticeTest = () => {
  console.log('Downloading Practice Test PDF')
  alert('PDF download would start here - Practice Test Questions')
}

const downloadLogbookTemplate = () => {
  console.log('Downloading Logbook Template PDF')
  alert('PDF download would start here - Log Book Template')
}

const downloadHazardGuide = () => {
  console.log('Downloading Hazard Test Guide PDF')
  alert('PDF download would start here - Hazard Perception Test Guide')
}
</script>
