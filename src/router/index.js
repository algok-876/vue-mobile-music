import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/routes'
import store from '../store'


const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from) => {
  const logined = store.state.user.logined
  // 控制tabbar显示与隐藏
  if (to.meta && to.meta.tabbarVisible) {
    store.commit('page/changeTabbarVisible', true)
  } else {
    store.commit('page/changeTabbarVisible', false)
  }
  // 限制未登录用户才能进入登录相关页面
  if (to.meta && to.meta.logined === false && logined) {
    return false
  } else {
    return true
  }
})

export default router