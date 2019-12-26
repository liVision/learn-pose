import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../views/Start.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'start',
    component: Start
  },
  {
    path: '/DynamicProps',
    name: 'DynamicProps',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DynamicProps" */ '../views/DynamicProps.vue')
  },
  {
    path: '/AnimatingChildren',
    name: 'AnimatingChildren',
    component: () => import(/* webpackChunkName: "AnimatingChildren" */ '../views/AnimatingChildren.vue')
  },
  {
    path: '/Drag',
    name: 'Drag',
    component: () => import(/* webpackChunkName: "Drag" */ '../views/Drag.vue')
  },
  {
    path: '/DragTransition',
    name: 'DragTransition',
    component: () => import(/* webpackChunkName: "DragTransition" */ '../views/DragTransition.vue')
  },
  {
    path: '/DragEvent',
    name: 'DragEvent',
    component: () => import(/* webpackChunkName: "DragEvent" */ '../views/DragEvent.vue')
  },
  {
    path: '/Press',
    name: 'Press',
    component: () => import(/* webpackChunkName: "Press" */ '../views/Press.vue')
  },
  {
    path: '/Hover',
    name: 'Hover',
    component: () => import(/* webpackChunkName: "Hover" */ '../views/Hover.vue')
  },
  {
    path: '/Focus',
    name: 'Focus',
    component: () => import(/* webpackChunkName: "Focus" */ '../views/Focus.vue')
  },
  {
    path: '/EnterExit',
    name: 'EnterExit',
    component: () => import(/* webpackChunkName: "EnterExit" */ '../views/EnterExit.vue')
  },
  {
    path: '/EnterExitTest',
    name: 'EnterExitTest',
    component: () => import(/* webpackChunkName: "EnterExitTest" */ '../views/EnterExitTest.vue')
  },
  {
    path: '/PassiveOpacity',
    name: 'PassiveOpacity',
    component: () => import(/* webpackChunkName: "PassiveOpacity" */ '../views/PassiveOpacity.vue')
  },
  {
    path: '/PassiveDiagonal',
    name: 'PassiveDiagonal',
    component: () => import(/* webpackChunkName: "PassiveDiagonal" */ '../views/PassiveDiagonal.vue')
  },
  {
    path: '/nonNumerical',
    name: 'nonNumerical',
    component: () => import(/* webpackChunkName: "nonNumerical" */ '../views/nonNumerical.vue')
  },
  {
    path: '/PassiveAncestors',
    name: 'PassiveAncestors',
    component: () => import(/* webpackChunkName: "PassiveAncestors" */ '../views/PassiveAncestors.vue')
  },
  {
    path: '/Flip',
    name: 'Flip',
    component: () => import(/* webpackChunkName: "Flip" */ '../views/Flip.vue')
  },
  {
    path: '/Image',
    name: 'Image',
    component: () => import(/* webpackChunkName: "Image" */ '../views/Image.vue')
  },
  {
    path: '/Tween',
    name: 'Tween',
    component: () => import(/* webpackChunkName: "Tween" */ '../views/Tween.vue')
  },
  {
    path: '/Spring',
    name: 'Spring',
    component: () => import(/* webpackChunkName: "Spring" */ '../views/Spring.vue')
  },
  {
    path: '/Decay',
    name: 'Decay',
    component: () => import(/* webpackChunkName: "Decay" */ '../views/Decay.vue')
  },
  {
    path: '/Keyframes',
    name: 'Keyframes',
    component: () => import(/* webpackChunkName: "Keyframes" */ '../views/Keyframes.vue')
  },
  {
    path: '/Physics',
    name: 'Physics',
    component: () => import(/* webpackChunkName: "Physics" */ '../views/Physics.vue')
  },
  {
    path: '/Physics',
    name: 'Physics',
    component: () => import(/* webpackChunkName: "Physics" */ '../views/Physics.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
