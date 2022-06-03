import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Robot from '../views/Robot.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: HomePage
		},
		{
			path: '/about',
			component: () => import('../views/About.vue')
		},
		{
			path: '/robot',
			component: Robot
		}
	],
})

export default router