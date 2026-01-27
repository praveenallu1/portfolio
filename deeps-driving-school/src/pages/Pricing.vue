<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-5xl font-bold text-gray-900 mb-6">
            Transparent <span class="text-primary">Pricing</span>
          </h1>
          <p class="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            No hidden fees, no surprises. Quality driving education at competitive prices in Melbourne. 
            Flexible packages to suit your learning needs and budget.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <div class="bg-white px-6 py-3 rounded-lg shadow-md">
              <span class="text-primary font-semibold">Best Price Guarantee</span>
            </div>
            <div class="bg-white px-6 py-3 rounded-lg shadow-md">
              <span class="text-primary font-semibold">Package Discounts Available</span>
            </div>
            <div class="bg-white px-6 py-3 rounded-lg shadow-md">
              <span class="text-primary font-semibold">No Hidden Fees</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Individual Lessons -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-gray-900 text-center mb-16">Individual Driving Lessons</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- 1-Hour Lesson -->
          <div class="card hover:scale-105 transition-transform">
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">1-Hour Lesson</h3>
              <div class="text-4xl font-bold text-primary mb-2">$65</div>
              <p class="text-gray-600">Per session</p>
            </div>
            
            <ul class="space-y-3 text-gray-600 mb-6">
              <li class="flex items-center">
                <Check class="w-4 h-4 text-green-500 mr-2" />
                <span>Professional instructor</span>
              </li>
              <li class="flex items-center">
                <Check class="w-4 h-4 text-green-500 mr-2" />
                <span>Dual-control vehicle</span>
              </li>
              <li class="flex items-center">
                <Check class="w-4 h-4 text-green-500 mr-2" />
                <span>Flexible scheduling</span>
              </li>
              <li class="flex items-center">
                <Check class="w-4 h-4 text-green-500 mr-2" />
                <span>Pickup & drop-off</span>
              </li>
            </ul>
            
            <button class="btn-primary w-full">Book 1-Hour Lesson</button>
          </div>

          <!-- 90-Minute Lesson -->
          <div class="card hover:scale-105 transition-transform">
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">90-Minute Lesson</h3>
              <div class="text-4xl font-bold text-primary mb-2">$95</div>
              <p class="text-gray-600">Per session</p>
            </div>
            
            <ul class="space-y-3 text-gray-600 mb-6">
              <li class="flex items-center">
                <Check class="w-4 h-4 text-green-500 mr-2" />
                <span>Extended practice time</span>
              </li>
              <li class="flex items-center">
                <Check class="w-4 h-4 text-green-500 mr-2" />
                <span>More skill coverage</span>
              </li>
              <li class="flex items-center">
                <Check class="w-4 h-4 text-green-500 mr-2" />
                <span>Better value per minute</span>
              </li>
              <li class="flex items-center">
                <Check class="w-4 h-4 text-green-500 mr-2" />
                <span>Complex route practice</span>
              </li>
            </ul>
            
            <button class="btn-primary w-full">Book 90-Minute Lesson</button>
          </div>

          <!-- 5-Lesson Package -->
          <div class="card hover:scale-105 transition-transform border-2 border-primary relative">
            <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm">
              Popular
            </div>
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Package class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">5-Lesson Package</h3>
              <div class="text-4xl font-bold text-primary mb-2">$310</div>
              <div class="text-green-600 font-semibold mb-2">Save $15</div>
              <p class="text-gray-600">Only $62 per lesson</p>
            </div>
            
            <ul class="space-y-3 text-gray-600 mb-6">
              <li class="flex items-center">
                <Check class="w-4 h-4 text-green-500 mr-2" />
                <span>Valid for 1 month</span>
              </li>
              <li class="flex items-center">
                <Check class="w-4 h-4 text-green-500 mr-2" />
                <span>Structured learning plan</span>
              </li>
              <li class="flex items-center">
                <Check class="w-4 h-4 text-green-500 mr-2" />
                <span>Progress tracking</span>
              </li>
              <li class="flex items-center">
                <Check class="w-4 h-4 text-green-500 mr-2" />
                <span>Priority scheduling</span>
              </li>
            </ul>
            
            <button class="btn-primary w-full">Book 5-Lesson Package</button>
          </div>

          <!-- 10-Lesson Package -->
          <div class="card hover:scale-105 transition-transform border-2 border-primary relative">
            <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm">
              Best Value
            </div>
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Package class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">10-Lesson Package</h3>
              <div class="text-4xl font-bold text-primary mb-2">$600</div>
              <div class="text-green-600 font-semibold mb-2">Save $50</div>
              <p class="text-gray-600">Only $60 per lesson</p>
            </div>
            
            <ul class="space-y-3 text-gray-600 mb-6">
              <li class="flex items-center">
                <Check class="w-4 h-4 text-green-500 mr-2" />
                <span>Valid for 3 months</span>
              </li>
              <li class="flex items-center">
                <Check class="w-4 h-4 text-green-500 mr-2" />
                <span>Complete training program</span>
              </li>
              <li class="flex items-center">
                <Check class="w-4 h-4 text-green-500 mr-2" />
                <span>Test preparation included</span>
              </li>
              <li class="flex items-center">
                <Check class="w-4 h-4 text-green-500 mr-2" />
                <span>Free practice materials</span>
              </li>
            </ul>
            
            <button class="btn-primary w-full">Book 10-Lesson Package</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Test Packages -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-gray-900 text-center mb-16">VicRoads Test Packages</h2>
        
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- Test + 1-Hour Lesson -->
          <div class="card hover:scale-105 transition-transform">
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <ClipboardCheck class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Test + 1-Hour Lesson</h3>
              <div class="text-4xl font-bold text-primary mb-2">$250</div>
              <p class="text-gray-600">Complete test preparation</p>
            </div>
            
            <div class="space-y-3 mb-6">
              <h4 class="font-semibold text-gray-900">Package Includes:</h4>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center">
                  <Check class="w-4 h-4 text-green-500 mr-2" />
                  <span>1-hour pre-test lesson</span>
                </li>
                <li class="flex items-center">
                  <Check class="w-4 h-4 text-green-500 mr-2" />
                  <span>Test route practice</span>
                </li>
                <li class="flex items-center">
                  <Check class="w-4 h-4 text-green-500 mr-2" />
                  <span>Dual-control car for test</span>
                </li>
                <li class="flex items-center">
                  <Check class="w-4 h-4 text-green-500 mr-2" />
                  <span>Test booking assistance</span>
                </li>
              </ul>
            </div>
            
            <button class="btn-primary w-full">Book Test Package</button>
          </div>

          <!-- Test + 2-Hour Lesson -->
          <div class="card hover:scale-105 transition-transform border-2 border-primary relative">
            <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm">
              Recommended
            </div>
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <ClipboardCheck class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Test + 2-Hour Lesson</h3>
              <div class="text-4xl font-bold text-primary mb-2">$280</div>
              <div class="text-green-600 font-semibold mb-2">Save $35</div>
              <p class="text-gray-600">Extended preparation</p>
            </div>
            
            <div class="space-y-3 mb-6">
              <h4 class="font-semibold text-gray-900">Package Includes:</h4>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center">
                  <Check class="w-4 h-4 text-green-500 mr-2" />
                  <span>2-hour pre-test lesson</span>
                </li>
                <li class="flex items-center">
                  <Check class="w-4 h-4 text-green-500 mr-2" />
                  <span>Extended test route practice</span>
                </li>
                <li class="flex items-center">
                  <Check class="w-4 h-4 text-green-500 mr-2" />
                  <span>Dual-control car for test</span>
                </li>
                <li class="flex items-center">
                  <Check class="w-4 h-4 text-green-500 mr-2" />
                  <span>Mock test assessment</span>
                </li>
              </ul>
            </div>
            
            <button class="btn-primary w-full">Book Test Package</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Medical Assessment Pricing -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-gray-900 text-center mb-16">Medical Assessment Services</h2>
        
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- Medical Assessment Training -->
          <div class="card hover:scale-105 transition-transform">
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Medical Assessment Training</h3>
              <div class="text-4xl font-bold text-primary mb-2">$80</div>
              <p class="text-gray-600">1-hour session</p>
            </div>
            
            <ul class="space-y-3 text-gray-600 mb-6">
              <li class="flex items-center">
                <Check class="w-4 h-4 text-green-500 mr-2" />
                <span>Medical review preparation</span>
              </li>
              <li class="flex items-center">
                <Check class="w-4 h-4 text-green-500 mr-2" />
                <span>Confidence rebuilding</span>
              </li>
              <li class="flex items-center">
                <Check class="w-4 h-4 text-green-500 mr-2" />
                <span>Adaptive techniques</span>
              </li>
              <li class="flex items-center">
                <Check class="w-4 h-4 text-green-500 mr-2" />
                <span>TAC funded options</span>
              </li>
            </ul>
            
            <button class="btn-primary w-full">Book Assessment</button>
          </div>

          <!-- Medical Assessment through OT -->
          <div class="card hover:scale-105 transition-transform">
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Medical Assessment (OT)</h3>
              <div class="text-4xl font-bold text-primary mb-2">$150</div>
              <p class="text-gray-600">Comprehensive assessment</p>
            </div>
            
            <ul class="space-y-3 text-gray-600 mb-6">
              <li class="flex items-center">
                <Check class="w-4 h-4 text-green-500 mr-2" />
                <span>Comprehensive evaluation</span>
              </li>
              <li class="flex items-center">
                <Check class="w-4 h-4 text-green-500 mr-2" />
                <span>Occupational therapist support</span>
              </li>
              <li class="flex items-center">
                <Check class="w-4 h-4 text-green-500 mr-2" />
                <span>Detailed report provided</span>
              </li>
              <li class="flex items-center">
                <Check class="w-4 h-4 text-green-500 mr-2" />
                <span>VicRoads submission ready</span>
              </li>
            </ul>
            
            <button class="btn-primary w-full">Book OT Assessment</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Table -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-gray-900 text-center mb-16">Package Comparison</h2>
        
        <div class="overflow-x-auto">
          <table class="w-full bg-white rounded-lg shadow-lg">
            <thead class="bg-primary text-white">
              <tr>
                <th class="px-6 py-4 text-left">Feature</th>
                <th class="px-6 py-4 text-center">1-Hour</th>
                <th class="px-6 py-4 text-center">90-Minute</th>
                <th class="px-6 py-4 text-center">5-Lesson</th>
                <th class="px-6 py-4 text-center">10-Lesson</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="px-6 py-4 font-semibold">Price</td>
                <td class="px-6 py-4 text-center">$65</td>
                <td class="px-6 py-4 text-center">$95</td>
                <td class="px-6 py-4 text-center">$310</td>
                <td class="px-6 py-4 text-center">$600</td>
              </tr>
              <tr class="border-b bg-gray-50">
                <td class="px-6 py-4">Professional Instructor</td>
                <td class="px-6 py-4 text-center"><Check class="w-5 h-5 text-green-500 mx-auto" /></td>
                <td class="px-6 py-4 text-center"><Check class="w-5 h-5 text-green-500 mx-auto" /></td>
                <td class="px-6 py-4 text-center"><Check class="w-5 h-5 text-green-500 mx-auto" /></td>
                <td class="px-6 py-4 text-center"><Check class="w-5 h-5 text-green-500 mx-auto" /></td>
              </tr>
              <tr class="border-b">
                <td class="px-6 py-4">Dual-Control Vehicle</td>
                <td class="px-6 py-4 text-center"><Check class="w-5 h-5 text-green-500 mx-auto" /></td>
                <td class="px-6 py-4 text-center"><Check class="w-5 h-5 text-green-500 mx-auto" /></td>
                <td class="px-6 py-4 text-center"><Check class="w-5 h-5 text-green-500 mx-auto" /></td>
                <td class="px-6 py-4 text-center"><Check class="w-5 h-5 text-green-500 mx-auto" /></td>
              </tr>
              <tr class="border-b bg-gray-50">
                <td class="px-6 py-4">Pickup & Drop-off</td>
                <td class="px-6 py-4 text-center"><Check class="w-5 h-5 text-green-500 mx-auto" /></td>
                <td class="px-6 py-4 text-center"><Check class="w-5 h-5 text-green-500 mx-auto" /></td>
                <td class="px-6 py-4 text-center"><Check class="w-5 h-5 text-green-500 mx-auto" /></td>
                <td class="px-6 py-4 text-center"><Check class="w-5 h-5 text-green-500 mx-auto" /></td>
              </tr>
              <tr class="border-b">
                <td class="px-6 py-4">Progress Tracking</td>
                <td class="px-6 py-4 text-center"><X class="w-5 h-5 text-gray-400 mx-auto" /></td>
                <td class="px-6 py-4 text-center"><X class="w-5 h-5 text-gray-400 mx-auto" /></td>
                <td class="px-6 py-4 text-center"><Check class="w-5 h-5 text-green-500 mx-auto" /></td>
                <td class="px-6 py-4 text-center"><Check class="w-5 h-5 text-green-500 mx-auto" /></td>
              </tr>
              <tr class="border-b bg-gray-50">
                <td class="px-6 py-4">Test Preparation</td>
                <td class="px-6 py-4 text-center"><X class="w-5 h-5 text-gray-400 mx-auto" /></td>
                <td class="px-6 py-4 text-center"><X class="w-5 h-5 text-gray-400 mx-auto" /></td>
                <td class="px-6 py-4 text-center"><Check class="w-5 h-5 text-green-500 mx-auto" /></td>
                <td class="px-6 py-4 text-center"><Check class="w-5 h-5 text-green-500 mx-auto" /></td>
              </tr>
              <tr class="border-b">
                <td class="px-6 py-4">Free Materials</td>
                <td class="px-6 py-4 text-center"><X class="w-5 h-5 text-gray-400 mx-auto" /></td>
                <td class="px-6 py-4 text-center"><X class="w-5 h-5 text-gray-400 mx-auto" /></td>
                <td class="px-6 py-4 text-center"><X class="w-5 h-5 text-gray-400 mx-auto" /></td>
                <td class="px-6 py-4 text-center"><Check class="w-5 h-5 text-green-500 mx-auto" /></td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-6 py-4">Validity</td>
                <td class="px-6 py-4 text-center">Single use</td>
                <td class="px-6 py-4 text-center">Single use</td>
                <td class="px-6 py-4 text-center">1 month</td>
                <td class="px-6 py-4 text-center">3 months</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Special Offers -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-gray-900 text-center mb-16">Special Offers & Discounts</h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="card bg-gradient-to-br from-blue-50 to-indigo-50">
            <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">Student Discount</h3>
            <p class="text-gray-600 text-center mb-4">10% off all packages with valid student ID</p>
            <div class="text-center">
              <span class="text-2xl font-bold text-blue-600">10% OFF</span>
            </div>
          </div>
          
          <div class="card bg-gradient-to-br from-green-50 to-emerald-50">
            <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users2 class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">Group Booking</h3>
            <p class="text-gray-600 text-center mb-4">Book with friends and save on each package</p>
            <div class="text-center">
              <span class="text-2xl font-bold text-green-600">15% OFF</span>
            </div>
          </div>
          
          <div class="card bg-gradient-to-br from-purple-50 to-violet-50">
            <div class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Gift class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">Referral Bonus</h3>
            <p class="text-gray-600 text-center mb-4">Refer a friend and get $20 credit</p>
            <div class="text-center">
              <span class="text-2xl font-bold text-purple-600">$20 CREDIT</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-primary">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold text-white mb-6">Ready to Start Learning?</h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Choose the package that suits your needs and start your driving journey today
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact" class="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
            Book Your First Lesson
          </router-link>
          <a href="tel:+61430191324" class="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
            Call for Package Advice
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Clock, Package, ClipboardCheck, Heart, Check, X, Users, Users2, Gift } from 'lucide-vue-next'
</script>
