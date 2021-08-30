import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/routes'
import store from '../store'


const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from) => {
  const logined = store.state.user.logined
  // 限制未登录用户才能进入登录相关页面
  if (to.meta && to.meta.logined === false && logined) {
    return false
  } else {
    return true
  }
})

export default router