import Home from '@/pages/Home/Home.vue'
import Login from '@/pages/Login/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  { 
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/songlist/:id(\\d+)',
    name: 'SongList',
    component: () => import('@/pages/SongList/SongList.vue'),
    props: true
  }
]

export default routes
