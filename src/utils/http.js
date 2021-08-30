import axios from './axios'
import customStorage from './customStorage'
const cookie = customStorage.getItem('cookie')

export function post (url, data, isCookie = false) {
  const cookieObj = isCookie && cookie ? { cookie } : {}
  return axios.post(`${url}?timestamp=${new Date().getTime()}`, {
    ...data,
    ...cookieObj
  })
}

export function get (url, params, isCookie = false) {
  if (isCookie) {
    url += '?cookie=' + encodeURIComponent(cookie)
  }
  return axios.get(url, {
    params
  })
}
