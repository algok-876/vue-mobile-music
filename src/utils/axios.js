import axios from 'axios'
import { Toast } from 'vant'
import router from '@/router'
import customStorage from '@/utils/customStorage'

const cookie = customStorage.getItem('cookie')

const instance = axios.create({
  baseURL: 'http://www.wangwx.xyz:3000/',
  timeout: 5000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json'
  }
})

instance.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    Toast.fail('服务端异常！')
    return Promise.reject(res)
  }
  if (res.data.code != 200) {
    if (res.data.message) {
      Toast.fail(res.data.message)
      return Promise.reject(res.data)
    }
    if (res.data.code == 416) {
      router.push({ path: '/login' })
    }
  }
 
  return res.data
}, error => {
  if (error.response) {
    Toast.fail(error.response.data.message)
    return Promise.reject(error.response.data)
  } else {
    Toast.fail('请求超时')
    return Promise.reject()
  }
})
 
export default instance
 