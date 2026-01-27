import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Services from '../pages/Services.vue'
import Pricing from '../pages/Pricing.vue'
import VictoriaGuide from '../pages/VictoriaGuide.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Deep\'s Driving School Melbourne | Best Driving Lessons | VicRoads Test Preparation',
      description: 'Professional driving school in Melbourne. 3000+ students helped since 2008. VicRoads test preparation, learner permit training, automatic & manual lessons. Call +61 430 191 324'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About Deep\'s Driving School | 15+ Years Experience | Melbourne',
      description: 'Learn about Deep\'s Driving School - 15+ years of experience, 98% pass rate, 3000+ successful students in Melbourne. Accredited VicRoads driving instructors.'
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
    meta: {
      title: 'Driving Lessons Services Melbourne | Learner to P Plate | VicRoads',
      description: 'Comprehensive driving services in Melbourne: learner permit training, VicRoads test preparation, automatic & manual lessons, refresher courses, medical assessments.'
    }
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing,
    meta: {
      title: 'Driving Lesson Prices Melbourne | Affordable Packages | VicRoads Test',
      description: 'Affordable driving lesson prices in Melbourne. Packages from $65. VicRoads test preparation, learner training, special offers. Best value driving school.'
    }
  },
  {
    path: '/victoria-license-guide',
    name: 'VictoriaGuide',
    component: VictoriaGuide,
    meta: {
      title: 'Victoria Driver License Guide 2024 | VicRoads Complete Steps | Melbourne',
      description: 'Complete guide to getting Victorian driver license. VicRoads learner permit, 120 hours logbook, driving test preparation. Free PDF downloads, step-by-step instructions.'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact Deep\'s Driving School Melbourne | Book Driving Lessons | VicRoads',
      description: 'Contact Deep\'s Driving School Melbourne. Book driving lessons, VicRoads test preparation. Call +61 430 191 324. Serving South East Melbourne.'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Deep\'s Driving School Melbourne'
  const description = document.querySelector('meta[name="description"]')
  if (description) {
    description.setAttribute('content', to.meta.description || '')
  }
  next()
})

export default router
