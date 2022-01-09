import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Events from '../views/Events.vue'
import Eventstoday from '../views/Eventstoday.vue'
import EventsEating from '@/views/EventsEating'
import EventsChilling from '@/views/EventsChilling'
import EventsAppointment from '@/views/EventsAppointment'
import EventsOthers from '@/views/EventsOthers'
import EventsMeeting from '@/views/EventsMeeting'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  },
  {
    path: '/eventstoday',
    name: 'Eventstoday',
    component: Eventstoday
  },
  {
    path: '/eventseating',
    name: 'EventsEating',
    component: EventsEating
  },
  {
    path: '/eventschilling',
    name: 'EventsChilling',
    component: EventsChilling
  },
  {
    path: '/eventsappointment',
    name: 'EventsAppointment',
    component: EventsAppointment
  },
  {
    path: '/eventsothers',
    name: 'EventsOthers',
    component: EventsOthers
  },
  {
    path: '/eventsmeeting',
    name: 'EventsMeeting',
    component: EventsMeeting
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
