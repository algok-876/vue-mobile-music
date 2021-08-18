import axios from 'axios'
import { Toast } from 'vant'
import router from '@/router'
 
axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? 'http://www.wangwx.xyz:3000/' : 'http://www.wangwx.xyz:3000/'
axios.defaults.withCredentials = true
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    Toast.fail('服务端异常！')
    return Promise.reject(res)
  }
  if (res.data.code != 200) {
    if (res.data.message) Toast.fail(res.data.message)
    if (res.data.code == 416) {
      router.push({ path: '/login' })
    }
    return Promise.reject(res.data)
  }
 
  return res.data
}, error => {
  if (error) {
    Toast.fail(error.response.data.message)
    return Promise.reject(error.response.data)
  }
})
 
export default axios
 