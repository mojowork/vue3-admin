import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layouts/index.vue'
// there is also createWebHashHistory and createMemoryHistory
const routes = [
    {
      path: '/',
      redirect: { name: 'Dashbord' }
    },
    {
      path: '/dashbord',
      name: 'Dashbord',
      component: Layout,
      children: [
        {
          path: '',
          redirect: {
            name: 'Playground'
          }
        },
        {
          path: 'playground',
          name: 'Playground',
          component: () => import('../components/playground/index.vue')
        }
      ]
    },
    {
      path: '/components',
      name: 'Components',
      component: () => import('../layouts/index.vue'),
      children: [
        {
          path: '',
          redirect: {
            name: 'Alert'
          }
        },
        {
          path: 'alert',
          name: 'Alert',
          component: () => import('../components/components/Alert.vue')
        },
        {
          path: 'navigation',
          name: 'Navigation',
          component: () => import('../components/components/Navigation.vue')
        },
        {
          path: 'animation',
          name: 'Animation',
          component: () => import('../components/components/Animation.vue')
        },
        {
          path: 'gradient-color',
          name: 'Gradient Color',
          component: () => import('../components/components/GradientColor.vue')
        }
      ]
    }
  ]


export default createRouter({
  history: createWebHistory(),
  routes: routes,
})