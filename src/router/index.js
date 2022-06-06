import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Research from '../views/Research.vue'
import Activity from '../views/Activity.vue'
import News from '../views/News.vue'
import Contact from '../views/Contact.vue'
import Memo from '../views/Memo.vue'

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
			path: '/research',
			component: Research
		},
		{
			path: '/members',
			component: () => import('../views/Members.vue')
		},
		{
			path: '/activity',
			component: Activity
		},
		{
			path: '/news',
			component: News
		},
		{
			path: '/contact',
			component: Contact
		},
		{
			path: '/memo',
			component: Memo
		},
	],
})

export default router