import axios from './axios'
import customStorage from './customStorage'

export function post (url, data, isCookie = false) {
  const cookie = customStorage.getItem('cookie')
  const cookieObj = isCookie && cookie ? { cookie } : {}
  return axios.post(`${url}?timestamp=${new Date().getTime()}`, {
    ...data,
    ...cookieObj
  })
}

export function get (url, params, isCookie = false) {
  if (isCookie) {
    const cookie = customStorage.getItem('cookie')
    url += '?cookie=' + encodeURIComponent(cookie)
  }
  return axios.get(url, {
    params
  })
}
