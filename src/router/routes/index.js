import Home from '@/pages/Home/Home.vue'
import LoginIndex from '@/pages/Login/Index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'LoginIndex',
    component: LoginIndex,
    meta: {
      // 未登录才能进入登录页面操作
      logined: false
    }
  },
  {
    path: '/login/phone',
    name: 'LoginPhone',
    redirect: '/login/phone/step1',
    component: () => import('@/pages/Login/phone/Login.vue'),
    meta: {
      logined: false
    },
    children: [
      {
        path: 'step1',
        name: 'InputPhone',
        component: () => import('@/pages/Login/phone/InputPhone.vue'),
        meta: {
          step: 1,
          logined: false
        }
      },
      {
        path: 'step2',
        name: 'InputCaptcha',
        component: () => import('@/pages/Login/phone/InputCaptcha.vue'),
        meta: {
          step: 2,
          logined: false
        }
      },
      {
        path: 'pwd',
        name: 'InputPwd',
        component: () => import('@/pages/Login/phone/InputPwd.vue'),
        meta: {
          step: 'pwd',
          logined: false
        }
      }
    ]
  },
  {
    path: '/songlist/:id(\\d+)',
    name: 'SongList',
    component: () => import('@/pages/SongList/SongList.vue'),
    props: true
  }
]

export default routes
