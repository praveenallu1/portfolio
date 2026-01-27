<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-5xl font-bold text-gray-900 mb-6">
            About <span class="text-primary">Deep's Driving School</span>
          </h1>
          <p class="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Melbourne's trusted driving school since 2008. We've helped over 3000 students gain confidence and independence on the road. 
            Our mission is to create skilled, safe drivers for life.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <div class="bg-white px-6 py-3 rounded-lg shadow-md">
              <span class="text-primary font-semibold">15+ Years Experience</span>
            </div>
            <div class="bg-white px-6 py-3 rounded-lg shadow-md">
              <span class="text-primary font-semibold">3000+ Successful Students</span>
            </div>
            <div class="bg-white px-6 py-3 rounded-lg shadow-md">
              <span class="text-primary font-semibold">98% Pass Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p class="text-lg text-gray-600 mb-6">
              Founded in 2008 by Deep Kumar, Deep's Driving School started with a simple mission: to make driving education accessible, 
              effective, and stress-free for Melbourne residents. What began as a one-person operation has grown into a team of 
              accredited instructors serving South East Melbourne.
            </p>
            <p class="text-lg text-gray-600 mb-6">
              Over the past 15+ years, we've refined our teaching methods, invested in modern dual-control vehicles, 
              and built a reputation for excellence. Our success is measured not just by our 98% pass rate, but by the 
              confidence and skills our students carry with them for life.
            </p>
            <p class="text-lg text-gray-600">
              We believe that good driving is about more than just passing a test - it's about developing the judgment, 
              skills, and attitude to be safe and responsible drivers for years to come.
            </p>
          </div>
          
          <div class="relative">
            <div class="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl p-8">
              <div class="aspect-video bg-white rounded-lg flex items-center justify-center">
                <Award class="w-24 h-24 text-primary" />
              </div>
              <div class="mt-6 text-center">
                <h3 class="text-2xl font-bold text-gray-900">15+ Years of Excellence</h3>
                <p class="text-gray-600 mt-2">Serving Melbourne since 2008</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Values -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-gray-900 text-center mb-16">Our Mission & Values</h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="card text-center">
            <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Target class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p class="text-gray-600">
              To create confident, skilled, and responsible drivers through patient, professional instruction 
              and a supportive learning environment.
            </p>
          </div>
          
          <div class="card text-center">
            <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p class="text-gray-600">
              Patience, professionalism, safety, and student success. We treat every student as an individual 
              with unique learning needs and goals.
            </p>
          </div>
          
          <div class="card text-center">
            <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p class="text-gray-600">
              To be Melbourne's most trusted driving school, known for producing safe, confident drivers who 
              contribute to road safety for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Meet the Team -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-gray-900 text-center mb-16">Meet Our Team</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card text-center">
            <div class="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              <User class="w-12 h-12 text-gray-500" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Deep Kumar</h3>
            <p class="text-primary font-semibold mb-4">Founder & Head Instructor</p>
            <p class="text-gray-600 mb-4">
              15+ years experience, accredited VicRoads instructor, specializes in nervous drivers and test preparation.
            </p>
            <div class="flex justify-center space-x-2">
              <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">VicRoads Accredited</span>
              <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Manual & Auto</span>
            </div>
          </div>
          
          <div class="card text-center">
            <div class="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              <User class="w-12 h-12 text-gray-500" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Sarah Chen</h3>
            <p class="text-primary font-semibold mb-4">Senior Instructor</p>
            <p class="text-gray-600 mb-4">
              8+ years experience, patient with beginners, expert in city driving and parking techniques.
            </p>
            <div class="flex justify-center space-x-2">
              <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">VicRoads Accredited</span>
              <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Automatic</span>
            </div>
          </div>
          
          <div class="card text-center">
            <div class="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              <User class="w-12 h-12 text-gray-500" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Michael Rodriguez</h3>
            <p class="text-primary font-semibold mb-4">Driving Instructor</p>
            <p class="text-gray-600 mb-4">
              6+ years experience, specializes in test preparation and refresher courses for licensed drivers.
            </p>
            <div class="flex justify-center space-x-2">
              <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">VicRoads Accredited</span>
              <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Manual & Auto</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Approach -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-gray-900 text-center mb-16">Our Teaching Approach</h2>
        
        <div class="grid md:grid-cols-2 gap-12">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Patient, Step-by-Step Learning</h3>
            <p class="text-lg text-gray-600 mb-6">
              We understand that learning to drive can be intimidating. That's why we use a patient, 
              step-by-step approach that builds confidence gradually.
            </p>
            
            <div class="space-y-4">
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span class="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Assessment & Goal Setting</h4>
                  <p class="text-gray-600">We assess your current skills and set realistic, achievable goals</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span class="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Structured Learning</h4>
                  <p class="text-gray-600">Progressive skill building from basic controls to complex situations</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span class="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Practice & Feedback</h4>
                  <p class="text-gray-600">Regular practice with constructive feedback to reinforce learning</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span class="text-white font-bold">4</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Test Preparation</h4>
                  <p class="text-gray-600">Comprehensive test preparation to ensure success on your VicRoads test</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-6">What Makes Us Different</h3>
            <div class="space-y-6">
              <div class="bg-white rounded-lg p-6 shadow-md">
                <div class="flex items-center mb-4">
                  <Shield class="w-8 h-8 text-primary mr-3" />
                  <h4 class="text-xl font-semibold text-gray-900">Safety First</h4>
                </div>
                <p class="text-gray-600">
                  Dual-control vehicles and experienced instructors ensure your safety at all times
                </p>
              </div>
              
              <div class="bg-white rounded-lg p-6 shadow-md">
                <div class="flex items-center mb-4">
                  <Clock class="w-8 h-8 text-primary mr-3" />
                  <h4 class="text-xl font-semibold text-gray-900">Flexible Scheduling</h4>
                </div>
                <p class="text-gray-600">
                  Lessons available 7 days a week with flexible timing to suit your schedule
                </p>
              </div>
              
              <div class="bg-white rounded-lg p-6 shadow-md">
                <div class="flex items-center mb-4">
                  <MapPin class="w-8 h-8 text-primary mr-3" />
                  <h4 class="text-xl font-semibold text-gray-900">Local Knowledge</h4>
                </div>
                <p class="text-gray-600">
                  Extensive knowledge of local VicRoads test routes and Melbourne driving conditions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-gray-900 text-center mb-16">Student Success Stories</h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="card">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <User class="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Emily Johnson</h4>
                <div class="flex text-yellow-400">
                  <Star v-for="i in 5" :key="i" class="w-4 h-4 fill-current" />
                </div>
              </div>
            </div>
            <p class="text-gray-600 italic">
              "After failing my test twice with another school, I came to Deep's. The instructors identified my weak spots and helped me improve. Passed on my next attempt! The patience and expertise made all the difference."
            </p>
            <div class="mt-4 text-sm text-gray-500">Passed January 2024</div>
          </div>
          
          <div class="card">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <User class="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">David Lee</h4>
                <div class="flex text-yellow-400">
                  <Star v-for="i in 5" :key="i" class="w-4 h-4 fill-current" />
                </div>
              </div>
            </div>
            <p class="text-gray-600 italic">
              "As a complete beginner, I was very nervous. The instructors were incredibly patient and built my confidence step by step. Now I'm driving confidently every day. Highly recommend!"
            </p>
            <div class="mt-4 text-sm text-gray-500">Passed February 2024</div>
          </div>
          
          <div class="card">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <User class="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Maria Garcia</h4>
                <div class="flex text-yellow-400">
                  <Star v-for="i in 5" :key="i" class="w-4 h-4 fill-current" />
                </div>
              </div>
            </div>
            <p class="text-gray-600 italic">
              "The test package was amazing! Practice on actual test routes made all the difference. The instructor knew exactly what VicRoads testers look for. Passed first try!"
            </p>
            <div class="mt-4 text-sm text-gray-500">Passed March 2024</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-gray-900 text-center mb-16">Our Impact</h2>
        
        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Users class="w-10 h-10 text-white" />
            </div>
            <div class="text-4xl font-bold text-gray-900 mb-2">3000+</div>
            <div class="text-gray-600">Students Taught</div>
          </div>
          
          <div class="text-center">
            <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Award class="w-10 h-10 text-white" />
            </div>
            <div class="text-4xl font-bold text-gray-900 mb-2">98%</div>
            <div class="text-gray-600">Pass Rate</div>
          </div>
          
          <div class="text-center">
            <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar class="w-10 h-10 text-white" />
            </div>
            <div class="text-4xl font-bold text-gray-900 mb-2">15+</div>
            <div class="text-gray-600">Years Experience</div>
          </div>
          
          <div class="text-center">
            <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Star class="w-10 h-10 text-white" />
            </div>
            <div class="text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
            <div class="text-gray-600">Student Rating</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-primary">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold text-white mb-6">Join Our Success Story</h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Become one of our 3000+ successful students. Start your driving journey with Melbourne's trusted driving school.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact" class="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
            Book Your First Lesson
          </router-link>
          <router-link to="/services" class="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
            View Our Services
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Award, Target, Heart, Eye, User, Shield, Clock, MapPin, Star, Users, Calendar } from 'lucide-vue-next'
</script>
