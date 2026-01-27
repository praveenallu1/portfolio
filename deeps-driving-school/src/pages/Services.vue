<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-5xl font-bold text-gray-900 mb-6">
            Professional Driving <span class="text-primary">Services</span>
          </h1>
          <p class="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Comprehensive driving education services in Melbourne. From complete beginners to licensed drivers needing refresher training - we have the perfect program for you.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <div class="bg-white px-6 py-3 rounded-lg shadow-md">
              <span class="text-primary font-semibold">98% Pass Rate</span>
            </div>
            <div class="bg-white px-6 py-3 rounded-lg shadow-md">
              <span class="text-primary font-semibold">Accredited Instructors</span>
            </div>
            <div class="bg-white px-6 py-3 rounded-lg shadow-md">
              <span class="text-primary font-semibold">Dual-Control Cars</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Services Grid -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Driving Lessons -->
          <div class="card group">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Car class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Driving Lessons</h3>
            <p class="text-gray-600 mb-6">
              Professional driving lessons tailored to your skill level and learning pace. Perfect for beginners or those wanting to improve specific skills.
            </p>
            
            <div class="space-y-3 mb-6">
              <h4 class="font-semibold text-gray-900">Lesson Options:</h4>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center">
                  <CheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  <span>1-Hour Lesson - $65</span>
                </li>
                <li class="flex items-center">
                  <CheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  <span>90-Minute Lesson - $95</span>
                </li>
                <li class="flex items-center">
                  <CheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  <span>5-Lesson Package - $310 (Save $15)</span>
                </li>
                <li class="flex items-center">
                  <CheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  <span>10-Lesson Package - $600 (Save $50)</span>
                </li>
              </ul>
            </div>
            
            <div class="space-y-3">
              <h4 class="font-semibold text-gray-900">What You'll Learn:</h4>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center">
                  <CheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  <span>Vehicle control and operation</span>
                </li>
                <li class="flex items-center">
                  <CheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  <span>Traffic rules and regulations</span>
                </li>
                <li class="flex items-center">
                  <CheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  <span>Parking and maneuvering</span>
                </li>
                <li class="flex items-center">
                  <CheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  <span>Hazard perception</span>
                </li>
              </ul>
            </div>
            
            <button class="btn-primary w-full mt-6">Book Driving Lesson</button>
          </div>

          <!-- VicRoads Test Packages -->
          <div class="card group border-2 border-primary relative">
            <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm">
              Most Popular
            </div>
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ClipboardCheck class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">VicRoads Test Packages</h3>
            <p class="text-gray-600 mb-6">
              Complete test preparation packages including pre-test training, practice on actual test routes, and use of our dual-control car for your VicRoads driving test.
            </p>
            
            <div class="space-y-3 mb-6">
              <h4 class="font-semibold text-gray-900">Package Options:</h4>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center">
                  <CheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  <span>Test + 1-Hour Lesson - $250</span>
                </li>
                <li class="flex items-center">
                  <CheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  <span>Test + 2-Hour Lesson - $280 (Save $35)</span>
                </li>
              </ul>
            </div>
            
            <div class="space-y-3">
              <h4 class="font-semibold text-gray-900">Package Includes:</h4>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center">
                  <CheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  <span>Pre-test assessment</span>
                </li>
                <li class="flex items-center">
                  <CheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  <span>Test route practice</span>
                </li>
                <li class="flex items-center">
                  <CheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  <span>Dual-control car for test</span>
                </li>
                <li class="flex items-center">
                  <CheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  <span>Test booking assistance</span>
                </li>
              </ul>
            </div>
            
            <button class="btn-primary w-full mt-6">Book Test Package</button>
          </div>

          <!-- Medical Assessment -->
          <div class="card group">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Heart class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Medical Assessment</h3>
            <p class="text-gray-600 mb-6">
              Specialized training for drivers requiring medical review assessments. We help you meet VicRoads medical requirements and regain driving confidence.
            </p>
            
            <div class="space-y-3 mb-6">
              <h4 class="font-semibold text-gray-900">Assessment Options:</h4>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center">
                  <CheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  <span>Medical Assessment Training (1 Hour) - $80</span>
                </li>
                <li class="flex items-center">
                  <CheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  <span>Medical Assessment through OT - $150</span>
                </li>
              </ul>
            </div>
            
            <div class="space-y-3">
              <h4 class="font-semibold text-gray-900">Services Include:</h4>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center">
                  <CheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  <span>TAC funded assessments</span>
                </li>
                <li class="flex items-center">
                  <CheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  <span>Medical review preparation</span>
                </li>
                <li class="flex items-center">
                  <CheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  <span>Confidence rebuilding</span>
                </li>
                <li class="flex items-center">
                  <CheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  <span>Adaptive techniques training</span>
                </li>
              </ul>
            </div>
            
            <button class="btn-primary w-full mt-6">Book Medical Assessment</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Services -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-gray-900 text-center mb-16">Additional Services</h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Refresher Course -->
          <div class="card">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <RefreshCw class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Refresher Course</h3>
            <p class="text-gray-600 mb-6">
              Perfect for licensed drivers who want to refine their skills, regain confidence, or adjust to Victorian road rules. Available upon request.
            </p>
            
            <div class="space-y-3 mb-6">
              <h4 class="font-semibold text-gray-900">Ideal For:</h4>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center">
                  <CheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  <span>International license conversions</span>
                </li>
                <li class="flex items-center">
                  <CheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  <span>Haven't driven in years</span>
                </li>
                <li class="flex items-center">
                  <CheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  <span>New to Melbourne roads</span>
                </li>
                <li class="flex items-center">
                  <CheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  <span>Building confidence after accident</span>
                </li>
              </ul>
            </div>
            
            <button class="btn-primary w-full">Contact for Refresher Course</button>
          </div>

          <!-- Advanced Skills -->
          <div class="card">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Advanced Skills Training</h3>
            <p class="text-gray-600 mb-6">
              Take your driving skills to the next level with advanced training for specific situations and vehicle types.
            </p>
            
            <div class="space-y-3 mb-6">
              <h4 class="font-semibold text-gray-900">Advanced Topics:</h4>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center">
                  <CheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  <span>City driving and parking</span>
                </li>
                <li class="flex items-center">
                  <CheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  <span>Freeway and highway driving</span>
                </li>
                <li class="flex items-center">
                  <CheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  <span>Night driving techniques</span>
                </li>
                <li class="flex items-center">
                  <CheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  <span>Adverse weather conditions</span>
                </li>
              </ul>
            </div>
            
            <button class="btn-primary w-full">Book Advanced Training</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Areas -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-gray-900 text-center mb-16">Service Areas</h2>
        
        <div class="max-w-4xl mx-auto">
          <div class="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">South East Melbourne Coverage</h3>
            <div class="grid md:grid-cols-3 gap-6">
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">Eastern Suburbs</h4>
                <ul class="space-y-2 text-gray-600">
                  <li>• Box Hill</li>
                  <li>• Blackburn</li>
                  <li>• Doncaster</li>
                  <li>• Glen Waverley</li>
                  <li>• Wantirna</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">Southern Suburbs</h4>
                <ul class="space-y-2 text-gray-600">
                  <li>• Caulfield</li>
                  <li>• Brighton</li>
                  <li>• Moorabbin</li>
                  <li>• Frankston</li>
                  <li>• Dandenong</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">Inner Melbourne</h4>
                <ul class="space-y-2 text-gray-600">
                  <li>• South Yarra</li>
                  <li>• St Kilda</li>
                  <li>• Richmond</li>
                  <li>• Prahran</li>
                  <li>• Malvern</li>
                </ul>
              </div>
            </div>
            <div class="mt-8 text-center">
              <p class="text-gray-600 mb-4">Don't see your area listed? Contact us - we may be able to accommodate!</p>
              <router-link to="/contact" class="btn-primary">Check Your Area</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-gray-900 text-center mb-16">Why Choose Deep's Driving School</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Award class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">15+ Years Experience</h3>
            <p class="text-gray-600">Established in 2008, trusted by thousands of students</p>
          </div>
          
          <div class="text-center">
            <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Users class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Expert Instructors</h3>
            <p class="text-gray-600">Accredited, patient, and experienced teaching professionals</p>
          </div>
          
          <div class="text-center">
            <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Car class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Modern Fleet</h3>
            <p class="text-gray-600">Dual-control vehicles for your safety and peace of mind</p>
          </div>
          
          <div class="text-center">
            <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Target class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">98% Pass Rate</h3>
            <p class="text-gray-600">Outstanding success rate for VicRoads driving tests</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-primary">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold text-white mb-6">Ready to Start Your Driving Journey?</h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Book your first lesson today and join thousands of successful Melbourne drivers
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact" class="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
            Book Your First Lesson
          </router-link>
          <router-link to="/pricing" class="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
            View Pricing
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Car, ClipboardCheck, Heart, RefreshCw, Zap, CheckCircle, Award, Users, Target } from 'lucide-vue-next'
</script>
